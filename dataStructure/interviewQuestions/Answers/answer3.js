/*Create a function that checks if two trees are deeply equal to each other.*/

const Queue = require('../../queues/queue.js');
const Tree = require('../../queues/trees.js');


var one = new Tree('A');
one.children.push(new Tree('B'), new Tree('C'));
one.children[0].children.push(new Tree('D'));
// console.log('one == ', one.print());

var two = new Tree('A');
two.children.push(new Tree('B'), new Tree('C'));
two.children[0].children.push(new Tree('E'));
// // console.log('two == ', two.print());


var campareDeeplyEqual = function(one, two){
  let qOne = new Queue();          // start a new Queue
  qOne.enqueue(one);               // enqueue ONE
  let qTwo = new Queue();         //start other Queue
  qTwo.enqueue(two);                // enqueue TWO
  while(qOne.head && qTwo.head){    // if both have head defined
    var currentOne = qOne.dequeue();     // poop one element out of each Queue one
    var currentTwo = qTwo.dequeue();    // poop one element out of each Queue  two
    if(currentTwo.val === currentOne.val && currentOne.children.length === currentTwo.children.length){
      // iv its present value are equal and have equal number of children then enqueue all children.
      currentOne.children.forEach(function(ele,i){
        qOne.enqueue(currentOne.children[i]);
        qTwo.enqueue(currentTwo.children[i]);
      });
    } else { // else if value or number of children are not equal then return it is not deeply equal.
      console.log('Trees are not deeply equal');
      return 'Trees are not deeply equal';
    }
  } // return it is deeply equal
  console.log('Trees are deeply equal');
  return 'Trees are deeply equal';
};


campareDeeplyEqual(one,two);
