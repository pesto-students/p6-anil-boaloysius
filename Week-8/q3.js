// Problem 8.3: Binary Tree Level Order Traversal

// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/878585228/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const levelOrderInner = (root, index) => {
    if (!root) return;
    if (!levels[index]) {
      levels[index] = [];
    }
    levels[index].push(root.val);
    levelOrderInner(root.left, index + 1);
    levelOrderInner(root.right, index + 1);
  };

  let levels = [];
  levelOrderInner(root, 0);
  return levels;
};
