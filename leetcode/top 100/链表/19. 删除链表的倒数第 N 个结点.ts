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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p = new ListNode();
  p.next = head;
  function rescursive(node: ListNode): number {
    if (!node) {
      return 0;
    }
    let current = rescursive(node.next) + 1;

    if (current === n + 1) {
      node.next = node.next?.next || null;
    }

    return current;
  }

  rescursive(p);

  return p.next;
}
