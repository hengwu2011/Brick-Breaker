class Paddle {
  constructor({
    pos = { x: windowWidth/2, y: windowHeight - 50 },
    size = { width: 100, height: 50 },
    color = { r: 255, g: 0, b: 0 },
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
