// Aiman Fatima Adnan
// Interactive Scene Assignment 03/02/26
// Tic Tac Toe game, use keys X and O to play
// Extra For Experts; 2D Arrays 

// creating 2D array 
let board = [[0,0,0], [0,0,0], [0,0,0]];

// creating variables
let player = 'player1';
let rows = 3;
let cols = 3;
let winner;
let size;

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

  // announcing winner
  if (winner) {
    background(255);
    textFont('impact')
    fill(217, 1, 102);
    noStroke();
    textSize(100);
    textAlign(CENTER, CENTER);

    if (winner === 'player1') {
      text ('X wins!', width/2, height/2);
    }
    else if (winner === 'player2') {
      text ('O wins!', width/2, height/2);
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

  // ensures that a player doesn't go twice in a row, links keys to drawX and drawO functions
  if (board[i][j] === 0) {
    if (keyCode === 88 && player === 'player1') {
      board[i][j] = 1;
      winOrLoss();
      if (!winner) {
        switchPlayer();
      }
    }
    else if (keyCode === 79 && player === 'player2') {
      board[i][j] = 2;
      winOrLoss();
      if (!winner) {
        switchPlayer();
      }
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
  // checks columns and rows for 3 X's or O's in a row
  for (let x = 0; x < rows; x++ ){
    if (board[x][0] != 0 && board[x][0] === board[x][1] && board[x][1] === board[x][2] || 
        board[0][x] != 0 && board[0][x] === board[1][x] && board[1][x] === board[2][x] ) {
          winner = player;
        }
      }

  // checking diagonals
  if (board[1][1] != 0) {
    if ( board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
      board[0][2] === board[1][1] && board[1][1] === board[2][0] ) {
        winner = player;
        }
      }
    }