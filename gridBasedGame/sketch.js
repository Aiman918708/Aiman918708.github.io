// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Arrays
puzzlePieces = [];
puzzleBoard = [];

// Variables
let cols;
let rows;
let firstButton;
let secondButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Objects
  firstButton = {
    w: windowWidth/4,
    h: windowHeight/4,
    x: windowWidth/3 + width/1.5,
    y: windowHeight/3 + height/2
  };
  secondButton = {
    w: windowWidth/4,
    h: windowHeight/4,
    x: windowWidth*2/3 - width/3,
    y: windowHeight/3+ height/2
  };
}

function draw() {
  showScreen();
// displayGrids();
}

// Functions

function showScreen() {
  background(32,178,170);


  strokeWeight(15);
  stroke(205,92,92);
  
  fill(255,192,203);
  rect(firstButton.x, firstButton.y, firstButton.w, firstButton.h, 25);
  rect(secondButton.x, secondButton.y, secondButton.w, secondButton.h, 25);
}
  