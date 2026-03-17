// Arrays - Generative Art
// Aiman Fatima Adnan
// 16/03/26

// Extra for Experts:
// - 

// Creating Arrays
let picture = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  
  for (let i = 0; i < 20; i++) {
    let circles = {
      x: random(windowWidth),
      y: random(windowHeight),
      radius: random(20,200)
    };
  }
}

function draw() {
  background('black');
  
}

