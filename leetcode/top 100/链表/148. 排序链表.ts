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

function sortList(head: ListNode | null): ListNode | null {
  let result: ListNode[] = [];

  if (!head) {
    return null;
  }

  while (head) {
    let temp = head.next;
    head.next = null;
    result.push(head);
    head = temp;
  }

  result.sort((nodeA, nodeB) => {
    return nodeA.val - nodeB.val;
  });

  return result.map((node, index) => {
    node.next = result[index + 1] || null;
    return node;
  })[0];
}
