/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return;

  for (let i = nums1.length - 1; i >= 0; i--) {
    let currN = nums2[n - 1] ?? -Infinity;
    let currM = nums1[m - 1] ?? -Infinity;

    if (currN > currM) {
      nums1[i] = currN;
      n--;

      if (n === 0) break;
    } else {
      nums1[i] = currM;
      m > 0;
      m--;
    }
  }
}

/*
  Time Complexity: O(m)
  Space Complexity: O(1)
*/
