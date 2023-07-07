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

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null;
    
    let prev = null;
    let current = head;
    
    while(current !== null){
        let next = current.next;
        current.next = prev
        
        prev = current;
        current = next;        
    }
    
    return prev;   
};