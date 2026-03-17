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
  
  // Creates circles of random width, height and size, and adds them to the array
  for (let i = 0; i < 20; i++) {
    let circles = {
      x: random(windowWidth),
      y: random(windowHeight),
      radius: random(20,200)
    };
    picture.push(circles);
  }
}

function draw() {
  background('black');
  for (let i = 0; i < pictures.length; i++) {
    if (i = circles)
  }
  
}

