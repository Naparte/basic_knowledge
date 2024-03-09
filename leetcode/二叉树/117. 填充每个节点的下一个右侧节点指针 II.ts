/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }
  let queue = [root];
  let size = queue.length;

  while (queue.length) {
    while (size) {
      let node = queue.shift();
      size--;
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (!size) {
        node.next = null;
      } else {
        node.next = queue[0];
      }
    }
    size = queue.length;
  }

  return root;
}
