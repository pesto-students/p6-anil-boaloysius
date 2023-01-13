// https://leetcode.com/problems/sort-colors/submissions/876716234/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var count = { 0: 0, 1: 0, 2: 0 };
  for (const i of nums) {
    count[i] += 1;
  }

  for (let j = 0; j < nums.length; j++) {
    if (j < count[0]) {
      nums[j] = 0;
    } else if (j < count[0] + count[1]) {
      nums[j] = 1;
    } else {
      nums[j] = 2;
    }
  }
  return nums;
};

// Solution analysis
// Space Complexity: O(1)
// Time Complexity: O(n)
