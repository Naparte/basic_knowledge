/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    let result = [];

    function recursionFn(head) {
        if (!head) { return; }
        recursionFn(head.left);
        result.push(head.val);
        recursionFn(head.right)
    }

    recursionFn(root);
    this.result = result;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.result.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.result.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */