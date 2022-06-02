import { Ball } from "./ball.js";

import { Bar } from "./bar.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 10);
    this.ball2 = new Ball(this.stageWidth, this.stageHeight, 30, 10);
    this.bar = new Bar(this.stageWidth, this.stageHeight, 200, 20, 15);

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    // window.requestAnimationFrame(this.animate.bind(this));
    this.animate();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    // this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.bar.draw(this.ctx, this.stageWidth, this.stageHeight, keyStatus);
    this.ball.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      keyStatus,
      this.bar
    );
    this.ball2.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      keyStatus,
      this.bar
    );
  }
}

window.onload = () => {
  new App();
};

// 초기화, true로 되면 해당 방향으로 이동
// 이벤트 객체의 keyCode 속성에서 눌려진 키의 코드를 얻을 수 있고, 어떤 키인지 확인한 다음 적절한 변수 설정
let keyStatus = {
  rightPressed: false,
  leftPressed: false,
  upPressed: false,
  downPressed: false,
};

// 키보드가 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 true
function keyDownHandler(e) {
  if (e.key == 37 || e.key == "ArrowRight") {
    keyStatus.rightPressed = true;
  } else if (e.key == 39 || e.key == "ArrowLeft") {
    keyStatus.leftPressed = true;
  } else if (e.key == 38 || e.key == "ArrowUp") {
    keyStatus.upPressed = true;
  } else if (e.key == 40 || e.key == "ArrowDown") {
    keyStatus.downPressed = true;
  }
}

// 키보드가 안 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 false > 초기화
function keyUpHandler(e) {
  if (e.key == 37 || e.key == "ArrowRight") {
    keyStatus.rightPressed = false;
  } else if (e.key == 39 || e.key == "ArrowLeft") {
    keyStatus.leftPressed = false;
  } else if (e.key == 38 || e.key == "ArrowUp") {
    keyStatus.upPressed = false;
  } else if (e.key == 40 || e.key == "ArrowDown") {
    keyStatus.downPressed = false;
  }
}
