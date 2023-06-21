class Paddle {
  constructor({
    pos = { x: windowWidth/2, y: windowHeight - 50 },
    size = { width: 200, height: 50 },
    color = { r: random(255), g: random(255), b: random(255) },
  } = {}) {
    this.pos = pos;
    this.size = size;
    this.color = color;
  }

  show() {
    const { r, g, b } = this.color;
    fill(r, g, b);
    rect(this.pos.x, this.pos.y, this.size.width, this.size.height);
  }

  set x(newX) {
    this.pos.x = newX;
  }
}
