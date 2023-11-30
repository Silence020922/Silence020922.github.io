---
date: 2021-06-30
title: 一直想找一个系统架构和设计都足够干净的系统
tags:
- vitepress
- markdown
description: vitepress的markdown插件支持的语法，一直想找一个干净的系统架构和设计都足够干净都，一直没满意的，不满意就自己设计，一直想找一个干净的系统架构和设计都足够干净都，一直没满意的，不满意就自己设计
---
# 一直想找一个系统架构和设计都足够干净的系统
## 前提
理论上任何工具写出来的markdown(下文简称md)文件都能用，但是如果是按照以下方式写的话，可能表现力会丰富很多

## vitepress-markdown 特性vitepress-markdown 特性

### 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### 提示

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger what??
This is a dangerous warning
:::
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger what??
This is a dangerous warning
:::

### 代码高亮

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

### emoji表情
```markdown
:tada: :100:
```
:tada: :100:


## 规范与建议

便于效果一致，目前发现页面标题从 ## h2 开始使用可以获得最佳展示效果

<Comment />


