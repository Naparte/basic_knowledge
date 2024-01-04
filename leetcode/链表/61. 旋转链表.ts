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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let result: ListNode[] = [];

  if (!head) {
    return null;
  }

  while (head) {
    result.push(head);
    head = head.next;
  }

  result = result.map((node) => {
    node.next = null;
    return node;
  });

  let len = result.length;
  k = k % len;

  result = result.concat(result).slice(len - k, len - k + len);

  return result.map((node, index) => {
    node.next = result[index + 1] || null;
    return node;
  })[0];
}
