import { random } from "./main.js";

export default class Ball {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} velX
   * @param {number} velY
   * @param {string} color
   * @param {number} size
   */
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  /**
   *
   * @param {number} screenWidth
   * @param {number} screenHeight
   */
  update(screenWidth, screenHeight) {
    if (this.x + this.size >= screenWidth) {
      this.velX = -this.velX;
    }
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size >= screenHeight) {
      this.velY = -this.velY;
    }
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  /**
   *
   * @param {Ball} other
   */
  collideWith(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    return this.size + other.size > distance;
  }

  changeColor() {
    this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  }
}
