> 面试：vue 中有哪些实现定向监听的方法
> computed 和 watch 异同：

- 相同点：

1. 都是基于 Vue 的依赖收集机制 => a: {b: 1} => {{a}} - {{b}}
2. 都是被依赖的变化处罚，进行改变进而进行处理计算

- 不同点：

1. 入和出

   - computed： 多入单出 - 多个值变化，组成导致一个值的变化
   - watch：单入多出 - 单个值变化，进而影响一系列状态的变更

2. 性能

   - computed： 自动 diff 依赖，如果依赖没有变化，优先从缓存中读取当前计算值 （比如 b 先+1，然后-1 实际上没有变化）
   - watch：无论监听值发生变化与否，都会执行回调

3. 写法

   - computed：必须有 return
   - watch：不一定

4. 时机上
   - computed：从首次生成赋值，就开始计算运行了
   - watch：首次是不运行的，初始化就跑 immediat：true

> 面试题： v-for 和 v-if 优先级

- vue2.x 中：v-for 会优先相应
- vue3.x 中：v-if 优先

> 面试题：key 的作用

1. 模板编译原理 -- template => demo
   template => 正则匹配语法 - 生成 AST：静态+动态 => 转换为节点，并且这份题生成可执行的方法 => render()  => dom
2. dom diff 快速识别节点
3. key - 尽量可复用节点标识
   - 常见问题：index 做 key、随机数做 key（可拖拽列表，第一个拖到第三个之后，可能不会渲染要动态改数据顺序来触发更新=> 多做了一次 render，其实只要改变 key 的标识就行了）
