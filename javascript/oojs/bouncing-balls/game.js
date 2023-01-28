import Ball from "./ball.js";
import BallRelation from "./ballRelation.js";
import { random } from "./main.js";

export default class Game {
  constructor(ballCount, ctx, screenWidth, screenHeight) {
    this.ballCount = ballCount;
    this.ctx = ctx;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.balls = [];
    this.ballRelations = [];

    while (this.balls.length < this.ballCount) {
      let size = random(10, 20);
      let newBall = new Ball(
        random(0 + size, screenWidth - size),
        random(0 + size, screenHeight - size),
        random(-7, 7),
        random(-7, 7),
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        size
      );
      this.balls.forEach((ball) => {
        this.ballRelations.push(new BallRelation(newBall, ball));
      });
      this.balls.push(newBall);
    }
  }

  play() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

    this.balls.forEach((ball) => {
      ball.draw(this.ctx);
      ball.update(this.screenWidth, this.screenHeight);
    });
    this.ballRelations.forEach((ballRelation) => {
      ballRelation.refresh();
    });
    requestAnimationFrame(() => {
      this.play();
    });
  }
}
