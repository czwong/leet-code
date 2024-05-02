/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const checkLeft = (node: TreeNode) => {
    if (!node) return 0;
    return 1 + checkLeft(node.left);
  };

  const checkRight = (node: TreeNode) => {
    if (!node) return 0;
    return 1 + checkRight(node.right);
  };

  let leftHeight = checkLeft(root),
    rightHeight = checkRight(root);

  if (leftHeight === rightHeight) return 2 ** leftHeight - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

/*
  Time Complexity: O(log(n) ^ 2) - This is due to traversing only the left-most and right-most of each node
  Space Complexity: O(log(n))
*/
