'use strict';
module.exports = SinglyLinkedList;

function Node(val){
  this.val = val;
  this.next = null;
};
function SinglyLinkedList(){
  this.head = null;
  this.tail = null;
  return;
};
//insert node in the begining of the list
SinglyLinkedList.prototype.prepend = function (val) {
  let node = new Node(val);

  if(!this.head){
    this.head = node;
    this.tail = node;
    return node.val;
  }
  node.next = this.head;
  this.head = node;
  return this.head;
};
//insert node in the end of the list.
SinglyLinkedList.prototype.append = function (val) {
  let node = new Node(val);

  if(!this.head){
    this.head = node;
    this.tail = node;
    return node.val;
  }

  var current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this.tail = node;
  return node.val;
};
//Print SinglyLinkedList in a string
SinglyLinkedList.prototype.print = function(){
  var current = this.head;
  var str = '';
  while(current) {
    str += current.val + ' ';
    current = current.next;
  }
  console.log('\nSinglyLinkedList values are =  ' + str + '\n');
};
//Remove Dups: remove duplicates from an unshorted liked list
SinglyLinkedList.prototype.removeDup = function () {
  var current = this.head;
  var prev = null;
  var table = {};
  while(current){
    if(!table[current.val]){
      table[current.val] = true;
    } else {
      var next = current.next;
      current = prev;
      current.next = next;
    }
    prev = current;
    current = current.next;
  };
  return this.head;
};
//Return kth to last of SinglyLinkedList
SinglyLinkedList.prototype.kthToLast = function(k){
  if(this.head === null || k < 1 || k === null) return null;
  var current = this.head;
  var currentIndex = 1;
  var kthToLast = current;
  while(current){
    if((currentIndex - k) > 0){
      kthToLast = kthToLast.next;
    }
    current = current.next;
    currentIndex++;
  }
  return kthToLast.val;
};
SinglyLinkedList.prototype.kthToLast2 = function(k) {
  if(!this.head || k < 1) {
    return undefigned;
  }
  let current = this.head;
  let kthToLast = current;
  for (var i = 0; i < k - 1; i++) {
    current = current.next;
    if (!current.next) {
      return;
    }
  }
  while (current.next) {
    kthToLast = kthToLast.next;
    current = current.next;
  }
  return kthToLast.val;
};
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




// Implement an algorithm to delete a node in the middle of a single linked list, given
// only access to that node.
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

SinglyLinkedList.prototype.deleteFromMiddle= function(node){
  if(node === null) return fasle; // fail
  var current = this.head;
  var pre = null;
  while(current){
    if(current.val === node){
      var next = current.next;
      current = pre;
      current.next = next;
    }
    pre = current;
    current = current.next;
  }
  return this.head;
};

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
