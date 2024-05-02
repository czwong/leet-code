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

function sumNumbers(root: TreeNode | null): number {
  let sum = 0;
  const bst = (node: TreeNode, n: number) => {
    const nTotal = n * 10 + node.val;

    if (!node.left && !node.right) {
      sum += nTotal;
      return;
    }

    if (node.left) bst(node.left, nTotal);
    if (node.right) bst(node.right, nTotal);
  };

  bst(root, 0);

  return sum;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/
