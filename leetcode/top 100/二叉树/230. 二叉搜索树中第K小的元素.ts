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

function kthSmallest(root: TreeNode | null, k: number): number {
  let result: number[] = [];

  function dfs(node) {
    if (!node) {
      return;
    }

    result.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  result.sort((a, b) => {
    return a - b;
  });

  return result[k - 1];
}
