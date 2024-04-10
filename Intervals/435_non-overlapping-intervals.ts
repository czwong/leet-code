function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
  let removed = 0;

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i],
      prev = intervals[i - 1];
    if (curr[0] < prev[1]) {
      removed++;
      intervals[i] = curr[1] > prev[1] ? prev : curr;
    }
  }

  return removed;
}

/*
  Time Complexity: O(n * log(n))
  Space Complexity: O(1)
*/
