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
var diameterOfBinaryTree = function(root) {

    let max = 0;

    function getDepth(head) {

        if (!head) {
            return 0;
        }

        let left = getDepth(head.left);
        let right = getDepth(head.right);

        max = Math.max(max, right + left + 1);

        return Math.max(left, right) + 1;
    }

    getDepth(root);
    return max - 1

};