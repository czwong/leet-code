function numIslands(grid: string[][]): number {
  let count = 0;
  let r = grid.length - 1,
    c = grid[0].length - 1;

  for (let i = 0; i <= r; i++) {
    for (let j = 0; j <= c; j++) {
      if (grid[i][j] === "0") continue;

      let queue = [[i, j]];

      while (queue.length) {
        let currGrid = queue.shift();
        let row = currGrid[0],
          col = currGrid[1];

        if (row - 1 >= 0 && grid[row][col] == "1") queue.push([row - 1, col]);
        if (row + 1 <= r && grid[row][col] == "1") queue.push([row + 1, col]);
        if (col - 1 >= 0 && grid[row][col] == "1") queue.push([row, col - 1]);
        if (col + 1 <= c && grid[row][col] == "1") queue.push([row, col + 1]);

        grid[row][col] = "0";
      }

      count++;
    }
  }

  return count;
}

/*
  Time Complexity: O(n * m)
  Space Complexity: O(1)
*/
