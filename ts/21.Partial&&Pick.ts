type Persons = {
  name: string,
  age: number
}

type p = Partial<Persons> // 属性全部解析为可选
// type p = {
//   name?: string | undefined;
//   age?: number | undefined;
// }

type pp = Pick<Persons, 'age'>
// type pp = {
//   age: number;
// }
