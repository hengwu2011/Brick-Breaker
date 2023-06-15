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
    this.color = { r: 0, g: 255, b: 0 };
  }

  move() {
    this.ySpeed = min(max(this.ySpeed, -this.maxYSpeed), this.maxYSpeed);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  show() {
    const { r, g, b } = this.color;
    fill(r, g, b);
    ellipse(this.x, this.y, this.radius);
  }
}
