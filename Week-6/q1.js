// https://leetcode.com/problems/maximum-subarray/submissions/876050986/

var maxSubArray = function (nums) {
  // Initialize the max sum...
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > maxSum) maxSum = nums[i];
  }
  return maxSum;
};

// Solution analysis
// Space Complexity: O(1)
// Time Complexity: O(n)
