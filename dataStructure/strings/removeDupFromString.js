'use strict';
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
