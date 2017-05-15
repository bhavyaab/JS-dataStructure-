'use strict';
var SinglyLinkedList = require('./sll.js');
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
