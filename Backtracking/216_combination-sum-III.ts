function combinationSum3(k: number, n: number): number[][] {
  let solution = [];

  let dfs = (k: number, sum: number, idx: number, arr: number[]) => {
    if (sum <= 0) return;
    if (k === 1) {
      if (sum <= 9 && sum > arr[arr.length - 1]) {
        arr.push(sum);
        solution.push([...arr]);
        arr.pop();
      }
      return;
    }

    for (let i = idx; i < sum - i; i++) {
      arr.push(i);
      dfs(k - 1, sum - i, i + 1, arr);
      arr.pop();
    }
  };

  for (let i = 1; i < 9; i++) {
    dfs(k - 1, n - i, i + 1, [i]);
  }

  return solution;
}

/*
  Time Complexity: O(9^k)
  Space Complexity: O(k) - Recursion stack k times
*/
