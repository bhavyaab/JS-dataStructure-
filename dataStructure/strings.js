'use strict';

// QUESTION: Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
// five characters, including the null character.)
//A C-style string is simply an array of characters that uses a null terminator. A null terminator is a special character (‘\0’, ascii code 0) used to indicate the end of the string. More generically, A C-style string is called a null-terminated string.

var cStyleString = function(string){
  var arr = string.split('');
  var str = '';
  while(arr.length > 1){
    var chr = arr.shift();
    str = chr + str;
  }
  str = str + arr[0];
  console.log(string + ' is reversrd as = ' + str + '.');
  return str;
};
// cStyleString('string\0'); //complaxity is o(n)


// QUESTION: Design an algorithm and write code to remove the duplicate characters in a string
// without using any additional buffer.
//NOTE: One or two additional variables are fine.
// An extra copy of the array is not.
// FOLLOW UP
// Write the test cases for this method.

var removeDupFromString = function(string){
  var myString = string.toLowerCase();
  for(var i = 0; i < string.length; i++){
    var char = myString.charAt(i);

    if(myString.indexOf(char) !== -1){
      myString = myString.split(char).join('');
    }
    myString = myString.slice(0, i) + char + myString.slice(i);
  }
  console.log('Given string === ' + string + '\nResult string === '+ myString);
  return myString;
};

// removeDupFromString('Try not to become a copy of someone else. Not even a perfect copy. Originals are always honored over duplicates');


// QUESTION: Write a method to decide if two strings are anagrams or not.
// An anagram of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.
var anagramStrings1 = function(str1, str2){
  if(str1 === null || str2 === null) return 'fail';
  return console.log('strings are anagram - ' + (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')));
}; //complaxity O(2n);

var anagramStrings = function(str1, str2){
  if(str1 === null || str2 === null) return 'fail';
  if(str1.length !== str2.length) return console.log('two strings are not not anagrams');
  for(var i = 0; i < str1.length; i++){
    var char = str1.charAt(i);
    if(str2.indexOf(char) === -1) return console.log('two strings are not anagrams');
  }

  return console.log('two strings are anagrams');
}; // complaxity O(n)
// anagramStrings('abcde', 'bcdea');
// anagramStrings1('anagrams', 'anagrans');



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
