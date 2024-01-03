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

let first: ListNode = null;

function rescursivelyCheck(currennt: ListNode) {
  if (currennt) {
    if (!rescursivelyCheck(currennt.next)) {
      return false;
    }
    if (currennt.val !== first.val) {
      return false;
    }

    first = first.next;
  }

  return true;
}

function isPalindrome(head: ListNode | null): boolean {
  first = head;
  return rescursivelyCheck(head);
}
