import { update, render } from "./game";

class WindowManager {
  constructor() {
    this.canvas = document.getElementById("screen");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.lastTime = 0;
    this.deltaTime = 0;

    this.init();
  }

  init() {
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
  }

  gameLoop(currentTime) {
    if (this.lastTime > 0) {
      this.deltaTime = (currentTime - this.lastTime) / 1000;
      if (this.deltaTime > 0.1) this.deltaTime = 0.1;
    }

    this.lastTime = currentTime;

    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.width, this.height);

    update(this.deltaTime);
    render();

    requestAnimationFrame((time) => this.gameLoop(time));
  }
}

window.addEventListener("load", () => {
  const root = new WindowManager();
  requestAnimationFrame((time) => root.gameLoop(time));
});
