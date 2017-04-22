'use strict';

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}


var quickSort = function(arr,start, end){
  if(start > arr.length || end < 0) return;
  var startValue = arr[start];
  var endValue = arr[end];
  if(startValue > endValue){
    for(var i = start; i < end; i++){
      if(arr[i] >= startValue){
        arr = swap(arr, i, end);
      }
    }
  }
  console.log('arr - ' + arr);
  // quickSort(arr, start++, end--);
  return arr;
};
var arr =  [ 35, 4, 16, 4, 65, 1, 64, 1, 43, 3, 10, 2];
console.log('array - ', arr, arr.length);
quickSort( 0, arr.length - 1);
console.log('array -- ', arr);
// var sortArr = quickSort(arr, 0, n);
// console.log('sort array - ', sortArr, sortArr.length);
