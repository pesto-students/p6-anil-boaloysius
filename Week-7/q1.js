// https://leetcode.com/problems/reverse-linked-list/submissions/877341935/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }

  let previous = null;
  let current = head;
  let next = current.next;
  while (current) {
    current.next = previous;
    previous = current;
    current = next;
    next = next?.next || null;
  }
  return previous;
};

// Time complexity: O(n)
// Space complexity: O(1)
