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
  background(255, 102, 102);
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
      let x = i * cellSize + windowWidth * 0.125;
      let y = j * cellSize + windowHeight/15; 

      stroke(255, 102, 102);
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
      let x = i * cellSize + (windowWidth - gridWidth)/2;
      let y = j * cellSize + windowHeight/1.325;

      rect(x, y, cellSize, cellSize);
    }
  }
}

// Adding image next to grid
const IMG = document.createElement('IMG');
IMG.src = './images/picture.jpg';
IMG.alt = 'Reference picture for the puzzle';
document.body.appendChild(IMG);

// Positioning and sizing image
IMG.style.position = 'fixed';
IMG.style.left = window.innerWidth/1.75 + 'px';
IMG.style.top = window.innerHeight/15 + 'px';
IMG.style.width = window.innerWidth/20 * 6 + 'px';
IMG.style.height = window.innerWidth/20 * 6 + 'px';