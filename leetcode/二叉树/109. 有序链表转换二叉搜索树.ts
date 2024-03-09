/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null;
  }
  let list: number[] = [];

  while (head) {
    list.push(head.val);
    head = head.next;
  }

  function dfs(list: number[]): TreeNode | null {
    if (!list.length) {
      return null;
    }

    let index = Math.floor(list.length / 2);

    return new TreeNode(
      list[index],
      dfs(list.slice(0, index)),
      dfs(list.slice(index + 1))
    );
  }

  return dfs(list);
}
