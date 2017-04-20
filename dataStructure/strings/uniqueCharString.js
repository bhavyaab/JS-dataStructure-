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
console.log('\'strings\' =  ',uniqueCharacterInString('strings'));
console.log('\'string\' =  ',uniqueCharacterInString('string')); // O(n) complaxity.
