// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Arrays
puzzlePieces = [[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0]];
puzzleBoard = [[1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6]];

// Variables
let cols;
let rows;
let cellSize;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width/20;
}

function draw() {
  background('aqua');
  showFirstGrid();
  showSecondGrid();
}

// Functions

function showFirstGrid() {
  let rows = puzzleBoard.length;
  let cols = puzzleBoard[0].length;

  // Nested for loop to display a 6x6 grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = i * cellSize + windowWidth/10;
      let y = j * cellSize + windowHeight/27; 

      rect(x, y, cellSize, cellSize);
    }
  }
}

function showSecondGrid() {
  let rows = puzzlePieces[0].length;
  let cols = puzzlePieces.length;
  let gridWidth = rows * cellSize;

  // Nested for loop displaying a 2x18 grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = i * cellSize + (windowWidth - gridWidth)/5;
      let y = j * cellSize + (windowHeight)/1.325;

      rect(x, y, cellSize, cellSize);
    }
  }
}