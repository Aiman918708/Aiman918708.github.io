// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Arrays
puzzlePieces = [];
puzzleBoard = [];

// Variables
let cols = 5;
let rows = 5;


 
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  displayGrids();
}

// Functions

function displayGrids() {

  let cellSize = windowWidth/25;
  let offset = windowWidth * 0.4;

  for (let i = 0;i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(cellSize * i + windowWidth/10, cellSize * j, cellSize, cellSize);
      rect(cellSize * i + offset, cellSize * j, cellSize, cellSize);
    }
  }
}
