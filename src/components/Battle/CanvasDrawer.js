function CanvasDrawer(canvas) {
  this.canvas = canvas;
  const ctx = this.canvas.getContext('2d');
  const ironManWalk = new Image();
  const ironManPunch = new Image();
  const images = {};
  let curSprite = ironManPunch;
  let lastSpritePos = 1100;
  let spriteWidth = 150;
  let xCoordinate = 0;
  let dx = 300;
  let tickCount = 0;
  ironManWalk.src = '../images/sprites/IronMan3.png';
  ironManPunch.src = '../images/sprites/IronAttack.png';
  const that = this;

  function clear() {
    ctx.clearRect(0, 0, 1200, 580);
  }

  function loadEnemy(name) {
    const randomNum = Math.round(0.5 + Math.random() * 3);
    images[name] = new Image();
    images[name].src = `../images/${name}/${name}${randomNum}.png`;
  }

  loadEnemy('head');
  loadEnemy('leftArm');
  loadEnemy('leftLeg');
  loadEnemy('rightLeg');
  loadEnemy('torso');
  loadEnemy('rightArm');
  loadEnemy('waist');


  function drawEnemy(enemyX, enemyY) {
    ctx.drawImage(images['waist'],    enemyX + 120, enemyY - 45);
    ctx.drawImage(images['rightLeg'], enemyX + 85,  enemyY - 35);
    ctx.drawImage(images['leftLeg'],  enemyX + 163, enemyY - 25);
    ctx.drawImage(images['rightArm'], enemyX + 60,  enemyY - 92);
    ctx.drawImage(images['torso'],    enemyX + 109, enemyY - 75);
    ctx.drawImage(images['leftArm'],  enemyX + 160, enemyY - 110);
    ctx.drawImage(images['head'],     enemyX + 85,  enemyY - 115);
  }

  function start() {
    clear();
    drawEnemy(700, 385);
    ctx.drawImage(ironManPunch, 600, 0, spriteWidth, 120, 300, 350, spriteWidth, 120);
    curSprite = ironManWalk;
    spriteWidth = 100;
    lastSpritePos = 1100;
    xCoordinate = 0;
    dx = 300;
  }

  function walk() {
    clear();
    drawEnemy(700, 385);
    xCoordinate = (xCoordinate >= lastSpritePos ? 0 : xCoordinate + spriteWidth);
    ctx.drawImage(curSprite, xCoordinate, 0, spriteWidth, 120, dx, 350, spriteWidth, 120);
  }

  function attackOn(position) {
    if (dx >= position) {
      curSprite = ironManPunch;
      spriteWidth = 150;
      lastSpritePos = 600;
    } else dx += 20;
  }

  function attackEnd() {
    if (curSprite === ironManPunch && xCoordinate === lastSpritePos) {
      ctx.drawImage(ironManPunch, 0, 0, 100, 120, 350, 100, 120);
    }
  }

  this.ironPunch = function () {
    if (tickCount > 4) {
      attackOn(700);
      walk();
      tickCount = 0;
      attackEnd();
    }
    tickCount += 1;
    requestAnimationFrame(that.ironPunch);
  }

  this.startPosition = function() {
    start();
  }

  ironManPunch.onload = function() {
    setTimeout(() => {
      start();
    }, 15);
  };
}

export default CanvasDrawer;
