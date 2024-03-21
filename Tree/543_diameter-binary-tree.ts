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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let max = 0;
  const dfs = (root: TreeNode | null) => {
    let left = root.left ? dfs(root.left) + 1 : 0;
    let right = root.right ? dfs(root.right) + 1 : 0;

    max = Math.max(left + right, max);

    return Math.max(left, right);
  };

  dfs(root);
  return max;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
