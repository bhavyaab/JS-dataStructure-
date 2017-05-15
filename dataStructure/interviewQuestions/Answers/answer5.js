/*QUESTION 5> You're provided an unsorted list of comparables (make them integers for simplicity)
and you need to determine the largest gap between successive elements _if_ they were sorted.
For example:
// input
[1 4 2 7 18 3 10 15]
// output
5 (gap between 10 and 15)*/
var count = 0;
function mergeSort(arr){
  if (arr.length < 2) return arr;

  var middle = parseInt(arr.length / 2);
  var left   = arr.slice(0, middle);
  var right  = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  count++;
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}
var findMaxGap = function(array){
  array = mergeSort(array);
  var gap = 0, prev = 0, i = 0;
  while(i < array.length){
    count++;
    if(array[i] - prev > gap) gap = array[i] - prev;
    prev = array[i];
    i++;
  }
  return gap;
};

var arr = [1, 4, 2, 7, 18, 3, 10, 3,15];
var gap = findMaxGap(arr);

console.log('gap = ', gap, ' count - ',count, ' array.length - ',arr.length);
