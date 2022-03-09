/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    if (!l1 || !l2) {
        return l1 || l2;
    }
    let l1Arr = [];
    let l2Arr = [];
    let res = [];
    let temp = 0;
    while (l1) {
        l1Arr.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        l2Arr.push(l2);
        l2 = l2.next;
    }

    let head = null;

    while (l1Arr.length || l2Arr.length || temp) {
        let num1 = l1Arr.length && l1Arr.pop();
        let num2 = l2Arr.length && l2Arr.pop();

        let cur = new ListNode(0);
        let val = (num1 && num1.val || 0) + (num2 && num2.val || 0) + temp;
        cur.val = val % 10;
        temp = (val - cur.val) / 10;

        cur.next = head;
        head = cur;
    }
    return head;
};