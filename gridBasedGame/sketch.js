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
let level;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Two boards side by side
  
}

function draw() {
  
}

// Functions

function selectScreen() {
  background('green');
  if (level === 1) {
    easyMode();
  }
  else if (level === 2) {
    difficultMode();
  }
}

function displayGrids() {

}


// Creating functions for different levels

// function easyMode()
// function difficultMode()