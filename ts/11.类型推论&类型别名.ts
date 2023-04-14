

let str = 'naparte' // 推断 let str: string
str = 123

let arr = [1, 2, 3] // 推断 let arr: number[]
arr.push(234);
arr.push('str')

// 别名
type a = string | number;
type s = [];
type fn = (s: string) => void

// 别名和interface区别1 interface 可以用extends继承；type不行
interface A extends B { }
interface B { }

// 别名和interface区别2 interface 不能在外面定义联合类型
interface C {
    name: string | number
}

type cc = number | string

// 别名和interface遇到重名的会自己合并，type不会自己合并
interface AA {
    name: string
}
interface AA {
    age: number
}

// 高级用法
type num = 1 extends number ? 1 : 0; // 左边的值会作为右边类型的子类型  推断为 type num = 1
type num1 = 1 extends never ? 1 : 0;  // 推断为 type num1 = 0