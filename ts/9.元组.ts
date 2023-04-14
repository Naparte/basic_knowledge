
let arr: [number, boolean] = [1, true] // 推断成 let arr: [number, boolean]
arr.push(null); // 只能push number 和 boolean
arr.push(1);

// 使用const 定义
const arr2: [number, boolean] = [1, true]
arr2[0] = 3;// 数组项可以修改
arr2 = [2, true]// 不允许修改引用

// 不允许修改
let arr3: readonly [number, boolean] = [1, true]
arr3.push(1);


// 可选
let arr4: readonly [x: number, y?: boolean] = [1]

// demo
let excel: [string, string, number][] = [
    ['naparte', 'man', 25]
]


// 其他妙用
let arr5: [number, boolean] = [444, false];
type first = typeof arr[1] // 推断为 type first = boolean