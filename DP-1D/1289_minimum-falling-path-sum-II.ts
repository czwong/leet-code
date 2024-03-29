function minFallingPathSum(grid: number[][]): number {
  let len = grid.length;

  if (len === 1) return grid[0][0];

  let min = Infinity;

  const findFirstSecond = (row: number[]) => {
    let first = Infinity;
    let second = Infinity;

    for (const num of row) {
      if (num < first) [first, second] = [num, first];
      else if (num < second) second = num;
    }

    return [first, second];
  };

  for (let i = 1; i < len; i++) {
    let [first, second] = findFirstSecond(grid[i - 1]);

    for (let j = 0; j < len; j++) {
      grid[i][j] += grid[i - 1][j] !== first ? first : second;

      if (i === len - 1) min = Math.min(min, grid[i][j]);
    }
  }

  return min;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
