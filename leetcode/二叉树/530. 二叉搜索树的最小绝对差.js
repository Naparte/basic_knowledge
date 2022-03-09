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
var getMinimumDifference = function(root) {
    let result = Infinity;
    let pre = null;

    function recursion(head) {

        if (!head) {
            return;
        }

        recursion(head.left);
        if (!pre) {
            pre = head;
        } else {
            result = Math.min(result, head.val - pre.val);
            pre = head;
        }

        recursion(head.right);

    }
    recursion(root);
    return result;
};