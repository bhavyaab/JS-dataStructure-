'use strict';

var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};


var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;

    // Loop over items starting with startIndex,
    // updating minValue and minIndex as needed:
  for(var i = minIndex + 1; i < array.length; i++){
    if(minValue > array[i]){
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};




var selectionSort = function(array) {
  for(var i = 0; i < array.length; i++){
    var curr = array[i];
    var lowerValueIndex = indexOfMinimum(array, i);
    if(curr > array[lowerValueIndex]){
      swap(array, i, lowerValueIndex);
    }
  }
};//Complaxity O()

var array = [2,44,55,6,4,3,6,8,5,4,3,2,4,6,56,1,5,4,43,2,2,11,11];
selectionSort(array);
console.log('Array after sorting:  ' + array);


// var array = [18, 6, 66, 44, 9, 22, 14];
// var index = indexOfMinimum(array, 0);
//  For the test array [18, 6, 66, 44, 9, 22, 14],
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array,
//  "index" has value 4
// var arr = [2,44,55,6,7789,99,4,3,6,8,86,3,2,676,5,4,3,2,4,6,56,767,76768,1,5,4,43,2,2,11,11];
// var startAtIndex = 0;
// var index = indexOfMinimum(arr, startAtIndex);
// console.log('The index of the minimum value of the subarray starting at index '+ startAtIndex +' is ' + index + '.' + ' and minValue - ' + arr[index]);
