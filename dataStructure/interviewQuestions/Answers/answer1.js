/*
Create a function that accepts an integer with range 0-999 and prints out the English translation as a string.
For example, if the input is 348, the output is "Three hundred forty eight".
If the input is 22, the output is "Twenty two".

*/
var zeros = [' ', 'one','two','three','four','five','six','seven','eight','nine'];
var tens = ['ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen'];
var tens2 = ['', '','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];

var integerToString = function(number){
  if(number < 0 || number > 999) return 'input number should be greater than 0 and smaller than 999.';
  number = number.toString();
  var i = number.length - 1;
  var zero = parseInt(number.charAt(number.length - 1));
  var translate = '';
  while(i >= 0){
    var num = parseInt(number.charAt(number.length - i - 1));
    if(i === 2){
      translate += zeros[num].toString() + ' hundred ';
    } else if(i === 1 && num > 1){
      translate += tens2[num] + ' ';
    } else if(i === 1 && num === 1){
      translate += tens[zero] + ' ';
    } else if(i === 0){
      translate += zeros[zero];
    }
    i--;
  }
  translate = translate.charAt(0).toUpperCase() + translate.substr(1).toLowerCase();
  console.log(translate);
  return translate;
};





integerToString(342);
