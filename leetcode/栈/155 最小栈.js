var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.stack.push(val);
        this.stack.push(val);
    } else {
        let len = this.stack.length;
        this.stack.push(val);
        if (val < this.stack[len - 1]) {
            this.stack.push(val)
        } else {
            this.stack.push(this.stack[len - 1]);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.stack.length;
    return this.stack[len - 2]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let len = this.stack.length;
    return this.stack[len - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */