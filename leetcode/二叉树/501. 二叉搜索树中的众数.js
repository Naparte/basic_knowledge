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
 * @return {number[]}
 */
var findMode = function(root) {
    let map = {};

    function recursion(head) {
        if (!head) {
            return;
        }
        map[head.val] = (map[head.val] || 0) + 1;
        recursion(head.left);
        recursion(head.right);
    }

    recursion(root);


    let max = Math.max(...Object.values(map));




    return Object.keys(map).filter((key) => {
        return map[key] === max;
    });
};