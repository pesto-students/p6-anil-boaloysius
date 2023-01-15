// https://leetcode.com/problems/k-diff-pairs-in-an-array/submissions/876688461/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const uniquePairs = new Set();
  const itemMap = new Set();

  for (const num of nums) {
    if (itemMap.has(num + k)) {
      uniquePairs.add([num, num + k].toString());
    }

    if (itemMap.has(num - k)) {
      uniquePairs.add([num - k, num].toString());
    }
    itemMap.add(num);
  }
  console.log(uniquePairs);
  return uniquePairs.size;
};

// Solution analysis
// Space Complexity: O(n)
// Time Complexity: O(n)
