

enum Color {
    red, //  Color.red = 0 默认是0
    green, // Color.green = 1
    blue // Color.blue = 2
}

// 增长枚举
enum Color2 {
    red = 3, //  Color.red = 3
    green, // Color2.green = 4
    blue // Color.blue = 5
}


// 接口枚举
interface A {
    red: Color.red
}

let obj: A = {
    red: 0
}

// const枚举 会直接把变量编译成变量；let会编译成对象
const enum Type {
    success,
    fail
}

// 反向映射 注意：不支持字符串
enum Type2 {
    success = 56789
}
let success: number = Type2.success; // success === 56789
let key = Type2[success]; // key 为success


