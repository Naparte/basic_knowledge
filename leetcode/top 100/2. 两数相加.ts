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

function add(l1: ListNode | null, l2: ListNode | null, carry: number = 0) {
  if (l1 === null && l2 === null) {
    return carry ? new ListNode(carry) : null;
  }

  if (!l1) {
    [l1, l2] = [l2, l1];
  }

  carry += (l1?.val || 0) + (l2?.val || 0);

  l1.val = carry % 10;

  l1.next = add(l1.next, l2?.next || null, carry > 9 ? 1 : 0);

  return l1;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return add(l1, l2);
}
