//<---------------------- ARRAY INSERION SHORT: ----------------------------------->

var insertionSort = function(array){
  for(var i = 0; i < array.length; i++){
    var temp = array[i];
    for(var j = i - 1; j > -1 && array[j] > temp; j--){
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};//complaxity O(NXN)


var arr =  [ 35, 4, 16, 4, 65, 1, 64, 1, 43, 3, 10, 31];
console.log('array - ', arr, arr.length);
var sortArr = insertionSort(arr);
console.log('sort array - ', sortArr, sortArr.length);

/*
Bucket sort
Bubble sort
Insertion sort - order of complaxity = best - 2 average: n^2; worst: n^2
Selection sort
Heapsort
Mergesort */
