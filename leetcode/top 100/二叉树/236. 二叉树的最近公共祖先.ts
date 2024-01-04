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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let result = null;

  function dfs(node, v1, v2) {
    if (!node) {
      return false;
    }

    let left = dfs(node.left, v1, v2);
    let right = dfs(node.right, v1, v2);

    if (
      (left && right) ||
      ((node.val === p.val || node.val === q.val) && (left || right))
    ) {
      result = node;
    }

    return left || right || node.val === p.val || node.val === q.val;
  }

  dfs(root, p, q);

  return result;
}
