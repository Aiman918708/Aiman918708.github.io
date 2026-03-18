// Arrays - Generative Art
// Aiman Fatima Adnan
// 16/03/26

// Extra for Experts:
// Using HSB instead of RGB values to control color brightness, saturation and transparency
// Look at 'switchColor()' function

// Creating Array
let picture = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0); // 0 in HSB = to black
  
  // Creates circles of random width, height and size
  for (let i = 0; i < 100; i++) {
    let circles = {
    // All objects are randomized
      x: random(windowWidth),
      y: random(windowHeight),
      radius: random(20,200),
      theme: "pink", // Circles are shades of pink
      c: color(random(294, 330), 100, 100, 70) ,
      spdX: random(-10,10),
      spdY: random(-10,10)
    };

    // Adds circles to array
    picture.push(circles);
  }
}

function draw() {
  background(0);

  // Goes through the array looking at the objects and drawing the circles accordingly
  for (let i = 0; i < picture.length; i++) {
    let p = picture[i];

    moveCircles(p);
    switchColor(p);  
    drawCircles(p);
  }
}

function drawCircles(p) {
  noFill();
  stroke(p.c);
  strokeWeight(1);
    
  // Using 'r' for radius and 'd' for diameter
  for (let r = 0; r < 20; r++) {
    let d = (p.radius/20) * r;
    ellipse(p.x, p.y, d)
  }
}

function moveCircles(p) {
  p.x += p.spdX;
  p.y += p.spdY

  // Lets circle change direction when it hits edge of screen
  if (p.x > width || p.x < 0) {
    p.spdX *= -1;
  }

  if (p.y > height || p.y < 0) {
    p.spdY *= -1;
  }
}

function switchColor(p) {
  // When a circle hits the edge of the screen, it changes hues
  if (p.x > width || p.x < 0 || p.y > height || p.y < 0) {
    if (p.theme === "pink") {
      p.c = color(random(176, 247), 100, 100, 70);
      p.theme = "blue";
    }

    else if (p.theme === "blue") {
      p.c = color(random(58, 150), 100, 100, 70);
      p.theme = "yellow";
    }

    else if (p.theme === "yellow") {
      p.c = color(random(294, 330), 100, 100, 70);
      p.theme = "pink"
    }
  }
}