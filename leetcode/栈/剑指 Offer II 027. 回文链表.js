/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let point = head;

    let recurseFn = function(currentNode) {
        if (currentNode === null) {
            return true;
        }

        if (!recurseFn(currentNode.next)) {
            return false;
        }

        if (point.val !== currentNode.val) {
            return false;
        }

        point = point.next;
        return true;
    }

    return recurseFn(head);
};