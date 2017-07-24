/*
IS UNIQUE: Implement an algorithm to determine if
a string has all unique characters.
What if you can not use any datastructure?

*/


var checkUniqueCharecters = function(str){
  if(!str) return 'no string provided!';
  if(str.length < 2) return 'string is unique!'; // if length is one then is already unique.
  str = str.toLowerCase();
  for(var i = 0; i < str.length/2; i++){

    var char1 = str.charAt(i);  // copy characters from begining
    var newStr1 = str.slice(0, i) + str.slice(i + 1); // remove copied character

    var char2 = str.charAt(str.length - 1 - i); // copy characters from end
    var newStr2 = str.slice(0, str.length - 1 - i); // remove copied character

    var index1 = newStr1.indexOf(char1); // check if coppied charector is found in the remaining string.
    var index2 = newStr2.indexOf(char2);  // check if coppied charector is found in the remaining string.
    if(index1 !== -1 || index2 !== -1){  // if any of the charector index is not equal to -1 then duplicates exist.
      console.log('string - ' + str + ' - donot have all unique characters');
      return false;
    }
  }
  console.log('string - ' + str + ' - has all unique characters'); // otherwise all characters are unique!!
  return true;
};

checkUniqueCharecters('abcd');
checkUniqueCharecters('abcdefgchijkl');
checkUniqueCharecters('arraysAndStrings');
