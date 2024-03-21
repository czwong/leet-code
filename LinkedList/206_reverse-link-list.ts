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
const combineList = (left, right) => {
  let newList = new ListNode();
  let currNode = newList;

  while (right) {
    currNode.next = right;
    right = right.next;
    currNode = currNode.next;
  }

  currNode.next = left;
  return newList.next;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = slow.next;
  slow.next = null;

  return combineList(reverseList(head), reverseList(fast));
};

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/
