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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let p = head;
  let pre = 0;
  while (l1 || l2 || pre) {
    let ret = (l1 && l1.val) + ((l2 && l2.val) || 0) + pre;

    pre = ret >= 10 ? 1 : 0;
    p.val = ret % 10;

    l1 = (l1 && l1.next) || null;
    l2 = (l2 && l2.next) || null;
    if (l1 || l2 || pre) {
      p.next = new ListNode();
      p = p.next;
    }
  }
  p.next = null;
  return head;
}
