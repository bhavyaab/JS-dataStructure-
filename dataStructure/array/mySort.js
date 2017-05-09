'use strict';

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

var sortMyarray = function(arr){
  var n = arr.length - 1;
  var count = 0;
  var setValue = arr[0];
  for(var j = n; j > -1; j--){
    if(arr[j] <= setValue) {
      for(var k= 0; k < j; k++){
        if( arr[k] >= arr[j]) swap(arr, k,j);
        count++;
      }
    }
  }
  console.log('sorted array -- ',arr, 'run time - ', count);
}; //complaxity O(NXN)


var arr = [22,66,333,22,4,3,33,4,4,2,5,5,33,2,22,5443,3,54,3667,2,2];
var arr1 = [22,66,333,22,22,4,3667,2,2];
console.log('given array -- ', arr, 'length - ', arr.length);
sortMyarray(arr);

var newCount = 0;
var myQuickSort = function(arr,startIndex,endIndex){
  newCount++;
  if(!arr[startIndex] || !arr[endIndex]) return arr;
  if(arr[startIndex] > arr[endIndex]){
    swap(arr, startIndex, endIndex);
    myQuickSort(arr, startIndex++, endIndex);
    myQuickSort(arr, startIndex, endIndex--);
  }
  console.log('quick sorted array -- ',arr, 'run time - ', newCount);
  return newCount;
};
myQuickSort(arr,0,arr.length - 1);
console.log('reun time - ',newCount);
