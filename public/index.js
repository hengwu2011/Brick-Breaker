let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball({
    x: windowWidth / 2,
    y: 120,
    radius: 20,
    xSpeed: 6,
    ySpeed: -3,
  });
  background(0);
  console.log("noooo");
}

function draw() {
  background(0);
  ball.move();
  ball.show();
}
