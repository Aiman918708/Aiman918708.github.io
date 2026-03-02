// Extra For Experts; 2D Arrays 

// creating 2D array 
let board = [[0,0,0], [0,0,0], [0,0,0]];

// creating variables
let rows = 3;
let cols = 3;
let size;
let player = 'player1';

function setup() {
  createCanvas(400,400);
  size = width/3; // works for height as well
}

function draw() {
  background(220);
  strokeWeight(5);
  stroke(255, 20, 147);
  
  // creating 3x3 grid
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++) {
      let x = i * size;
      let y = j * size;
      rect(x, y, size, size);
    
      // local variable to locate square in grid
      let cell = board[i][j];

    
      if (cell === 1) {
        drawX(x,y);
      }
      else if (cell === 2) {
        drawO(x,y);
      }
    }      
  }
}

// creating functions

function drawO(x, y) {
  textSize(size * 0.5);
  textAlign(CENTER, CENTER);
  text('O', x + size/2, y + size/2);
}

function drawX(x, y) {
  textSize(size * 0.5);
  textAlign(CENTER, CENTER);
  text('X', x + size/2, y + size/2);
}

// keeps the 'X' or 'O' in memory after key is released
function keyPressed() {
  let i = floor(mouseX / size);
  let j = floor(mouseY / size);

  // ensures that a player doesn't go twice in a row
  if (board[i][j] === 0) {
    if (keyCode === 88 && player === 'player1') {
      board[i][j] = 1;
      switchPlayer();
    }
    else if (keyCode === 79 && player === 'player2') {
      board[i][j] = 2;
      switchPlayer();
    }
  }
}

// switches between players 
function switchPlayer() {
  if (player === 'player1') {
    player = 'player2';
  }
  else {
    player = 'player1';
  }
}

function winOrLoss() {
  // for (board[i][0]) {
  //   if (board[i][0] === [1,1,1]) {
  //     let winner = player1

  //   }
  // }
}