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
var averageOfLevels = function(root) {

    let resuletLevel = [];

    function getLevel(head, level = 0) {
        if (!head) {
            return;
        }

        resuletLevel[level] ? resuletLevel[level].push(head.val) : resuletLevel[level] = [head.val];

        getLevel(head.left, level + 1);
        getLevel(head.right, level + 1);
    }

    getLevel(root);

    return resuletLevel.map((arr) => {
        return arr.reduce((calculate, val) => {
            return calculate + val;
        }, 0) / arr.length;
    });

};