/**
 * @param {number} stackSize
 */

var TripleInOne = function(stackSize) {
    this.stackSize = stackSize;
    this.stack = [
        [],
        [],
        []
    ];
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    let stack = this.stack[stackNum];
    if (stack.length + 1 <= this.stackSize) {
        stack.push(value);
    }
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    let stack = this.stack[stackNum];
    if (stack.length) {
        return stack.pop();
    }
    return -1;
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    let stack = this.stack[stackNum];
    if (stack.length) {
        return stack[stack.length - 1];
    }
    return -1;
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    let stack = this.stack[stackNum];
    return !stack.length;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */