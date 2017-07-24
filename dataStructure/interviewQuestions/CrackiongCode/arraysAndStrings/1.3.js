/*
QUESTION: Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer.
NOTE: One or two additional variables are fine. An extra copy of the array is not.
FOLLOW UP: Write the test cases for this method.
*/
 var removeDup = function(str){
   str = str.toLowerCase();
   var n = str.length,
     count = 0,
     i = 0,
     index;
   while(i < n){
     count++;
     var chr = str[i],
       str = str.slice(0, i) + str.slice(i+1);
     if(str.indexOf(chr) !== -1){
       while(str.indexOf(chr) !== -1){
         index = str.indexOf(chr);
         str = str.slice(0, index) + str.slice(index + 1);
         count++;
       }
     }
     str = str.slice(0, i) + chr + str.slice(i);
     i++;
     n = str.length;
   }
   console.log('string - ' + str + ' donot have duplicate charectors. count = ' + count + '  complaxity of N');

   return str;
 };

 var test = function(){
   var test = removeDup('characters');
   if(test === 'chartes') console.log('TEST PASS');
   else console.log('TEST FAIL');
 };


 test();
