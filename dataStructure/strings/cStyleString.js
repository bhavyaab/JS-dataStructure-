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
cStyleString('string\0'); //complaxity is o(n)
