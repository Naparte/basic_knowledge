/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    function isExist(head, treeNode) {
        if (!head) {
            return false;
        }

        if (head.val === treeNode.val) {
            return true;
        }

        return isExist(head.left, treeNode) || isExist(head.right, treeNode);
    }

    if (isExist(root.left, p) && isExist(root.left, q)) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (isExist(root.right, p) && isExist(root.right, q)) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};