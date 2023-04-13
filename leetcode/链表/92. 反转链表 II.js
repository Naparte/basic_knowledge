/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (right - left === 0) {
        return head;
    }
    let listArr = [];

    while (listArr.length < right) {
        listArr.push(head);
        head = head.next;
    }

    let preList = listArr.slice(0, left - 1);
    let reseverList = listArr.slice(left - 1, right);
    let nextList = reseverList[reseverList.length - 1].next;
    reseverList.reverse();

    reseverList.forEach((item, index) => {
        item.next = reseverList[index + 1] || nextList || null;
    });


    if (preList.length) {
        preList[preList.length - 1].next = reseverList[0];
        return preList[0];
    }

    return reseverList[0];
};