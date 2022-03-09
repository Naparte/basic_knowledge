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
    let result = [];
    let carry = 0;

    while (l1 || l2 || carry) {
        let val = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
        let temp = val % 10;
        result.push(temp);
        carry = (val - temp) / 10;

        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
    }


    let root = null;
    let head = null;
    result.forEach((val) => {

        head = head && head.next || new ListNode(val);
        head.val = val;

        root = root || head;
        head.next = new ListNode();
    });
    head.next = null;
    return root;
};