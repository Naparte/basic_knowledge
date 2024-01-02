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

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (slow && fast) {
    slow = slow.next;
    fast = fast?.next?.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
