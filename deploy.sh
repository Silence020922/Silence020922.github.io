npm run build
cd /home/surplus/Documents/Silence020922.github.io/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Silence020922/blog.git master:gh-pages
cd /home/surplus/Documents/Silence020922.github.io
git add -A
git commit -m 'deploy'
git push -f git@github.com:Silence020922/blog.git main
