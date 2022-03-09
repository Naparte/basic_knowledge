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
var sumRootToLeaf = function(root) {
    let result = 0;
    let path = 0;

    function rescrsion(head) {
        if (!head) {
            return;
        }
        path = (path << 1) | head.val;
        if (!head.left && !head.right) {
            console.log(path);
            result += path;
        }

        rescrsion(head.left);
        rescrsion(head.right);
        path = path >> 1;
    }
    rescrsion(root);

    return result;

};