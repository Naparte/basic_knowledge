// 1、class 的基本用法 继承 和 类型约束 implements
// 2、class 的修饰符 readonly private protected public static
// 3、super原理
// 4、静态方法
// 5、get set


interface Options {
    el: string | HTMLElement
}

interface VueCls {
    option: Options
    init(): void
}

class Vue implements VueCls {
    option: Options
    constructor(option: Options) {
        this.option = option
    }
    init(): void {

    }
}

nwe Vue({
    el: 'appid'
})