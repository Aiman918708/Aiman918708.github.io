// Arrays - Generative Art
// Aiman Fatima Adnan
// 16/03/26

// Extra for Experts:
// Using HSB instead of RGB values to control the brightness, saturation and transparency
// of colors

// Creating Arrays
let picture = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 300, 100, 100, 100);
  background(0); // 0 in HSB = to black
  
  // Creates circles of random width, height and size, and adds them to the array
  for (let i = 0; i < 20; i++) {
    let circles = {
      x: random(windowWidth),
      y: random(windowHeight),
      radius: random(20,200),
      c: color(random(300, 360), 100, 100, 20)
    };
    picture.push(circles);
  }
}

function draw() {
  // Draws the circles in the list onto the screen
  for (let i = 0; i < picture.length; i++) {
    let p = picture[i];
    for (let r = 0; i < 10; r++) {
      
    }
  }
  
}

