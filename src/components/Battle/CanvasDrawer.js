class CanvasDrawer {
  constructor(canvas) {
    this.canvas = canvas;
    const ctx = this.canvas.getContext('2d');
    const ironManWalk = new Image();
    const ironManPunch = new Image();
    let curSprite = ironManWalk;
    let lastSpritePos = 1100;
    let spriteWidth = 100;
    let xCoordinate = 0;
    let dx = 300;
    let tickCount = 0;
    ironManWalk.src = '../images/sprites/IronMan3.png';
    ironManWalk.onload = function() {
        ctx.drawImage(ironManWalk, 0, 0);
    }
  }


}