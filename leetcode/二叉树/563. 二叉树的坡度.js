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
var findTilt = function(root) {

    let result = 0;

    function recursion(head) {
        if (!head) {
            return 0;
        }


        let left = recursion(head.left);
        let right = recursion(head.right);
        result += Math.abs(right - left);

        return left + right + head.val;

    }

    recursion(root);

    return result;
};