function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let set = new Set();
  let longest = 0;

  for (let num of arr1) {
    while (num > 0) {
      set.add(num);
      num = Math.floor(num / 10);
    }
  }

  for (let num of arr2) {
    while (num > 0) {
      if (set.has(num)) longest = Math.max(longest, num);
      num = Math.floor(num / 10);
    }
  }

  return longest ? `${longest}`.length : 0;
}

/*
  Time Complexity: ??
  Space Complexity: ??
*/
