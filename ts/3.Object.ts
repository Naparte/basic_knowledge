// 错误写法
let a1: object = 123
let a2: object = 'string'
let a3: object = false

//  正常写法
let a4: object = []
let a5: object = {}
let a6: object = () => { }


// 大写Object
let a7: Object = 123
let a8: Object = 'string'
let a9: Object = []
let a10: Object = { aaa: { bbb: 1 } }
let a11: Object = () => { }

// {} 形式，可以理解为大写的 Object
let o1: Object = 123
let o2: Object = 'string'
let o3: Object = []
let o4: Object = { aaa: { bbb: 1 } }
let o5: Object = () => { }

o4.aaa // 不可读写属性


