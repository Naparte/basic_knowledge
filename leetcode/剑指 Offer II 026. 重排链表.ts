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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1 || !l2) {
    return l1 || l2;
  }
  let head = new ListNode();

  if (l1.val > l2.val) {
    head.val = l2.val;
    head.next = mergeTwoLists(l1, l2.next)
  } else {
    head.val = l1.val;
    head.next = mergeTwoLists(l1.next, l2)
  }
  return head
}
