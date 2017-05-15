/*Given a string, print out the character that occurs the most times
in succession and how many times it occurred. For example, if the
input is "rrrrSSS##rrrRR", the output is "r", 4.*/

var succession = function(str){
  var character = '';
  var repeatation = 0;
  var i = 0;
  var repeat = 0;
  var prev = str.charAt(0);
  while( i < str.length){
    var curr = str.charAt(i);
    if(curr === prev) {
      repeat++;
      if(repeat > repeatation){
        repeatation = repeat;
        character = curr;
      }
    } else{
      repeat = 1;
    }
    prev = str.charAt(i);
    i++;
  }
  return 'Character is ' + character + ' repeatation is ' + repeatation + '.';
};


var output = succession('rrrrSSS##rrrRR');
console.log(output);
