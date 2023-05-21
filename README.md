# basic_knowledge


> 添加子模块
- git submodule add <repository> <path> 
- git submodule add -b <branch> <repository> <path> 
- [repository 子模块的Git仓库地址，path子模块路径，branch 子仓库的分支]

> 初始化子模块
- git submodule init 
-[该命令会初始化父仓库中所有的子模块，将它们的状态记录在 .gitmodules 文件中]

> 更新子模块
- git submodule update 
- [该命令会更新父仓库中所有的子模块，将它们的代码更新到最新版本]

> 删除子模块

- git submodule deinit <path>
- git rm <path>

QA:

> fatal: please make sure that the .gitmodules file is in the working tree
- git restore .gitmodules