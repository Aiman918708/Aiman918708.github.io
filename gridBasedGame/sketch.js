// 2D Grid Assignment
// Aiman Fatima Adnan
// 23/03/26

// Extra for Experts:
// Used a class so each piece can be selected and moved separately
// Downloaded image and divided it into pieces, resized and positioned image and image pieces

// Arrays
let piecesTray = []; // Stores pieces
let puzzleBoard = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
  [0,0,0,0,0,0], [0,0,0,0,0,0]]; //  Board to solve puzzle

// Variables 
let cellSize;
let referenceIMG;

// Adding reference image
function preload() {
  referenceIMG = loadImage('./images/picture.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width/20;

  // Calculating piece size
  let w = referenceIMG.width/6;
  let h = referenceIMG.height/6;
 
  // For loop to cut through image
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 6; x++) {
      let imgSlice = referenceIMG.get(x * w, y * h, w, h);

      let col = piecesTray.length % 18;
      let row = floor(piecesTray.length/18);
      let xStart = col * cellSize + (width - (18 * cellSize))/2;
      let yStart = row * cellSize + height / 1.325;

      // Push piece into second grid/tray
      piecesTray.push(new Piece(imgSlice, xStart, yStart, cellSize));
    }
  }

  shufflePieces(piecesTray);
}

function draw() {
  background(255, 102, 102);
  displayGrids();
  displayImages();

  // Updates screen when a piece is moved to new position
  for (let p of piecesTray) {
    p.update();
    p.display();
  }
}

// Functions

function displayGrids() {
  // Grid One
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

  // Grid Two
  let trayRows = 2;
  let trayCols = 18;
  let gridWidth = trayCols * cellSize;

  // Nested for loop displaying a 2x18 grid
  for (let i = 0; i < trayCols; i++) {
    for (let j = 0; j < trayRows; j++) {
      let x = i * cellSize + (windowWidth - gridWidth)/2;
      let y = j * cellSize + windowHeight/1.325;

      rect(x, y, cellSize, cellSize);
    }
  }
}

function displayImages() {
 // Ref image size and position
 let imgSize = cellSize * 6;
 image(referenceIMG, width/1.75, height/15, imgSize, imgSize);
}

function mousePressed() {
  for (let p of piecesTray) {
    p.pressed();
  }
}

function shufflePieces(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

    let theX = array[i].x;
    let theY = array[i].y;
    array[i].x = array[j].x;
    array[i].y = array[j].y;
    array[j].x = theX;
    array[j].y = theY;
  }
}

function mouseReleased() {
  for (let p of piecesTray) {
    p.released();
  }
}

// Separate each piece to move on its own
class Piece {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = size;
    this.dragging = false;
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);
  }

  update() {
    if (this.dragging) {
      this.x = mouseX - this.size/2;
      this.y = mouseY - this.size/2;
    }
  }

  pressed() {
    // Ensures mouse is pressed while hovering over the piece to drag it
    if (mouseX > this.x && mouseX < this.x + this.size && mouseY > this.y && mouseY < this.y + this.size) {
      this.dragging = true;
    }
  }

  released() { 
    this.dragging = false;

    // When piece is close enough to a cell, it snaps into place
    let gridXStart = windowWidth* 0.125;
    let gridYStart = windowHeight / 15;

    let closestCol = round((this.x - gridXStart)/ cellSize);
    let closestRow = round((this.y - gridYStart)/ cellSize);

    if (closestCol >= 0 && closestCol < 6 && closestRow >= 0 && closestRow < 6) {
      this.x = closestCol * cellSize + gridXStart;
      this.y = closestRow * cellSize + gridYStart;
    }
  }
}