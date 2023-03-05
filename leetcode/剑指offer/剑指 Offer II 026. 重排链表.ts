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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let temp: (ListNode | null)[] = [];
  let frontPoint = head;
  while (frontPoint) {
    temp.push(frontPoint);
    frontPoint = frontPoint.next;
  }
  let i = 0,
    j = temp.length - 1;
  for (; i < j; i++, j--) {
    temp[i].next = temp[j];
    temp[j].next = temp[i + 1];
  }
  temp[i].next = null;
}
