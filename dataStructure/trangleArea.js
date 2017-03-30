// Function Name : cal_area
// This function has 1 parameter
// triangle aTriangle:  It contains the 3 vertices of the triangle in x-y plane.
// The function should return the area of the triangle "aTriangle".


// commandline input:

process.stdin.setEncoding('utf8');

console.log('Enter (x, y) points of triangle!');

process.stdin.on('data', function (text) {
  console.log('received data:', text);
  if (text === 'quit\n') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}
