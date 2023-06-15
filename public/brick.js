class Brick {
  constructor({
    pos = { x: 10, y: 10 },
    size = { width: 40, height: 20 },
    color = { r: 255, g: 0, b: 0 },
    health = 1,
  } = {}) {
    this.pos = pos;
    this.size = size;
    this.color = color;
    this.health = health;
  }
  show() {
    const { r, g, b } = this.color;
    fill(r, g, b);
    rect(this.pos.x, this.pos.y, this.size.width, this.size.height);
  }
}
