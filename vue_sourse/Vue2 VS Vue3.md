## vue3.x

vue1.x => vue2.x => 3.x
解决开发中的痛点，比如数据劫持、深度数据响应等

### 结构上的优化 - monorepo + ts
 原子结构的赋能，每个模块都能独立运行

### 性能上
> 移除了很多使用率比较低的api
> treeShaking => 产物打包优化


### 数据劫持
object.defineProperty
1. 无法检测对象属性的增加或者删除 =>  $set $delete 
2. 数组 => push pop shift unshift [下标操作数组的时候vue2感知不到]
3. 层级较深 => 递归绑定响应式，存在性能问题

proxy

