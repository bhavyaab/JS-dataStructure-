
// Function Name : cal_area
// This function has 1 parameter
// triangle aTriangle:  It contains the 3 vertices of the triangle in x-y plane.
// The function should return the area of the triangle "aTriangle".


// commandline input using readline:
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// all points of a trangle.
var trangle = process.argv.map(function(ele){
  return parseInt(ele);
}).slice(2);

var cal_area = Math.round(Math.sqrt(Math.pow(2, trangle[0] - trangle[2]) + Math.pow(2, trangle[1] - trangle[3]) + Math.pow(2, trangle[3] - trangle[5]) + Math.pow(2, trangle[2] - trangle[4]) + Math.pow(2, trangle[5] - trangle[1]) + Math.pow(2, trangle[4] - trangle[0])));

console.log('area of the trangle = ', cal_area);
process.exit;
