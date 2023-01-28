import Ball from "./ball.js";

export default class BallRelation {
  /**
   *
   * @param {Ball} ball
   * @param {Ball} other
   */
  constructor(ball, other) {
    this.ball = ball;
    this.other = other;
    this.inCollition = false;
  }

  refresh() {
    if (this.ball.collideWith(this.other) && !this.inCollition) {
      this.inCollition = true;
      this.ball.changeColor();
      this.other.changeColor();
    } else if (!this.ball.collideWith(this.other) && this.inCollition) {
      this.inCollition = false;
    }
  }
}
