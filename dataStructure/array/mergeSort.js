'use strict';

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }
  // console.log('lowHalf == ', lowHalf, ' highHalf ==', highHalf);
  k = p;
  i = 0;
  j = 0;
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
  while(i < lowHalf.length && j < highHalf.length && k < array.length){
    if(lowHalf[i] <= highHalf[j]){
      array[k] = lowHalf[i];
      i++;
    } else if(lowHalf[i] > highHalf[j]){
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }
  while(i < lowHalf.length){
    array[k] = lowHalf[i];
    i++;
    k++;
  }
  while(j < highHalf.length){
    array[k] = highHalf[j];
    j++;
    k++;
  }
  // console.log('i- ', i,' j - ' ,j,' k= ', k,'array = ',array);
    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
  return array;
};
// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
  if(p<r){
    var q = Math.round((p+r)/2);
    var a = mergeSort(array.slice(p,q),p,q-1);
    var b = mergeSort(array.slice(q),p,r-q);
    array = a.concat(b);
    merge(array, p, q-1,r);
  }
  // console.log('array - OUT - ',array);
  return array;
};

var array = [14, 7, 3, 12, 9, 11, 6, 2,0];
array = mergeSort(array, 0, array.length-1);
console.log('Array after sorting: ' + array);
//Result array will be = [0, 2, 3, 6, 7, 9, 11, 12, 14]

var arr = [-4,8,4,6,8,7,64,99,0,-98];
arr = mergeSort(arr, 0, arr.length-1);
console.log('Array after sorting: ' + arr);
