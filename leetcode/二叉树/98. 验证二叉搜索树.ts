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

function isValidBST(root: TreeNode | null): boolean {
  function dfs(head, min, max) {
    if (!head) {
      return true;
    }
    if (head.val < min || head.val > max) {
      return false;
    }

    return dfs(head.left, min, head.val) && dfs(head.right, head.val, max);
  }

  return dfs(root, -Infinity, Infinity);
}
