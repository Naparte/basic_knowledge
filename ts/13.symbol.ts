
let a1: symbol = Symbol(1);
let a2: symbol = Symbol(2);

a1 === a2; // false

// for全局symbol查找有没有注册过这个key，如果有就直接拿来用，没有的话就直接创建一个
Symbol.for("naparte") === Symbol.for("naparte"); // true

// 使用symbol来定义key，防止重名
let objSymbol = {
  name: "naparte",
  [a1]: 111,
  [a2]: 222,
};

// for in 读取不到 symbol
for (let key in objSymbol) {
  console.log(key); // 只有一个 name
}

Object.getOwnPropertyNames(objSymbol); // 也是只有一个 name
Object.getOwnPropertySymbols(objSymbol); // Symbol(1) Symbol(1) 没有name
Reflect.ownKeys(objSymbol); // 三个属性都有
