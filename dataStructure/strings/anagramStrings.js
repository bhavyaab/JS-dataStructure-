'use strict';

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
anagramStrings('abcde', 'bcdea');
anagramStrings1('anagrams', 'anagrans');
