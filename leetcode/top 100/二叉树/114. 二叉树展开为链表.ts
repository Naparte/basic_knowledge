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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  let result: TreeNode[] = [];

  function dfs(node) {
    if (!node) {
      return;
    }

    result.push(node);

    let left = node.left;
    let right = node.right;

    node.left = null;
    node.right = null;

    dfs(left);
    dfs(right);
  }

  dfs(root);

  result.forEach((node, index) => {
    node.right = result[index + 1] || null;
  });
}
