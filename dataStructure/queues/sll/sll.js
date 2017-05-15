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
