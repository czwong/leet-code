function longestPalindrome(s: string): string {
  let longestIdx: number[] = [0, 0];
  const checkPalindrome = (j: number, k: number) => {
    while (j >= 0 && k < s.length) {
      if (s[j] !== s[k]) break;
      if (k - j > longestIdx[1] - longestIdx[0]) longestIdx = [j, k];

      j--;
      k++;
    }
  };

  for (let i = 1; i < s.length; i++) {
    // Check Odd
    checkPalindrome(i - 1, i + 1);

    // Check Even
    checkPalindrome(i - 1, i);
  }

  return s.substring(longestIdx[0], longestIdx[1] + 1);
}

/*
  Time Complexity: O(n^2)
  Space Complexity: O(1)
*/
