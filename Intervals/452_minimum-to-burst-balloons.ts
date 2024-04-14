function findMinArrowShots(points: number[][]): number {
  points.sort((a: number[], b: number[]) => a[1] - b[1]);

  let arrows: number = 1;
  let min: number = points[0][1];

  for (const point of points) {
    if (point[0] <= min) continue;
    min = point[1];
    arrows++;
  }

  return arrows;
}

/*
  Time Complexity: O(n * log(n))
  Space Complexity: O(1)
*/
