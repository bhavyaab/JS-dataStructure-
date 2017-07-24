/*
Write code to reverse a C-Style String.
(C-String means that “abcd” is represented as five characters, including the null character.)
*/

var reverseString = function(str){
  str = str.split('');
  var newStr = '';
  for(var i = 0; i < str.length; i++){
    newStr += str[str.length - 1 - i];
  }
  console.log('reverse string = ', newStr, ' reversed sring length = ', newStr.length);
  return newStr;
};

reverseString('abcd');
