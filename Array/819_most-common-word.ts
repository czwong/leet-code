function mostCommonWord(paragraph: string, banned: string[]): string {
  let map = new Map();
  let setBanned = new Set(banned);
  let currWord = "";
  let mostWord = "";

  for (let char of paragraph) {
    char = char.toLowerCase();
    let uniCode = char.charCodeAt(0);

    if (uniCode >= 97 && uniCode <= 122) {
      currWord += char;
    } else {
      if (!currWord || setBanned.has(currWord)) {
        currWord = "";
        continue;
      }

      map.set(currWord, (map.get(currWord) || 0) + 1);
      if (map.get(currWord) > (map.get(mostWord) || 0)) mostWord = currWord;
      currWord = "";
    }
  }

  if (currWord) {
    map.set(currWord, (map.get(currWord) || 0) + 1);
    if (map.get(currWord) > (map.get(mostWord) || 0)) mostWord = currWord;
  }

  return mostWord;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/
