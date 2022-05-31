export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = Math.random() * stageWidth;
    this.y = Math.random() * stageHeight;
  }

  draw(ctx, stageWidth, stageHeight, keyStatus) {
    // this.x += this.vx;
    // this.y += this.vy;

    if (keyStatus.rightPressed) {
      this.x += this.vx;
    } else if (keyStatus.leftPressed) {
      this.x -= this.vx;
    }
    if (keyStatus.upPressed) {
      this.y -= this.vy;
    } else if (keyStatus.downPressed) {
      this.y += this.vy;
    }

    // this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}
