# npm vs yarn vs pnpm


<!-- > npm 安装机制
- 首先，执行 npm install 之后，会检查和获取 npm 的配置，这里的优先级为：
    - 项目级的 .npmrc 文件 > 用户级的 .npmrc 文件 > 全局级的 .npmrc > npm 内置的 .npmrc 文件
    - 然后，检查项目中是否有 package-lock.json 文件：

- 如果有，检查 package-lock.json 和 package.json 声明的依赖是否一致：
    - 一致，直接使用 package-lock.json 中的信息，从网络或者缓存中加载依赖。
    - 不一致，根据下述流程中的不同版本进行处理。
  
- 如果没有，那么会根据 package.json 递归构建依赖树，然后就会根据构建好的依赖去下载完整的依赖资源，在下载的时候，会检查有没有相关的资源缓存：
    - 存在，直接解压到 node_modules 文件中。
    - 不存在，从 npm 远端仓库下载包，校验包的完整性，同时添加到缓存中，解压到 node_modules 中 -->


> npm/yarn install 原理
- 主要分为两个部分, 首先，执行 npm/yarn install之后，包如何到达项目 node_modules 当中。其次，node_modules 内部如何管理依赖;执行命令后，首先会构建依赖树，然后针对每个节点下的包，会经历下面四个步骤:
1. 将依赖包的版本区间解析为某个具体的版本号
2. 下载对应版本依赖的 tar 包到本地离线镜像
3. 将依赖从离线镜像解压到本地缓存
4. 将依赖从缓存拷贝到当前目录的 node_modules 目录


> 依赖在node_modules内部目录结构

```javascript
//  npm1、npm2 中呈现出的是嵌套结构

node_modules
└─ foo
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ bar
         ├─ index.js
         └─ package.json

// 设计存在什么问题:
// 1. 依赖层级太深，会导致文件路径过长的问题，尤其在 window 系统下。
// 2. 大量重复的包被安装，文件体积超级大。比如跟 foo 同级目录下有一个baz，两者都依赖于同一个版本的lodash，那么 lodash 会分别在两者的 node_modules 中被安装，也就是重复安装。
// 3. 模块实例不能共享。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug。
           
```

```javascript
//  npm3 中呈现出的是嵌套结构

node_modules
├─ foo
|  ├─ index.js
|  └─ package.json
└─ bar
   ├─ index.js
   └─ package.json


// 1. 依赖结构的不确定性(不确定性是指，foo和bar都依赖 base64的npm，但是版本不一致，谁先被提到node_modules下面的是不确定的)。
// 2. 扁平化算法本身的复杂性很高，耗时较长。
// 3. 项目中仍然可以非法访问没有声明过依赖的包
           
```
