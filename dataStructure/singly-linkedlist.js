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

var arr = [1, 2, 3];
var sll = new SinglyLinkedList();
var sll = arr.forEach(function(val){
 return sll.prepend(val);
});
