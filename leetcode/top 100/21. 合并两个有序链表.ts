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

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   if (!list1) {
//     return list2;
//   } else if (!list2) {
//     return list1;
//   } else if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   }
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let prehead = new ListNode();

  let pre = prehead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      pre.next = list2;
      list2 = list2.next;
    } else {
      pre.next = list1;

      list1 = list1.next;
    }
    pre = pre.next;
  }

  pre.next = list1 ? list1 : list2;

  return prehead.next;
}
