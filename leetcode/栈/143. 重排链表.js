/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let result = [];

    while (head !== null) {


        let tmp = head.next;
        head.next = null;
        result.push(head);
        head = tmp;
    }

    let i = 0;
    let j = result.length - 1;

    while (i < j) {
        result[i].next = result[j];
        if (i + 1 !== j) {
            result[j].next = result[i + 1];
        }
        i++;
        j--;

    }
};