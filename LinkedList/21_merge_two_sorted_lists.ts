/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let currHead: ListNode;

  if (list1.val > list2.val) {
    currHead = list2;
    list2 = list2.next;
  } else {
    currHead = list1;
    list1 = list1.next;
  }

  currHead.next = null;

  let temp: ListNode = currHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }

    temp = temp.next;
    temp.next = null;
  }

  temp.next = list2 ? list2 : list1;

  return currHead;
}

/*
  Time Complexity: O(n + m)
  Space Complexity: O(1)
*/
