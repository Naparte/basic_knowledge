var CQueue = function() {
    this.stack = [];
    this.assistStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.assistStack.push(value);
    this.stack.forEach((item) => {
        this.assistStack.push(item);
    });
    this.stack = this.assistStack;
    this.assistStack = [];
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    let v = this.stack.pop()
    return v === undefined ? -1 : v;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */