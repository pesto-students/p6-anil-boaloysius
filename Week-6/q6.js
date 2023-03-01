// https://leetcode.com/problems/3sum-closest/submissions/876695208/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res, closeness;
  closeness = Infinity;
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let currSum = nums[i] + nums[j] + nums[k];

      if (Math.abs(currSum - target) < closeness) {
        closeness = Math.abs(currSum - target);
        res = currSum;
      }

      if (currSum === target) {
        return target;
      } else if (currSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
};

// Solution analysis
// Space Complexity: O(1)
// Time Complexity: O(n^2)
