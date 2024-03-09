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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result: number[][] = [];

  function dfs(node: TreeNode | null, path: number[] = [], count = 0) {
    if (!node) {
      return;
    }

    path.push(node.val);
    count += node.val;

    if (count === targetSum && !node.left && !node.right) {
      result.push(path);
      return;
    }

    dfs(node.left, [...path], count);
    dfs(node.right, [...path], count);
  }

  dfs(root, [], 0);
  return result;
}
