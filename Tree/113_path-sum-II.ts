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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let arr = [];
  let stack = [];

  const helper = (root: TreeNode | null, targetSum: number) => {
    if (!root) return;
    if (!root.left && !root.right) {
      if (targetSum - root.val === 0) arr.push([...stack, root.val]);
      return;
    }

    stack.push(root.val);
    helper(root.left, targetSum - root.val);
    helper(root.right, targetSum - root.val);
    stack.pop();
  };

  helper(root, targetSum);

  return arr;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(k) - Height of tree
*/
