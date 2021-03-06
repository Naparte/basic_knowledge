
## 手写call

```javascript

// this 为调用的函数
// context 是参数对象
Function.prototype._Call = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = Array.from(arguments).slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result;
}

```

## 手写apply
```javascript

Function.prototype._Apply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result;
}

```

## 手写bind
```javascript

// 手写一个 bind 函数
Function.prototype._bind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // 截取传递的参数
    const args = Array.from(arguments).slice(1)
    const _this = this;
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        // 对于 new 的情况来说，不会被任何方式改变 this
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        } else {
            return _this.apply(context, args.concat(...arguments))
        }
    }
}

```