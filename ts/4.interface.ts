
// interface 重名 重合
// interface 任意key
// interface ? readonly
// interface 接口继承
// interface 定义函数类型

interface Naparte extends Parent {
    name: string
    age: number
    [prop: string]: any // 其他任何属性名
}

interface Parent {
    long: string
    age: string
}

let me: Naparte = {
    name: 'Namparte',
    age: 10,
    long: '10'
}

interface Fn {
    // 函数参数类型：函数返回类型
    (name: string): number[]
}

const fn: Fn = function () {
    return [222]
}



fn(111);


// 数组普通类型
let arr: number[] = [1, 2, 3, 4, 5]
let arr1: boolean[] = [true, false]
let arr2: Array<number> = [32, 3, 4, 5, 6]

// 定义对象数组
interface Nap {
    name: string
    age?: number
}

let arr3 = [{ name: 'naparte', age: 18 }, { name: 'HHHAAA' }]


// 二维数组
let arr4: number[][] = [[1], [2], [3]];
let arr5: Array<Array<number>> = [[1], [2], [3]];


// 函数中定义参数伪数组，IArguments
function a(...arg: string[]) {
    let a: IArguments = arguments;
}

