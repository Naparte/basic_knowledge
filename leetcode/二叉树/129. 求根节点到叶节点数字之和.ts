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

function sumNumbers(root: TreeNode | null): number {
  let result: string[][] = [];

  function dfs(head, path: string[]) {
    if (!head) {
      return;
    }
    path.push(head.val + "");

    if (!head.left && !head.right) {
      result.push(path);
      return;
    }

    dfs(head.left, [...path]);
    dfs(head.right, [...path]);
  }

  dfs(root, []);

  console.log(result);

  return result.reduce((calcute, arr) => {
    calcute += +arr.join("");

    return calcute;
  }, 0);
}
