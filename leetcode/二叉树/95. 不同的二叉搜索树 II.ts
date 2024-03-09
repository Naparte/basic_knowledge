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

function generateTrees(n: number): Array<TreeNode | null> {
  function dfs(start: number, end: number): Array<TreeNode | null> {
    if (start > end) {
      return [null];
    }

    let result = [];

    for (let i = start; i <= end; i++) {
      const left = dfs(start, i - 1);
      const right = dfs(i + 1, end);

      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          const node = new TreeNode(i, left[j], right[k]);
          result.push(node);
        }
      }
    }

    return result;
  }

  return dfs(1, n);
}
