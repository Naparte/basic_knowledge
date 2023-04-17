// 1. 生成器

function* gen() {
  yield Promise.resolve("naparte");
  yield "naparte2";
  yield "naparte3";
  yield "naparte4";
}

const my = gen();
my.next();
my.next();
my.next();
my.next();

// 2.迭代器
// 3.set map

let set: Set<number> = new Set([1, 1, 2, 2, 3, 3]); // 1 2 3
let map: Map<any, any> = new Map();

let arr = [1, 2, 3];
map.set(arr, "naparte");
map.get(arr);

// 4.数组，伪数组，set，map 身上都有迭代器 Symbol.iterator
// 比如下面这个函数可以同时遍历，数组，伪数组，set，map
const each = (values: any) => {
  let It = values[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = It.next();
    if (!next.done) {
      console.log(next.value);
    }
  }
};

// 5.迭代器 语法糖 for of; 注意：不能对对象使用
for (const value of set) {
  console.log(value);
}

// 6. 数组底层解构原理就是调用 iterator