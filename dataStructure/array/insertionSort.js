'use strict';
var i;

var insert = function(array, rightIndex, value){
  for(i = rightIndex; i >= 0 && value < array[i]; i--){
    array[i + 1] = array[i];
  }
  array[i + 1] = value;

};
var insertionSort = function(array) {
  for(var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
  console.log('Insertion sorted array = ', array);
};
//Worst case: Θ(n​xn).
// Best case: Θ(n).
// Average case for a random array:  Θ(n​xn).

var array = [3, 15, 7, 11, 13, 2, 9, 6];
insertionSort(array);
insert(array, 4, 2);
console.log('Array after inserting 2:  ' + array);
//Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

// insert(array, 5, 9);
// console.log('Array after inserting 9:  ' + array);
//Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

// insert(array, 6, 6);
// console.log('Array after inserting 6:  ' + array);
//Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);
