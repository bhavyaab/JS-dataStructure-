'use strict';

var count = 0;
function guessNumber(min,max){
  return Math.floor((min + max)/2);
}

function binarySearch(arr, x){
  var arr = arr.sort(function(a, b) {
    return a - b;
  });
  var min = 0;
  var max = arr.length - 1;
  var guess = guessNumber(min, max);
  return guessAndCheck(min,max,guess,arr,x);
}


function guessAndCheck(min,max,guess,arr,x){
  count++;
  if(count > 12) return;
  if(arr[guess] < x){
    min = guess;
    console.log(arr[guess], ' guess is less than ', x);
  } else if( arr[guess] > x ){
    max = guess;
    console.log(arr[guess] , ' guess is greater than ', x);
  } else if( arr[guess] === x){
    console.log('runtime = ', count, 'found element on index - ', guess);
    return guess;
  } else {
    console.log('runtime = ', count);
    return '-1';
  }
  guess = guessNumber(min,max);
  guessAndCheck(min,max,guess,arr,x);
}

var arr = [2,44,55,6,7789,99,4,3,6,8,86,3,2,676,5,4,3,2,4,6,56,767,76768,1,5,4,43,2,2,11,11];
// binarySearch(arr, 56);


/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doBinarySearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  while(min <= max){
    count++;
    guess = Math.floor((min + max)/2);
    if(array[guess] === targetValue){
      console.log('A binary search for the target value '+ targetValue +' on the array primes requires ' + count + ' guess.');
      return guess;
    } else if(array[guess] > targetValue){
      max = guess - 1;
      console.log('Guess is lower than targetValue ' + guess);
    } else {
      min = guess + 1;
      console.log('Guess is higher than targetValue ' + guess);
    }
  }
  return -1;
};//complaxity O(log2(N) + 1)

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = doBinarySearch(primes, 19);
console.log('Found prime at index ' + result);

//Program.assertEqual(doSearch(primes, 73), 20);
