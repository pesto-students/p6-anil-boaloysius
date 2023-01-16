// https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k == 0) {
    return head;
  }

  // Find linkedlist length
  let length = 0;
  let temp = head;
  let tail = null;
  while (1) {
    length += 1;
    if (temp.next) {
      temp = temp.next;
    } else {
      tail = temp;
      break;
    }
  }
  // Find min rotations incase k>length
  const minMoves = k % length;
  if (minMoves == 0) {
    return head;
  }

  var newTail = null;
  var newHead = head;
  for (var i = 0; i < minMoves; i++) {
    newTail = newHead;
    newHead = newHead.next;
  }

  newTail.next = null;
  tail.next = head;
  return newHead;
};
