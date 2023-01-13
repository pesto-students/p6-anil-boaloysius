// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/876638786/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  if (prices.length < 2) {
    return maxProfit;
  }

  var minEndingAtCurrentIndex = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < minEndingAtCurrentIndex) {
      minEndingAtCurrentIndex = prices[i];
    }

    if (prices[i] - minEndingAtCurrentIndex > maxProfit) {
      maxProfit = prices[i] - minEndingAtCurrentIndex;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Solution analysis
// Space Complexity: O(1)
// Time Complexity: O(n)
