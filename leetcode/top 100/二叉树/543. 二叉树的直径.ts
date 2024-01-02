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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;
  function maxDepth(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);

    res = Math.max(res, right + left);
    return Math.max(left, right) + 1;
  }

  maxDepth(root);
  return res;
}
