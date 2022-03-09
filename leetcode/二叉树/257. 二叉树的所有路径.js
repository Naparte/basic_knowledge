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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];

    function recursion(head, stack = []) {

        if (!head) {
            return;
        }

        stack.push(head.val);

        if (!head.left && !head.right) {
            result.push(stack.join('->'));
            stack.pop();
        }
        recursion(head.left, stack.map((item) => { return item }));
        recursion(head.right, stack.map((item) => { return item }));

    }
    recursion(root, []);

    return result;
};