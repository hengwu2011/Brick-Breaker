let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(windowWidth / 2, 120, 20, 6, -3);
  background(0);
  console.log("noooo")
}

function draw() {background(0)
  ball.move();
  ball.show();
}
