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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    function getLevel(head) {
        if (!head) {
            return 0;
        }
        return Math.max(getLevel(head.left), getLevel(head.right)) + 1;
    }

    return (Math.abs(getLevel(root.left) - getLevel(root.right)) < 2) && isBalanced(root.left) && isBalanced(root.right);
};