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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let counter = 0;
  let map = new Map().set(0, 1);

  let dfs = (root: TreeNode | null, runningSum: number) => {
    if (!root) return;

    runningSum += root.val;

    if (map.has(runningSum - targetSum))
      counter += map.get(runningSum - targetSum);

    map.set(runningSum, (map.get(runningSum) ?? 0) + 1);

    dfs(root.left, runningSum);
    dfs(root.right, runningSum);

    map.set(runningSum, map.get(runningSum) - 1);
  };

  dfs(root, 0);

  return counter;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/
