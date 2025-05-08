---
title: 发布博客教程 #标题
published: 2025-05-08 #发布日期
description: 如何发布博客. #描述
tags: [Markdown, Blogging] #标签
category: 技术 #分类
draft: false #是否为草稿 （隐藏）
---

# 1. 先新建md文件

# 2. 把上面那些标题什么的那一段复制过去
```
---
title: 测试文章 #标题
published: 2025-05-08 #发布日期
description: A simple example of a Markdown blog post. #描述
tags: [Markdown, Blogging] #标签
category: Examples #分类
draft: false #是否为草稿 （隐藏）
---
```

# 3.git上传
```
git add . //把当前本地所有的修改加入到本地仓库
git commit -m "修改的内容" //给这次修改commit起一个名字
git push //提交commit
```

# 4. 等1-2分钟，github部署完成