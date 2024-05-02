function isValidSudoku(board: string[][]): boolean {
  let set = new Set();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      let currPiece = board[r][c];

      if (currPiece === ".") continue;

      let row = `r${r}${currPiece}`,
        col = `c${c}${currPiece}`,
        box = `${[Math.floor(r / 3), Math.floor(c / 3)]}${currPiece}`;

      if (set.has(row) || set.has(col) || set.has(box)) return false;

      set.add(row).add(col).add(box);
    }
  }

  return true;
}

/*
  Time Complexity: O(n^2)
  Space Complexity: O(n)
*/
