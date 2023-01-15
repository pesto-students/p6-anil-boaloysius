//leetcode.com/problems/spiral-matrix/submissions/876719220/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  while (matrix.length > 0) {
    let top = matrix.shift();
    let bottom = (matrix.pop() || []).reverse();
    let left = [],
      right = [];
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) right.push(matrix[i].pop());
      if (matrix[i].length > 0) left.unshift(matrix[i].shift());
    }
    res.push(...top, ...right, ...bottom, ...left);
  }
  return res;
};

// Solution analysis
// Space Complexity: O(matrix.size)
// Time Complexity: O(matrix.size)
