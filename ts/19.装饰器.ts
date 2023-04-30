// 1. 类装饰器 ClassDecorator
// 2. 属性装饰器 PropertyDecorator
// 3. 参数装饰器 ParameterDecorator
// 4. MethodDecorator
// 5. 装饰器工厂

// 类装饰器
const Base: ClassDecorator = (target: any) => {
  console.log(target);
  target.prototype.__name__ = "naparte";
};

@Base
class HTTP {}

const http = new HTTP() as any;

http.__name__;

// 装饰器工厂
const Base2 = (name: string) => {
  const fn: ClassDecorator = (target) => {
    console.log(target);
    target.prototype.__name__ = name;
  };
  return fn;
};


@Base2("naparte")
class HTTP2 {
  constructor() {}
}

const http2 = new HTTP2() as any;

http.__name__;
