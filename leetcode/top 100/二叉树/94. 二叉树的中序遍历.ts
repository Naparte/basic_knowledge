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

// function inorderTraversal(root: TreeNode | null): number[] {
//   let result: number[] = [];

//   rescursive(root, result);

//   return result;
// }

// function rescursive(node: TreeNode | null, res: number[]) {
//   if (!node) {
//     return;
//   }
//   rescursive(node?.left, res);
//   res.push(node.val);
//   rescursive(node?.right, res);
// }

// 迭代思路
function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];

  let stack: TreeNode[] = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    result.push(root.val);

    root = root.right;
  }

  return result;
}
