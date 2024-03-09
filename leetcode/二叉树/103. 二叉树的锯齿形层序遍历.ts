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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let result = [];

  if (!root) {
    return [];
  }

  let queue = [root];
  let isLeft = true;
  while (queue.length) {
    let size = queue.length;
    let help = [];

    while (size--) {
      let node = queue.shift();
      if (node) {
        help.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    if (isLeft) {
      result.push(help);
    } else {
      result.push(help.reverse());
    }
    isLeft = !isLeft;
  }

  return result;
}
