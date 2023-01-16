// https://leetcode.com/problems/valid-parentheses/submissions/877784163/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  parant_array = s.split("");
  stack = [];
  const match = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  while ((current = parant_array.shift())) {
    if (["(", "{", "["].includes(current)) {
      stack.push(current);
    } else {
      const latest_in_stack = stack.pop();
      if (latest_in_stack != match[current]) {
        return false;
      }
    }
  }
  return !stack.length;
};
