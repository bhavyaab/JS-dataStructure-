'use strict';
var SinglyLinkedList = require('./sll.js');


// SinglyLinkedList.prototype.short = function () {
//   var current = this.head;
//   var small = this.val;
//   var large = this.val;
//   var sll = new SinglyLinkedList();
//
//   while(current){
//     console.log('current == ', current.val);
//     if(small > current.val || small === current.val) {
//       sll.prepend(current.val);
//       small = current.val;
//     } else if(large > current.val > small){
//
//     }else if(large < current.val) {
//       sll.append(current.val);
//       large = current.val;
//     }
//     current = current.next;
//   }
//   sll.print();
//   return this.head;
// };





// You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
// the list. Write a function that adds the two numbers and returns the sum as a linked
// list.
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8
// 1. result.data = (node1 + node2 + any earlier carry) % 10
// 2. if node1 + node2 > 10, then carry a 1 to the next addition.
// 3. add the tails of the two nodes, passing along the carry

var addTwoLInkedList = function(linkedList1, linkedList2){

};

// Given a circular linked list, implement an algorithm which returns node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an
// earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

var retrunNodeOfBeginingOfList = function(){

};




















var arr = [1, 2, 3, 4, 5,7, 8, 66, 22, 15];
var sll = new SinglyLinkedList();
arr.forEach(function(val){
  sll.prepend(val);
});

sll.print();
sll.deleteFromMiddle(5);
// sll.kthToLast(5);
// sll.short();
// sll.removeDup();
sll.print();
