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
var reverseList = function(head) {
    let current = head;
    let prev = null;
    while(current !== null){
        const next = current.next;
        current.next = prev;  // Links together the list
        prev = current;
        current = next;
    }
    return prev;
};