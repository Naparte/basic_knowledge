// 1.函数定义类型和返回值 ｜ 箭头函数定义函数类型和返回值
// 2.函数默认的参数 ｜ 函数参数可选
// 3.参数是一个对象如何定义
// 4.函数this类型
// 5.函数重载

function createPersonal(name: string, age: number): string {
  return name + age;
}

// 箭头函数
const add = (a: number, b: number): number => a + b;

//  函数默认的参数 : 注意可选参数不能给默认值
function fnDefault(name: string = "Naparte", age?: number = 25): string {
  return name + age;
}

// 参数是一个对象
interface Naparte {
  name: string;
  age: number;
}

function createObj(obj: Naparte): Naparte {
  return obj;
}

// 函数this类型

interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;
}
// ts 可以定this的类型，在js中无法使用，必须是第一个参数定义this的类型
let obj: Obj = {
  user: [21, 3, 4],
  add(this: Obj, num: number): void {
    this.user.push(num);
  },
};

// 函数重载 注意：最后一个才是函数的实现体，前面的都是定义的函数没有实体
let user: number[] = [1, 32, 4];
function findName(add: number[]): number[]; // 如果传入的是一个number数组就是添加
function findName(id: number): number[]; //如果传入id就是单个查询
function findName(): number[]; // 如果没有参数就是查询全部
function findName(ids?: number | number[]): number[] {
  if (typeof ids === "number") {
    return user.filter((v) => v === ids);
  } else if (Array.isArray(ids)) {
    user.push(...ids);
    return user;
  } else {
    user;
  }
}
