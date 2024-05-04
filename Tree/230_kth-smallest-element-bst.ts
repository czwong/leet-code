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

function kthSmallest(root: TreeNode | null, k: number): number {
  let stack = [];
  let currRoot = root;

  while (stack || currRoot) {
    while (currRoot) {
      stack.push(currRoot);
      currRoot = currRoot.left;
    }

    currRoot = stack.pop();
    k--;
    if (k === 0) return currRoot.val;
    currRoot = currRoot.right;
  }
}

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/
