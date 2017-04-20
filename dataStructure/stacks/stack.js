//___________________________________________________________;
//QUESTION: Describe how you could use a single array to implement three stacks.



//________________________________________________________________________;
/*QUESTION: How would you design a stack which, in addition to push and pop,
also has a function min which returns the minimum element? Push, pop and
min should all operate in O(1) time.*/

var Stacks = function(){
  this.array = new Array();
  this.min = [];
};

Stacks.prototype.push = function(value){
  if(this.array.length === 0) {
    this.min.push(value);
  } else {
    if(this.min[this.min.length - 1] >= value) this.min.push(value);
  }
  this.array.push(value);
};//complaxity of O(1)

Stacks.prototype.minimum = function () {
  if(this.array.length === 0) return null;
  return this.min[this.min.length - 1];
};//complaxity of O(1)

Stacks.prototype.pop = function () {
  if(this.array.length === 0) return null;
  if(this.min[this.min.length - 1] === this.array[this.array.length - 1]){
    this.min.pop();
  }
  this.array.pop();
  return this.array;
};//complaxity of O(1)

// var stack = new Stacks();
// stack.push(9);
// console.log(stack);
// stack.push(9);
// stack.push(11);
// stack.push(2);
// console.log(stack);
// stack.push(7);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();stack.pop();stack.pop();
// console.log(stack);
// ___________________________________________________________;

/*QUESTION: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
in real life, we would likely start a new stack when the previous stack exceeds
some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
should be composed of several stacks, and should create a new stack once
the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
behave identically to a single stack (that is, pop() should return the same values as it
would if there were just a single stack).
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific
sub-stack.*/

var SetOfStacks = function(size){
  this.array = new Array();
  this.size = size;
};

SetOfStacks.prototype.push = function(value){
  if(this.array.length === 0 || this.stack.array.length === this.size) {
    this.stack = new Stacks();
    this.array.push(this.stack);
  }
  this.stack.push(value);
};//complexity O(1)

SetOfStacks.prototype.pop = function (value) {
  if(this.array.length === 0) return null;
  this.array[this.array.length - 1].pop();
};//complexity O(1)

var setStack = new SetOfStacks(3);
setStack.push(2);
setStack.push(3);
setStack.push(5);
setStack.push(6);
setStack.push(61);
setStack.push(7);
setStack.pop();
setStack.push(22);
console.log(setStack.array);
//___________________________________________________________

/*QUESTION: In the classic problem of the Towers of Hanoi, you have 3 rods
and N disks of different sizes which can slide onto any tower. The puzzle
starts with disks sorted in ascending order of size from top to bottom
(e.g., each disk sits on top of an even larger one). You
have the following constraints:
(A) Only one disk can be moved at a time.
(B) A disk is slid off the top of one rod onto the next rod.
(C) A disk can only be placed on top of a larger disk.
Write a program to move the disks from the first rod to the last using Stacks */
