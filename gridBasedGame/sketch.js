// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Making arrays to store and put pieces into
puzzlePieces = [];
puzzleBoard = [];

// Variables
let cols;
let rows;
let firstButton = {
  w: 350,
  h: 150
};
let secondButton = {
  w: 350,
  h: 150
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  firstButton.x = windowWidth/3 - (firstButton.w/1.5);
  firstButton.y = windowHeight/3;

  secondButton.x = (windowWidth*2)/3 - (secondButton.w/3);
  secondButton.y =  windowHeight/3;
  // Two boards side by side
  
}

function draw() {
  showScreen();
 // displayGrids();
}

// Functions

function showScreen() {
  background(255, 255, 51);
  strokeWeight(4);
  stroke(255, 179, 222);
  
  fill(242, 15, 143);
  rect(firstButton.x, firstButton.y, firstButton.w, firstButton.h, 20);
  rect(secondButton.x, secondButton.y, secondButton.w, secondButton.h, 20);
}
  