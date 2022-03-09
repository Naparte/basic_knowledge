/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let treeP = [];
    let treeQ = [];

    function getNode(root, arr) {

        if (!root) {
            arr.push(null);
            return;
        }
        arr.push(root.val);
        getNode(root.left, arr);
        getNode(root.right, arr);
    }

    getNode(p, treeP);
    getNode(q, treeQ);

    return !treeP.some((val, index) => {
        return val !== treeQ[index];
    })
};