class StockSpanner {
  private stack: Array<[number, number]>;

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let currStack: [number, number] = this.stack[this.stack.length - 1];
    let num: number = 1;

    while (currStack && price >= currStack[0]) {
      num += this.stack.pop()[1];
      currStack = this.stack[this.stack.length - 1];
    }

    this.stack.push([price, num]);
    return num;
  }
}

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
