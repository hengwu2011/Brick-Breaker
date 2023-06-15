const balls = [];
let bricks = [];
let paddle;
let bounds;
function setup() {
  createCanvas(windowWidth, windowHeight);
  bounds = { w: windowWidth, h: windowHeight };
  paddle = new Paddle();
  console.log("hey");
  balls.push(
    new Ball({
      x: windowWidth / 2,
      y: windowHeight,
      radius: 20,
      xSpeed: 6,
      ySpeed: -3,
    })
  );
  // makeBricks(3,5)

  background(0);
  console.log("noooo");
}

const makeBricks = (rows, columns) => {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      bricks.push(new Brick({ pos: { x: i * 100, y: j * 50 } }));
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
      y: windowHeight,
      radius: 20,
      xSpeed: 6,
      ySpeed: -3,
    })
  );
};

const bounce = (ball) => {
  console.log("bounced")
  reverseYSpeed(ball);
  ball.y = windowHeight - 10;
};

const reverseXSpeed = (ball) => {
  ball.xSpeed *= -1;
};

const reverseYSpeed = (ball) => {
  console.log("reversed Y Speed")
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

  if (ball.x < object.pos.x || object.pos.x + object.size.width)
    reverseXSpeed(ball);
  if (ball.y < object.pos.y || object.pos.y + object.size.height)
    if (object instanceof Brick) {
      deleteBrick(object);
    }
};

const manageBall = (ball, bricks, bounds, paddle) => {
  hitsBounds(ball, bounds);
  gravity(ball);
  // air(ball);
  hitsObject(ball, paddle);
  bricks.forEach((brick) => {
    hitsObject(ball, brick);
  });
};

function draw() {
  background(0);
  balls.forEach((ball) => {
    // ball.move();
    // manageBall(ball, bricks, bounds, paddle);
    ball.show();
  });
  bricks.forEach((brick) => {
    brick.show();
  });
  paddle.show();
  paddle.x = mouseX - paddle.size.width/2;
}
