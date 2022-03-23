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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];

    function recursion(head, level) {
        if (!head) {
            return;
        }
        result[level] = result[level] || [];
        result[level].push(head.val);

        recursion(head.left, level + 1);
        recursion(head.right, level + 1);

    }

    recursion(root, 0);
    return result;
};