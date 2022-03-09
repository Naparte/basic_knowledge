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
var minDiffInBST = function(root) {

    let min = Infinity;
    let pre = null;

    function rescrsion(head) {
        if (!head) {
            return;
        }

        rescrsion(head.left);
        if (pre === null) {
            pre = head.val;
        } else {
            min = Math.min(min, head.val - pre);
            pre = head.val;
        }

        rescrsion(head.right);

    }

    rescrsion(root);

    return min;

};