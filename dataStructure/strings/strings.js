'use strict';

//QUESTION: Write a method to replace all spaces in a string with ‘%20’
var urlfyString = function(str){
  return console.log(str.trim().split(' ').join('%20'));
}; //complaxity O(1)
// urlfyString('acd mkd lss  ');


//QUESTION:  Write a method for two strings to check if one is permutation of other.

var checkPermutation= function(str1, str2){
  if(str1 === null || str2 === null) return 'fail';
  if(str1.length !== str2.length) return console.log('two strings are NOT permutation of each other');
  if(str1.toLowerCase().split('').sort().join() === str2.toLowerCase().split('').sort().join()) return console.log('two strings: ' + str1 +' and ' + str2 + 'are permutation of other');

  return console.log('two strings: ' + str1 +' and ' + str2 + ' are NOT permutation of other');
}; // complaxity O(2N)
// checkPermutation('God ', 'dog');

//QUESTION: Given a string Write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrage that is same forward and backbards.
//A permutation is a rearrangement of letters. The palidrome does not
//need to be limited to just dictionary words.
// EXAMPLE: input: 'Tact coa' Out put: True(permutations: 'taco cat', 'atco cta' etc);
var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};
___________________________________________________________;

var permutation = function(string){
  var result = [];
  if(string.length === 1){
    result.push(string);
    return result;
  }
  for(var i = 0; i < string.length; i++){
    var first = string[i];
    var left = string.substring(i,0) + string.substring(i + 1);
    var combinations = permutation(left);
    for(var j = 0; j < combinations.length; j++){
      result.push(combinations[j] + first );
    }
  }
  // console.log('result - ' , result);
  return result;
};
console.log(permutation('abc'));
