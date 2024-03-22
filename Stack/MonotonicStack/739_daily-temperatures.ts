function dailyTemperatures(temperatures: number[]): number[] {
  let stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let currStack = stack[stack.length - 1];
    let currTemp = temperatures[i];

    while (currStack && currTemp >= currStack[0]) {
      stack.pop();
      currStack = stack[stack.length - 1];
    }

    temperatures[i] = currStack ? currStack[1] - i : 0;
    stack.push([currTemp, i]);
  }

  return temperatures;
}

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
