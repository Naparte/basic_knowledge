/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let list = [];
    let point = head;

    while (point) {
        list.push(point.val);
        point = point.next;
    }
    point = head;
    while (list.length) {
        point.val = list.pop();
        point = point.next;

    }

    return head;

};