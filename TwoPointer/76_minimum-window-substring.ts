function minWindow(s: string, t: string): string {
  let map = new Map();
  let count = t.length;
  let minWindow = [0, Infinity];

  for (const tLetter of t) {
    let curr = map.get(tLetter);
    map.set(tLetter, curr ? curr + 1 : 1);
  }

  let i = 0,
    j = 0;

  for (; j < s.length; j++) {
    let currJLetter = s[j];
    if (!map.has(currJLetter)) {
      if (count === t.length) i++;
      continue;
    }

    let letterICount = map.get(currJLetter);

    if (count > 0 && letterICount > 0) count--;

    map.set(currJLetter, --letterICount);

    while (count === 0 && i <= j) {
      if (j - i < minWindow[1] - minWindow[0]) minWindow = [i, j];

      let currILetter = s[i];
      let letterICount = map.get(currILetter);

      map.set(currILetter, ++letterICount);

      if (letterICount > 0) count++;
      i++;

      while (s[i] && !map.has(s[i])) i++;
    }
  }

  return minWindow[1] - minWindow[0] === Infinity
    ? ""
    : s.substring(minWindow[0], minWindow[1] + 1);
}

/*
  Time Complexity: O(n)
  Space Complexity: O(t) - Depends on the size of t string
*/
