---
date: 2024-06-16
title: D-PSGD算法与实践
tags:
- FL
description: 加速transormer模型训练速度，以便应用到较长上下文中。
---
## 算法
```plaintext
输入： 初始化副本参数x0i = x0，学习率gamma，权重矩阵W，迭代上限K
在到达上限K或其他停止条件前，执行下述循环：
    从每个节点上自本地数据采样
    基于本地样本和参数副本xki执行梯度计算
    聚合邻居参数副本
    使用本地梯度信息及聚合后的参数进行参数更新
输出：所有工作节点的参数平均
```
## 代码
训练的模型为`resnet20`，使用的数据集为`PyTorch Cifar10 Training`，后端通信调用`MPI`
### 工具
#### accuracy()
计算模型准确率
```python
def accuracy(output, target, topk=(1,)):
    maxk = max(topk)
    batch_size = target.size(0)
    # 选取概率最大的标签作为预测结果
    _, pred = output.topk(maxk, 1, True, True) 
    pred = pred.t()
    
    correct = pred.eq(target.view(1, -1).expand_as(pred))

    res = []
    for k in topk:
        correct_k = correct[:k].view(-1).float().sum(0, keepdim=True)
        res.append(correct_k.mul_(100.0 / batch_size))
    return res
```

#### broadcast
节点信息传递
```python
def broadcast(data, rank, world_size, recv_buff_l, recv_buff_r):
    left = ((rank - 1) + world_size) % world_size # cycle
    right = (rank + 1) % world_size
    # 异步发送、接受信息
    send_req_l = dist.isend(data, dst=left)
    recv_req_r = dist.irecv(recv_buff_r, src=right)
    recv_req_r.wait()
    send_req_l.wait()
    send_req_r = dist.isend(data, dst=right)
    recv_req_l = dist.irecv(recv_buff_l, src=left)
    recv_req_l.wait()
    send_req_r.wait()
```

#### flatten
数据展平
```python
def flatten_all(model):
    vec = []
    for param in model.parameters():
        vec.append(param.data.view(-1))
    for b in model._all_buffers():
        vec.append(b.data.view(-1))
    return torch.cat(vec)

def flatten(model):
    vec = []
    for param in model.parameters():
        vec.append(param.data.view(-1))
    return torch.cat(vec)

def unflatten(model, vec):
    pointer = 0
    for param in model.parameters():
        num_param = torch.prod(torch.LongTensor(list(param.size())))
        param.data = vec[pointer:pointer + num_param].view(param.size())
        pointer += num_param

def unflatten_all(model, vec):
    pointer = 0
    for param in model.parameters():
        num_param = torch.prod(torch.LongTensor(list(param.size())))
        param.data = vec[pointer:pointer + num_param].view(param.size())
        pointer += num_param
    for b in model._all_buffers():
        num_param = torch.prod(torch.LongTensor(list(b.size())))
        b.data = vec[pointer:pointer + num_param].view(b.size())
        pointer += num_param
```
#### Class AverageMeter
```python
class AverageMeter(object):
    """Computes and stores the average and current value"""
    def __init__(self):
        self.reset()

    def reset(self):
        self.val = 0
        self.avg = 0
        self.sum = 0
        self.count = 0

    def update(self, val, n=1):
        self.val = val
        self.sum += val * n
        self.count += n
        self.avg = self.sum / self.count
```

#### validate()
验证过程
```python
def validate(val_loader, model, criterion):
    losses = AverageMeter()
    top1 = AverageMeter()

    # switch to evaluate mode
    model.eval()

    for i, (input, target) in enumerate(val_loader):
        input_var = torch.autograd.Variable(input.cuda()) # torch.Tensor(input.cuda(),requires_grad = True)
        target = target.cuda(non_blocking=True)
        target_var = torch.autograd.Variable(target)

        # compute output
        with torch.no_grad():
            output = model(input_var)
            loss = criterion(output, target_var)

        # measure accuracy and record loss
        prec1 = accuracy(output.data, target, topk=(1,))
        losses.update(loss.data.item(), input.size(0))
        top1.update(prec1[0], input.size(0))

    return losses.avg, top1.avg
```

#### train()
训练过程
```python
def train(train_loader, model, criterion, optimizer, epoch, rank, world_size, model_l, model_r):
    losses = AverageMeter()
    top1 = AverageMeter()

    # switch to train mode
    model.train()

    for i, (input, target) in enumerate(train_loader):
        input_var = torch.autograd.Variable(input.cuda())
        target = target.cuda(non_blocking=True)
        target_var = torch.autograd.Variable(target)

        # compute output
        output = model(input_var)
        loss = criterion(output, target_var)

        # compute gradient and do SGD step
        optimizer.zero_grad()
        loss.backward()
        for param in model.parameters():
            param.grad.data.add_(0.0001,param.data)  # 这是在做什么？ 
        # measure accuracy and record loss
        prec1 = accuracy(output.data, target, topk=(1,))
        losses.update(loss.data.item(), input.size(0))
        top1.update(prec1[0], input.size(0))
        
        # communicate
        model_flat = flatten(model)
        broadcast(model_flat, rank, world_size, model_l, model_r)
        model_flat.add_(model_l)
        model_flat.add_(model_r)
        model_flat.div_(3)
        unflatten(model, model_flat)

        optimizer.step()

    return losses.avg
```
### 核心函数
```python
def coordinate(rank, world_size): # world_size - 1 作为协调配置的服务器
    output = open("DPSGD_output.txt", "w")
    args = parser.parse_args()
    model = resnet20()
    model = model.cuda()
    model_flat = flatten_all(model)
    dist.broadcast(model_flat, world_size)
    # define loss function (criterion) and optimizer
    criterion = nn.CrossEntropyLoss().cuda()
    cudnn.benchmark = True

    # Data loading code
    train_transform = transforms.Compose(
        [transforms.RandomCrop(32, padding=4), # 填充、裁剪
        transforms.RandomHorizontalFlip(), # 水平翻转
        transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))]) # 标准化

    val_transform = transforms.Compose(
        [transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))])

    trainset = datasets.CIFAR10(root='./data', train=True,download=False, transform=train_transform)
    train_loader = torch.utils.data.DataLoader(trainset, batch_size=128,pin_memory=True,shuffle=False, num_workers=2) # pin_memory 允许的情况下加载数据进入cuda固定内存中，num_workers通过两个子进程加载数据

    valset = datasets.CIFAR10(root='./data', train=False,download=False, transform=val_transform)
    val_loader = torch.utils.data.DataLoader(valset, batch_size=100,pin_memory=True,shuffle=False, num_workers=2)
   
    time_cost = 0
    for epoch in range(args.epochs):
        dist.barrier() # 确保同步
        t1 = time.time()
        dist.barrier()
        t2 = time.time() 
        time_cost += t2 - t1 # 记录同步耗时
        model_flat.zero_()
        loss = torch.FloatTensor([0])
        dist.reduce(loss, world_size, op=dist.reduce_op.SUM) # 归约
        loss.div_(world_size)
        dist.reduce(model_flat, world_size, op=dist.reduce_op.SUM)
        model_flat.div_(world_size)
        unflatten_all(model, model_flat)
        # evaluate on validation set
        _ ,prec1 = validate(val_loader, model, criterion)
        output.write('%d %3f %3f %3f\n'%(epoch,time_cost,loss.item(),prec1))
        output.flush()
    
    output.close()
```

```python
def run(rank, world_size):
    print('Start node: %d  Total: %3d'%(rank,world_size))
    args = parser.parse_args()
    current_lr = args.lr
    adjust = [80,120]


    model = resnet20()
    model = model.cuda()
    model_flat = flatten_all(model)
    dist.broadcast(model_flat, world_size)
    unflatten_all(model, model_flat)
    model_l = flatten(model)
    model_r = flatten(model)
    # define loss function (criterion) and optimizer
    criterion = nn.CrossEntropyLoss().cuda()

    optimizer = torch.optim.SGD(model.parameters(), lr=current_lr, weight_decay=0.0001)

    cudnn.benchmark = True

    # Data loading code
    train_transform = transforms.Compose(
        [transforms.RandomCrop(32, padding=4),
        transforms.RandomHorizontalFlip(),
        transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))])

    trainset = datasets.CIFAR10(root='./data', train=True,download=False, transform=train_transform)
    train_sampler = torch.utils.data.distributed.DistributedSampler(trainset, num_replicas=world_size, rank=rank)
    train_loader = torch.utils.data.DataLoader(trainset, batch_size=128//world_size,pin_memory=True,shuffle=False, num_workers=2, sampler=train_sampler)
    
    val_transform = transforms.Compose(
        [transforms.ToTensor(),
        transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))])

    valset = datasets.CIFAR10(root='./data', train=False,download=False, transform=val_transform)
    val_loader = torch.utils.data.DataLoader(valset, batch_size=100,pin_memory=True,shuffle=False, num_workers=2)
  
    for epoch in range(args.epochs):
        dist.barrier()

        # adjust learning rate 
        if epoch in adjust: 
            current_lr = current_lr * 0.1    
            for param_group in optimizer.param_groups:
                param_group['lr'] = current_lr

        # train for one epoch
        train_sampler.set_epoch(epoch)	
        loss = train(train_loader, model, criterion, optimizer, epoch, rank, world_size, model_l, model_r)
        dist.barrier()
        model_flat = flatten_all(model)
        
        dist.reduce(torch.FloatTensor([loss]), world_size, op=dist.reduce_op.SUM)
        dist.reduce(model_flat, world_size, op=dist.reduce_op.SUM)

        #output.write('Epoch: %d  Time: %3f  Train_loss: %3f  Val_acc: %3f\n'%(epoch,time_cost,loss,prec1))
```