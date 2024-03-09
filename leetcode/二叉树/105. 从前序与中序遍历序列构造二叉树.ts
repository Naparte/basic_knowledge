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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) {
    return null;
  }

  let rootVal = preorder[0];
  let index = inorder.indexOf(rootVal);
  let leftInOrder = inorder.slice(0, index);
  let rightInorder = inorder.slice(index + 1);
  let leftPre = preorder.slice(1, 1 + leftInOrder.length);
  let rightPre = preorder.slice(1 + leftInOrder.length);

  return new TreeNode(
    rootVal,
    buildTree(leftPre, leftInOrder),
    buildTree(rightPre, rightInorder)
  );
}
