/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function recursion(arr, left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);

        let root = new TreeNode(arr[mid]);

        root.val = arr[mid];
        root.left = recursion(arr, left, mid - 1);
        root.right = recursion(arr, mid + 1, right);

        return root;
    }

    return recursion(nums, 0, nums.length - 1);
};