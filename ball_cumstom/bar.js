export class Bar {
  constructor(stageWidth, stageHeight, width, height, speed) {
    this.width = width;
    this.height = height;
    this.vx = speed;
    //   this.vy = speed;

    this.x = Math.random() * stageWidth;
    this.y = stageHeight - 100;
    this.maxX = width + this.x;
    this.maxY = height + this.y;
  }

  draw(ctx, stageWidth, stageHeight, keyStatus) {
    // this.x += this.vx;
    // this.y += this.vy;

    if (keyStatus.rightPressed) {
      this.x += this.vx;
      this.maxX = this.width + this.x;
    } else if (keyStatus.leftPressed) {
      this.x -= this.vx;
      this.maxX = this.width + this.x;
    }
    // if (keyStatus.upPressed) {
    //   this.y -= this.vy;
    // } else if (keyStatus.downPressed) {
    //   this.y += this.vy;
    // }

    // const xGap = 80;
    // const yGap = 60;

    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
