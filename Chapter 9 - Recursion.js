/////////////////
//// Page 99 ////
/////////////////

function rSigma(n) {
  if (n === 0) {
    return 1;
  }

  return n + rSigma(n - 1);
}

function rFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * rFactorial(n - 1);
}

var canvas2D = [
		[3,2,3,4,3],
		[2,3,3,4,0],
		[7,3,3,5,3],
		[6,5,3,4,1],
		[1,2,3,3,3]
		];

var startXY = [2,2];
var newColor = 1;

function floodFill(canvas2D, start, newColor, oldColor = 3){
  //base case = out recursion out of range
  if(start[0] < 0 || start[0] > canvas2D.length - 1 || start[1] < 0 || start[1] > canvas2D[0].length - 1 ){
		return;
	}
	if(canvas2D[start[0]][start[1]] === oldColor){
		canvas2D[start[0]][start[1]] = newColor;
		var up = floodFill(canvas2D, [start[0]-1, start[1]], newColor);
		var down = floodFill(canvas2D, [start[0]+1, start[1]], newColor);
		var left = floodFill(canvas2D, [start[0], start[1]-1], newColor);
		var right = floodFill(canvas2D, [start[0]+1, start[1]+1], newColor);
	}
}
