'use strict';

//QUESTION: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


var matrixPrint = function(matrix){
  var n = matrix.length;
  var matrix2 = [];
  for(var i = 0; i < n; i++){
    var str = '';
    for(var j = 0; j < n; j++){
      // str += i + '' + j + ' ';
      str += matrix[i][j] + ' ';
    }
    console.log(str);
  }
};
var turnNinetyDegreeAntiClock = function(matrix){
  var n = matrix.length;
  for(var i = 0; i < n/2; i++){
    for(var j = i; j < n - i - 1; j++){
      // console.log('runt time - ' + i + ' ' + j);
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][n - i - 1];
      //console.log('temp - ', temp, 'sec - ', matrix[j][n - i - 1],'third - ', matrix[n - i - 1][n - j - 1],'four - ',matrix[n - j - 1][i]);
      matrix[j][n - i - 1] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = temp;
    }
  }
  return matrix;
};
// var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// matrixPrint(matrix);
// turnNinetyDegreeAntiClock(matrix);
// matrixPrint(matrix);
