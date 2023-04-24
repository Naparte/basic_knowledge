> 面试：MVC、MVP、MVVM 的区别

- 相同点：MVC，MVP 和 MVVM 都是常见的软件架构设计模式（Architectural Pattern），它通过分离关注点来改进代码的组织方式。不同于设计模式（Design Pattern），只是为了解决一类问题而总结出的抽象方法，一种架构模式往往使用了多种设计模式

- 差异点：

1. MVC 将应用抽象为数据层（Model）、视图层（View）、逻辑层（controller），降低了项目耦合。但 MVC 并未限制数据流，Model 和 View 之间可以通信。

2. MVP 则限制了 Model 和 View 的交互都要通过 Presenter，这样对 Model 和 View 解耦，提升项目维护性和模块复用性。

3. 而 MVVM 是对 MVP 的 P 的改造，用 VM 替换 P，将很多手动的数据=>视图的同步操作自动化，降低了代码复杂度，提升可维护性。

4. 那么什么是 MVVM？MVVM 是一种软件架构设计模式，它抽离了视图、数据和逻辑，并限定了 Model 和 View 只能通过 VM 进行通信，VM 订阅 Model 并在数据更新时候自动同步到视图。

[参考资料：阮一峰 MVC，MVP 和 MVVM 的图示](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
[关于 MVVM 和 MVC](https://xie.infoq.cn/article/7dbd9bf5cbb7ec18f84c2fd45)


> 为什么要通过action => mutation => state 这样变化



> 实现数据联动的方式有哪些
1. 数据劫持，数据拦截并且相应的改造
2. 脏值检查 轮训 or 实时回调
3. 发布-订阅 首回合需要做一个通知操作

追问：要实现这些方式，双向数据绑定元素


> Proxy 和 definePropertiy 优势
追问：哪些数组方式是可以被感知的