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
function recoverTree(root: TreeNode | null): void {
  let nums: TreeNode[] = [];
  function dfs(head) {
    if (!head) {
      return;
    }

    dfs(head.left);
    nums.push(head);
    dfs(head.right);
  }

  dfs(root);

  let x, y;

  nums.forEach((node, index) => {
    let pre = nums[index - 1];
    let next = nums[index + 1];

    if (pre && node.val < pre.val) {
      y = node;
      if (!x) {
        x = pre;
      }
    }
  });
  console.log(`x, y`, x, y);

  [x.val, y.val] = [y.val, x.val];
}
