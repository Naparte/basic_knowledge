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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  let val = postorder[postorder.length - 1];

  let index = inorder.indexOf(val);

  let leftInorder = inorder.slice(0, index);
  let rightInorder = inorder.slice(index + 1);

  let leftPostorder = postorder.slice(0, leftInorder.length);
  let rightPostOrder = postorder.slice(leftInorder.length, -1);

  let root = new TreeNode(
    val,
    buildTree(leftInorder, leftPostorder),
    buildTree(rightInorder, rightPostOrder)
  );

  return root;
}
