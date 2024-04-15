function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0,
    j = 0;
  let min = Infinity;
  let runningSum = 0;

  for (; j < nums.length; j++) {
    if (nums[j] === target) return 1;

    runningSum += nums[j];

    if (runningSum < target) continue;

    while (runningSum >= target) {
      min = Math.min(min, j - i + 1);
      runningSum -= nums[i++];
    }
  }

  return min === Infinity ? 0 : min;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
