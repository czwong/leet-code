function removeElement(nums: number[], val: number): number {
  let k = nums.length - 1;
  let i = 0;

  while (i <= k) {
    if (nums[i] === val) {
      nums[i] = nums[k];
      k--;
      continue;
    }

    i++;
  }

  return k + 1;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
