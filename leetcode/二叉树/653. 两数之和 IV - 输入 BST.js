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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {

    let searcharr = [];

    function rescursion(head) {
        if (!head) {
            return;
        }

        searcharr.push(head.val);

        rescursion(head.left);
        rescursion(head.right);
    }


    rescursion(root);
    let map = {};

    for (let i = 0; i < searcharr.length; i++) {
        let num = searcharr[i];
        if (map[k - num]) {
            return true;
        }
        map[searcharr[i]] = true;
    };
    return false;
};