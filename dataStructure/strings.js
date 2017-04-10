'use strict';

// QUESTION: Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

var uniqueCharacterInString = function(str){
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++){
    //take out one element of the array and
    var char = arr.pop();
    //excluding space.
    if(char !== ' '){
      //check if this element exist in the rest part of array
      if(arr.indexOf(char) !== -1){
        // if exist any element return this is not all charector is unique.
        return 'string donot have all unique characters!';
      };
    }
  }
  // return this string has all unique charector.
  return 'string has all unique charector';
};
// console.log('\'strings\' =  ',uniqueCharacterInString('strings'));
// console.log('\'string\' =  ',uniqueCharacterInString('string')); // O(n) complaxity.

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
  if(str1.length !== str2.length) return console.log('two strings are not not anagrams');;
  for(var i = 0; i < str1.length; i++){
    var char = str1.charAt(i);
    if(str2.indexOf(char) === -1) return console.log('two strings are not anagrams');
  }

  return console.log('two strings are anagrams');
}; // complaxity O(n)
// anagramStrings('abcde', 'bcdea');
// anagramStrings1('anagrams', 'anagrans');



//QUESTION: Write a method to replace all spaces in a string with ‘%20’

var replaceWithSpace = function(str){
  return console.log(str.split(' ').join('%20'));
}; //complaxity O(1)
// replaceWithSpace('acd mkd lss');


//QUESTION: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


var turnNinetyDegree = function(matrix){
  var n = matrix.length;
  console.log(matrix);
  for(var i = 0; i < (n/2 - 1); i++){
    for(var j = 0; j < n/2; j++){
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - j - 1];
      matrix[j][n - j - 1] = temp;
    }
    console.log(matrix);
  }
};

var matrix = [[1,2,3],[4,5,6], [7,8,9]];
turnNinetyDegree(matrix);
