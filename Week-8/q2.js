// Problem 8.2 : Validate a Binary Tree

// https://leetcode.com/problems/validate-binary-search-tree/submissions/878580206/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValidBSTInner(root, -Infinity, Infinity);
};

var isValidBSTInner = function (root, lowerBound, upperBound) {
  if (root == null) {
    return true;
  }
  if (root.val <= lowerBound || root.val >= upperBound) {
    return false;
  } else {
    return (
      isValidBSTInner(root.right, root.val, upperBound) &&
      isValidBSTInner(root.left, lowerBound, root.val)
    );
  }
};
