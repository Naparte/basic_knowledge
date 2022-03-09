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
 * @return {string}
 */
var tree2str = function(root) {

    let result = '';


    if (!root) {
        return '';
    }


    result += root.val;

    if (root.left || root.right) {
        result += '(' + tree2str(root.left) + ')';
        result += root.right && ('(' + tree2str(root.right) + ')') || '';
    }

    return result;


};