function minFallingPathSum(matrix: number[][]): number {
  let len = matrix.length;

  if (len === 1) return matrix[0][0];

  let smallest = Infinity;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let top = matrix[i - 1][j],
        leftDiag = matrix[i - 1][j - 1] ?? Infinity,
        rightDiag = matrix[i - 1][j + 1] ?? Infinity;

      matrix[i][j] = matrix[i][j] + Math.min(top, leftDiag, rightDiag);

      if (i === len - 1) smallest = Math.min(smallest, matrix[i][j]);
    }
  }

  return smallest;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
