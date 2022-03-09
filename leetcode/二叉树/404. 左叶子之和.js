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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let result = 0;

    function recursion(head, isLeft) {
        if (!head) {
            return 0;
        }

        if (!head.left && !head.right && isLeft) {
            result += head.val;
        }
        recursion(head.left, true);
        recursion(head.right, false);
    }

    recursion(root, false);
    return result;
};