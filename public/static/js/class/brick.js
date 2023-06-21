class Brick {
  constructor({
    pos = { x: 10, y: 10 },
    size = { width: 40, height: 20 },
    color = { r: random(255), g: random(255), b: random(255) },
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
