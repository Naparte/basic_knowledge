/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {


    let p1 = head;
    let p2 = head;

    while (p1 && p2) {

        p1 = p1.next;
        p2 = p2.next && p2.next.next || null;

        if (!p2) {
            return false;
        }

        if (p1 === p2) {
            return true
        }
    }

    return false;

};