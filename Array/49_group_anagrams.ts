function groupAnagrams(strs: string[]): string[][] {
  let map = new Map();

  for (const str of strs) {
    let count = new Array(26).fill(0);

    for (const s of str) {
      count[s.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    let new_count = `${count}`;
    let existingArray = map.get(new_count);

    if (!existingArray) {
      existingArray = [];
      map.set(new_count, existingArray);
    }
    existingArray.push(str);
  }

  return [...map.values()];
}

/*
  Time Complexity: O(m * n)
  Space Complexity: O(n)
*/
