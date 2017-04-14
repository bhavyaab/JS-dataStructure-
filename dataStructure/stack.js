//___________________________________________________________;
//QUESTION: Describe how you could use a single array to implement three stacks.



//________________________________________________________________________;
//QUESTION: How would you design a stack which, in addition to push and pop,
//also has a function min which returns the minimum element? Push, pop and
//min should all operate in O(1) time.

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

var stack = new Stacks();
stack.push(9);
console.log(stack);
stack.push(9);
stack.push(11);
stack.push(2);
console.log(stack);
stack.push(7);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();stack.pop();stack.pop();
console.log(stack);
// ___________________________________________________________;

//QUESTION: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
// in real life, we would likely start a new stack when the previous stack exceeds
// some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
// should be composed of several stacks, and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
// behave identically to a single stack (that is, pop() should return the same values as it
// would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific
// sub-stack.

var SetOfStacks = function(length){
  this.array = Array(length);
};

SetOfStacks.prototype.push = function(value){
};

SetOfStacks.prototype.pop = function (value) {

};
//___________________________________________________________;