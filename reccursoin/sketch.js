// Recursion Ciecles Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, width/2);
}

function drawCircle(x, radius) {
  fill(radius,0,radius/2);
  circle(x, height/2, radius*2);

  //exit clause
  if (radius > 20) {
    drawCircle(x-radius/2, radius/2);
    drawCircle(x+radius/2, radius/2);
  }
}