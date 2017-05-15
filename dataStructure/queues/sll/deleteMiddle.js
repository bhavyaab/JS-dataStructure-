
// Implement an algorithm to delete a node in the middle of a single linked list, given
// only access to that node.
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e
'use strict';
var SinglyLinkedList = require('./sll.js');

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
