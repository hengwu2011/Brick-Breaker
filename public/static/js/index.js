const balls = [];
let bricks = [];
let paddle;
let bounds;
let cheat = false
console.log("heng rules")
function setup() {
  // frameRate(10);
  // frameRate(10);
  console.log("heng rules")
  createCanvas(windowWidth, windowHeight);
  console.log("heng rules")
  bounds = { w: windowWidth, h: windowHeight };
  paddle = new Paddle();
  balls.push(
    new Ball({
      x: windowWidth / 2,
      y: windowHeight / 2,
      radius: 20,
      xSpeed: 6,
      ySpeed: -3,
    })
  );
  makeBricks(7, 27, 40, 20, 50, 50);
  background(0);
}

const makeBricks = (rows, columns, distX, distY, offsetX, offsetY) => {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      bricks.push(
        new Brick({
          pos: { x: offsetX + i * distX, y: offsetY + j * distY },
          size: { width: distX, height: distY },
        })
      );
    }
  }
};
const hitsBounds = (ball, bounds) => {
  hitsWall(ball, bounds.w);
  hitsY(ball, bounds.h);
};

const hitsWall = (ball, w) => {
  if (ball.x > w) reverseXSpeed(ball);
  if (ball.x < 0) reverseXSpeed(ball);
};

const hitsY = (ball, h) => {
  if (ball.y > h) {
    balls.splice(0, 1);
    newBall();
  }
};
const newBall = () => {
  balls.push(
    new Ball({
      x: windowWidth / 2,
      y: windowHeight / 2,
      radius: 20,
      xSpeed: random(-10, 10),
      ySpeed: -3,
    })
  );
};

const bounce = (ball) => {
  // reverseYSpeed(ball);
  ball.y = 100;
};

const reverseXSpeed = (ball) => {
  ball.xSpeed *= -1;
};

const reverseYSpeed = (ball) => {
  ball.ySpeed *= -1;
};

const gravity = (ball) => {
  ball.ySpeed -= ball.grav;
};

const air = (ball) => {
  ball.ySpeed *= ball.airFriction;
};

const deleteBrick = (brickToDelete) => {
  bricks = bricks.filter((brick) => brick !== brickToDelete);
};

const hitsObject = (ball, object) => {
  if (!(ball.x + ball.radius > object.pos.x)) return;
  if (!(ball.x - ball.radius < object.pos.x + object.size.width)) return;
  if (!(ball.y + ball.radius > object.pos.y)) return;
  if (!(ball.y - ball.radius < object.pos.y + object.size.height)) return;

  if (ball.x < object.pos.x || ball.x > object.pos.x + object.size.width) {
    reverseXSpeed(ball);
  }
  if (ball.y < object.pos.y || ball.y > object.pos.y + object.size.height) {
    ball.ySpeed += 9;
    reverseYSpeed(ball);
    paddleplacement(ball,object)

  }
  if (object instanceof Brick) {
    deleteBrick(object);
  }
};
function paddleplacement(ball,paddle){
if (paddle.pos.x - ball.x > (paddle.pos.x+paddle.size.width)-ball.x){ball.xSpeed -= 20;}else ball.xSpeed -= 20
}
const manageBall = (ball, bricks, bounds, paddle) => {
  hitsBounds(ball, bounds);
  gravity(ball);
  // air(ball);
  hitsObject(ball, paddle);
  bricks.forEach((brick) => {
    hitsObject(ball, brick);
  });
};

function keyPressed(){
  if(key == 'l'){
    cheat = !cheat
  }
}
function draw() {
  background(0);
  balls.forEach((ball) => {
    ball.move();
    manageBall(ball, bricks, bounds, paddle);
    ball.show();
  });
  bricks.forEach((brick) => {
    brick.show();
  });
  paddle.show();
  paddle.x = (cheat ? balls[0].x:mouseX) - paddle.size.width / 2;
}
