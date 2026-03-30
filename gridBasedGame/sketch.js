// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Arrays
puzzlePieces = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];
puzzleBoard = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];

// Variables
let cols = 5;
let rows = 5;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(204,63,100);
  displayGrids();
}

// Functions

function displayGrids() {
  const CELL_SIZE = windowWidth/15;
  let offset = windowWidth * 0.6;

  rectMode(CENTER);
  

  for (let i = 0;i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(CELL_SIZE * i + windowWidth/6, CELL_SIZE * j + windowHeight/5, CELL_SIZE, CELL_SIZE, 5);
      rect(CELL_SIZE * i + offset, CELL_SIZE * j + windowHeight/5, CELL_SIZE, CELL_SIZE, 5);
    }
  }
}
