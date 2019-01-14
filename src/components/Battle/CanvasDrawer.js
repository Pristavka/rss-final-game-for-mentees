function CanvasDrawer(canvas) {
  this.canvas = canvas;
  const ctx = this.canvas.getContext('2d');
  const ironManWalk = new Image();
  const ironManPunch = new Image();
  const ironHeal = new Image();
  const images = {};
  let curSprite = ironManPunch;
  let lastSpritePos = 1100;
  let spriteWidth = 150;
  let xCoordinate = 0;
  let dx = 300;
  let tickCount = 0;
  ironManWalk.src = '../images/sprites/IronMan3.png';
  ironManPunch.src = '../images/sprites/IronAttack.png';
  ironHeal.src = '../images/sprites/heal.png';
  const that = this;
  const fireArm = new Image();
  const fireHead = new Image();
  fireArm.src = './img/attack/heavenFire.png';
  fireHead.src = './img/attack/fireHead.png';
  let enemyBeamX = 875;
  let enemyBeamY = -25;

  function clear() {
    ctx.clearRect(0, 0, 1200, 580);
  }

  function loadEnemy(name) {
    const randomNum = () => Math.round(0.5 + Math.random() * 3);
    images[name] = new Image();
    images[name].src = `../images/${name}/${name}${randomNum()}.png`;
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
      setTimeout(() => {
        start();
      }, 0);
      throw new Error('kostyl.js');
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

  function healEnd() {
    if (xCoordinate >= 706) {
      xCoordinate = 0;
      start();
      throw new Error('kostyl.js');
    }
  }

  this.ironHeal = function () {
    if (tickCount > 4) {
      clear();
      drawEnemy(700, 385);
      xCoordinate = (xCoordinate >= 706 ? 0 : xCoordinate + 118);
      ctx.drawImage(ironHeal, xCoordinate, 0, 118, 91, dx, 375, 118, 91);
      tickCount = 0;
      healEnd();
    }
    tickCount += 1;
    requestAnimationFrame(that.ironHeal);
  }

  function enemyFire() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy(700,385);
    ctx.drawImage(sprite2, 600, 0, spriteWidth, 120, 300, 350, spriteWidth, 120);
    ctx.drawImage(fireHead, 920, -20);
    ctx.drawImage(fireArm, enemyBeamX, enemyBeamY);
    enemyBeamX = (enemyBeamX <=285? 284 : enemyBeamX -= 20);
    enemyBeamY = (enemyBeamY >= 295 ? 296 : enemyBeamY +=10);
    fireEnd();
    requestAnimationFrame(enemyFire)
  }

  function fireEnd() {
    if (enemyBeamX <= 285) {
      enemyBeamX = 875;
      enemyBeamY = -25;
      start();
      throw new Error('hello kitty');          
    }
  }

  this.hitPlayer = function() {
    enemyFire()
  }

  ironManPunch.onload = function() {
    setTimeout(() => {
      start();
    }, 100);
  };
}

export default CanvasDrawer;
