'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val){
  this.val = val;
  this.children = [];
}

Tree.prototype.print = function () {
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


var root = new Tree('A');
root.children.push(new Tree('B'), new Tree('C'));
root.children[0].children.push(new Tree('D'));

console.log('Tree = \n', root);
root.print();
