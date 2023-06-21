class Ball {
  constructor({ x, y, radius, xSpeed, ySpeed } = {}) {
    this.x = x++;
    this.y = y++;
    this.radius = random(200);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.grav = -0.8;
    this.maxYSpeed = 30;
    this.airFriction = 0.99999;
    this.color = { r: random(255), g: random(255), b: random(255) };
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
