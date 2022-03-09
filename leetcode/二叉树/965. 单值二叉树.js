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
var isUnivalTree = function(root) {
    let flag = true;

    function rescrsion(head) {
        if (!head || !flag) {
            return;
        }

        if (head.val !== root.val) {
            flag = false;
        }

        rescrsion(head.left);
        rescrsion(head.right);
    }

    rescrsion(root);

    return flag;

};