class A {
  type: boolean;
  changType() {
    this.type = !this.type;
  }
}

class B {
  name: string;
  getName(): string {
    return this.name;
  }
}

class C implements A, B {
  type: boolean;
  name: string;
  changType: () => void;
  getName: () => string;
}

mixins(C, [A, B]);
function mixins(curClass: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    console.log(item);
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      curClass.prototype[name] = item.prototype[name];
    });
  });
}

