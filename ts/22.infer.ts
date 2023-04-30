//  定义一个类型，如果是数组类型，就返回数组元素的类型，否则 就传入什么类型就返回什么类型
type TYPE<T> = T extends Array<any> ? T[number] : T;

type AAA = TYPE<(string | number)[]>; // 推断为 type AAA = string | number

// 优化之后写法
type TYPE_INFER<T> = T extends Array<infer U> ? U : T;



