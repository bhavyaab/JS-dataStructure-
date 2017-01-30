'use strict';

const sll = require('./singly-linkedList.js');

module.exports = Queue;
function Node(val){
  this.val = val;
  this.next = null;
};

function Queue(){
 new sll();
}

Queue.prototype.dequeue = function (val) {
  let node = new Node(val);
  if(!this.head){
   this.head = node;
   this.tail = node;
   return node.val;
  }
  let current = this.head;
  this.head = current.next;
  return current.val;
};

Queue.prototype.enqueue = function (val) {
  let node = new Node(val);
  if(!this.head){
   this.head = node;
   this.tail = node;
   return node.val;
  }
  this.tail.next = node;
  this.tail = node;
  
  return;
};
//
// var q = new Queue();
// q.enqueue(1);
// q.enqueue(12);
// console.log('enqueue',q);
// q.dequeue();
// console.log('dequeue', q);
