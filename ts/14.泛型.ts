// 场景一：动态类型  解决下面重复性定义的 工作量

function fnNumber(a: number, b: number): Array<number> {
  return [a, b];
}
function fnString(a: string, b: string): Array<string> {
  return [a, b];
}

// 优化后

function fnKey<T>(a: T, b: T): Array<T> {
  return [a, b];
}

fnKey(1, 2); // 推断为 function fnKey<number>(a: number, b: number): number[]

//  场景二
type A<T> = string | number | T;
let a: A<boolean> = true;

interface Data<T> {
  msg: T;
}
let data: Data<string> = {
  msg: "msssg",
};

// 场景三：

function add<T, K>(a: T, b: K): Array<T | K> {
  return [a, b];
}

// 推断为 function add<number, string>(a: number, b: string): (string | number)[]
add(1, "msg");

// 泛型约束
// 在类型后门跟一个 extends 再跟一个约束的类型

function add2<T extends number>(a: T, b: T) {
  return a + b;
}

//
interface Data2 {
  name: string;
  agg: number;
  sex: string;
}

type Options<T extends object> = {·
  readonly [Key in keyof T]?: T[Key];
};

// 推断为 type Options<T extends object> = { readonly [Key in keyof T]?: T[Key] | undefined; }
type B  = Options<Data2>
