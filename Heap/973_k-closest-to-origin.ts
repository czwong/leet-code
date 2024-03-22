/** Sort Method **/
function kClosest(points: number[][], k: number): number[][] {
  points = points.sort((a: number[], b: number[]) => {
    let squareSumA = a[0] ** 2 + a[1] ** 2;
    let squareSumB = b[0] ** 2 + b[1] ** 2;

    return squareSumA - squareSumB;
  });

  return points.slice(0, k);
}

/*
  Time Complexity: O(n*log(n))
  Space Complexity: O(1)
*/

/** Heap Method **/
function kClosest(points: number[][], k: number): number[][] {
  let minHeap = new MinPriorityQueue({
    compare: (a: number[], b: number[]) =>
      a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2),
  });

  while (points.length) {
    minHeap.enqueue(points.pop());
  }

  while (k) {
    points.push(minHeap.dequeue());
    k--;
  }

  return points;
}

/*
  Time Complexity: O(n*log(k))
  Space Complexity: O(1)
*/
