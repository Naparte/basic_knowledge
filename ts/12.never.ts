
type N = string & number; // 推断为 type N = never

function fn(): never {
    throw new Error('error')
}

function fn2(): never {
    while (true) {

    }
}

// 联合类型下，never会被忽略
type NN = void | number | never；// type NN = number | void