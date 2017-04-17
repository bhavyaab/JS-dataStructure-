'use strict';

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}


function quickSort(arr,start, end){
  if(start > arr.length) return;
  var startValue = arr[start];
  var endValue = arr[end];
  if(startValue > endValue){
    for(var i = start; i < end; i++){
      if(arr[i] >= startValue){
        arr = swap(arr, i, end);
      }
    }
  }
  // quickSort(arr, start++, end);
  // quickSort(arr, start, end--);
  return arr;

}
var arr =  [ 35, 4, 16, 4, 65, 1, 64, 1, 43, 3, 10, 2];
console.log('array - ', arr, arr.length);
for(var i = 0; i < arr.length; i++){
  quickSort(arr, i, arr.length - 1);
  quickSort(arr, 0, arr.length - 1 - i);
}
console.log('array -- ', arr);
// var sortArr = quickSort(arr, 0, n);
// console.log('sort array - ', sortArr, sortArr.length);
