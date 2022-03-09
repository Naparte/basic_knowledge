/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let cur = null,
        stacks = [root],
        result = [];
    while (stacks.length) {
        cur = stacks.pop();
        if (cur !== null) {
            result.push(cur.val);
            // 注意此处 需要倒叙
            let i = cur.children.length;
            while (i-- > 0) {
                stacks.push(cur.children[i]);
            }
        }
    }
    return result;
};