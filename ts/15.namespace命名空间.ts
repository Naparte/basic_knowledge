namespace A {
  export const a = 10;
}

console.log(A.a); // 10



// 嵌套
namespace B {
  export namespace C {
    export const c = 20;
  }
}

console.log(B.C.c);


// 别名
import BC = B.C;
console.log(BC.c);
