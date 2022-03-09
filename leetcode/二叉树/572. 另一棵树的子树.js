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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    function recursion(head, sub) {
        if (!head) {
            return false;
        }

        return isSameTree(head, sub) || recursion(head.left, sub) || recursion(head.right, sub);
    }

    function isSameTree(head, sub) {
        if (!head && !sub) {
            return true;
        }
        if (!head || !sub || head.val !== sub.val) {
            return false;
        }

        return head.val === sub.val && isSameTree(head.left, sub.left) && isSameTree(head.right, sub.right);
    }


    return recursion(root, subRoot);

};