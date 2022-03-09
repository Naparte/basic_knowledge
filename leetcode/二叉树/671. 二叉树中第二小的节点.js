/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let searchArr = [];


    function rescursion(head) {
        if (!head) {
            return;
        }
        searchArr.push(head.val);

        rescursion(head.left);
        rescursion(head.right);
    }

    rescursion(root);

    let flag = searchArr.some((val) => {
        return val !== searchArr[0];
    })

    if (flag) {
        searchArr = [...new Set(searchArr)];
        searchArr.sort((a, b) => {
            return a - b;
        })
        return searchArr[1];
    }
    return -1;
};