class Ball {
  constructor({x, y, radius, xSpeed, ySpeed}={}) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.grav = -0.8;
    this.maxYSpeed = 30;
    this.airFriction = 0.99999
  }

  move() {
    this.hitsBounds({ w: windowWidth, h: windowHeight });
    this.gravity();
    this.air()
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  show() {
    ellipse(this.x, this.y, this.radius);
  }

  hitsBounds(bounds) {
    this.hitsWall(bounds.w);
    this.hitsY(bounds.h);
  }

  hitsWall(w) {
    if (this.x > w) return this.reverseXSpeed(true);
    if (this.x < 0) return this.reverseXSpeed(true);
  }

  hitsY(h) {
    if (this.y > h) return this.bounce(true);
    if (this.y < 0) return true;
  }

  bounce(bool) {
    this.y = windowHeight - 10;
    this.ySpeed *= -1;
    return bool;
  }

  reverseXSpeed(bool) {
    this.xSpeed *= -1;
    return bool;
  }

  gravity() {
    this.ySpeed = max(
      min(this.ySpeed - this.grav, this.maxYSpeed),
      -this.maxYSpeed
    );
  }
  air(){
    this.ySpeed*=this.airFriction
  }
}
