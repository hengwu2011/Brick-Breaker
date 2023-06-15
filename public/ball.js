class Ball {
  constructor({ x, y, radius, xSpeed, ySpeed } = {}) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.grav = -0.8;
    this.maxYSpeed = 30;
    this.airFriction = 0.99999;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  show() {
    ellipse(this.x, this.y, this.radius);
  }
}
