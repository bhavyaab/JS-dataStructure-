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
  console.log('kthToLast == ', kthToLast.val);
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

var arr = [1, 2, 3, 4, 5,7, 8, 66, 22, 15];
var sll = new SinglyLinkedList();
arr.forEach(function(val){
  sll.prepend(val);
});

sll.print();
sll.kthToLast(5);
// sll.short();
// sll.removeDup();
// sll.print();
