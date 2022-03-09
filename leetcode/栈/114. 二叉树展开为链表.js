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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let result = [];

    let fn = function(head, list) {
        if (head === null) {
            return;
        }
        list.push(head);
        fn(head.left, list);
        fn(head.right, list);
    }
    fn(root, result);

    result.forEach((treeNode, index) => {
        treeNode.left = null;
        let right = result[index + 1];
        treeNode.right = right || null;
    });

    return root;
};