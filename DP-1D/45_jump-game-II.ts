/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // if (nums.length <= 1) return 0;

  let [i, j] = [0, 0];
  let minJump = 0;

  while (j < nums.length - 1) {
    let maxPos = nums[i] + i;

    for (; i <= j; i++) {
      maxPos = Math.max(nums[i] + i, maxPos);
    }

    i = j + 1;
    j = maxPos;

    if (j >= nums.length - 1) return minJump + 1;

    minJump++;
  }

  return minJump;
};

// var jump = function (nums) {
//     if (nums.length === 1) return 0;
//     if (nums[0] >= nums.length - 1) return 1;

//     let minJump = new Array(nums.length).fill(0);

//     for (let i = 1; i < nums.length; i++) {
//         let currMin = Infinity;

//         for (let j = 0; j < i; j++) {
//             if (nums[j] + j >= i && minJump[j] < currMin) currMin = minJump[j];
//         }
//         minJump[i] = currMin + 1;
//         if (i + nums[i] >= nums.length - 1 && i < nums.length - 1) return minJump[i] + 1;
//     }

//     return minJump[nums.length - 1]
// };

/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
