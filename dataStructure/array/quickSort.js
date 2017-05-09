// This function partitions given array and returns
//  the index of the pivot.
// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};
var partition = function(array, p, r) {
  var q = p;
  for(var j = p; j < r; j++){
    if(array[j] <= array[r] ){
      swap(array, j, q);
      q++;
    }
    // console.log('array-  '+ array+' j- ' + j + ' q-' +q);
  }
  swap(array, r, q);
  // console.log('array OUT',array);
  return q;
};
// var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
// var q = partition(array, 0, array.length-1);
// console.log('Array after partitioning: ' + array + ' AND q = ' + q);
// Program.assertEqual(q, 4);
// Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

var quickSort = function(array, p, r) {
  if(p<r){
    // console.log('IN  - ' + array + ' p -',p, ' r- ' +r);
    var q = partition(array,p,r);
    quickSort(array,p,q-1);
    quickSort(array,q+1,r);
    // console.log('OUT - ' + array + '  q= ' + q,p, r, ' count = ',count);
  }
  // return array;
};

var array = [3, 7, 5, 11, 191,12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log('Array after sorting: ' + array);
// Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);
