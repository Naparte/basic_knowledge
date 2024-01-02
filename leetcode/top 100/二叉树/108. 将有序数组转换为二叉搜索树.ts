/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  let length = nums.length;

  if (!length) {
    return null;
  }

  let mid = Math.floor(length / 2);

  let head = new TreeNode(nums[mid]);

  head.left = sortedArrayToBST(nums.slice(0, mid));
  head.right = sortedArrayToBST(nums.slice(mid + 1, length));

  return head;
}
