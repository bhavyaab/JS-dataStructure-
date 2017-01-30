'use strict';

const Queue = require('./queue.js');

module.exports = Tree2;

function Tree1(val){
 this.val = val;
 this.children = []
 }
 var root = new Tree1('A');
 root.children.push(new Tree1('B'), new Tree1('C'));
 root.children[0].children.push(new Tree1('D'));


//////////////////////////////////////////////
 function Tree2(val, kids){
  this.val = val;
  this.children = kids
  }

  //visit all children at the same level at the same time:

  Tree2.prototype.print = function () {
   let q = new Queue();
   q.enqueue(this);
    while(q.head){
     var current = q.dequeue();
     console.log(current.val);
     current.children.forEach(function(ele){
      q.enqueue(ele);
    });
   }
  };

var newRoot = new Tree2('A', [new Tree2('B', [new Tree2('D', [])]), new Tree2('C', [])]);

// root.print();

console.log('newRoot\n', root);

newRoot.print();
