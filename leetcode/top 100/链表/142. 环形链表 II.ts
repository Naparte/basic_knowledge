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

function detectCycle(head: ListNode | null): ListNode | null {
  let p1 = head;
  if (!p1 || !p1.next) {
    return null;
  }
  let p2 = p1.next;

  while (p2 && p2.next && p2 !== p1) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  if (p2 === p1) {
    let p3 = head;
    p2 = p2.next;
    while (p3 !== p2) {
      p2 = p2.next;
      p3 = p3.next;
    }

    return p3;
  }

  return null;
}
