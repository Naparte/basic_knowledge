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

// function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) {
//     return [];
//   }
//   let result: number[][] = [];
//   let stack = [root];

//   while (stack.length) {
//     let size = stack.length;

//     result.push([]);

//     for (let i = 0; i < size; i++) {
//       let node = stack.shift();
//       result[result.length - 1].push(node.val);
//       if (node.left) {
//         stack.push(node.left);
//       }
//       if (node.right) {
//         stack.push(node.right);
//       }
//     }
//   }

//   return result;
// }

// 递归

function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  let t = [];
  function dfs(node, depth) {
    if (!node) {
      return;
    }
    if (!result[depth]) {
      result[depth] = [node.val];
    } else {
      result[depth].push(node.val);
    }

    node.left && dfs(node.left, depth + 1);
    node.right && dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return result;
}
