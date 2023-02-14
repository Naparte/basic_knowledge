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

function isPalindrome(head: ListNode | null): boolean {
  let frontHead = head;

  function recursion(current: ListNode | null) {
    if (current !== null) {
      if (!recursion(current.next)) {
        return false;
      }

      if (current.val !== frontHead) {
        return false;
      }

      frontHead = frontHead.next;
    }

    return true;
  }

  return recursion(frontHead);
}
