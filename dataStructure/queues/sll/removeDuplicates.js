'use strict';
var SinglyLinkedList = require('./sll.js');

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
