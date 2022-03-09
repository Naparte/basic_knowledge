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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];

    function recursion(head) {
        if (!head) {
            return;
        }
        result.push(head.val);

        recursion(head.left);
        recursion(head.right);

    }

    recursion(root);
    return result;
};