function CanvasDrawer(canvas) {
  this.canvas = canvas;
  const ctx = this.canvas.getContext('2d');
  const ironManWalk = new Image();
  const ironManPunch = new Image();
  const ironHeal = new Image();
  const fireArm = new Image();
  const fireHead = new Image();
  const punchSound = new Audio();
  const healSound = new Audio();
  const enemyShotSound = new Audio();
  const images = {};
  let curSprite = ironManPunch;
  let lastSpritePos = 1100;
  let spriteWidth = 150;
  let xCoordinate = 0;
  let dx = 300;
  let tickCountIronMan = 0;
  let tickCountEnemy = 0;
  let enemyBeamX = 875;
  let enemyBeamY = -25;
  let breathDir = 1;
  let breathAmt = 0;
  ironManWalk.src = '../images/sprites/IronMan3.png';
  ironManPunch.src = '../images/sprites/IronAttack.png';
  ironHeal.src = '../images/sprites/heal.png';
  fireArm.src = './images/enemyAttack/heavenFire.png';
  fireHead.src = './images/enemyAttack/fireHead.png';
  punchSound.src = '../sound/ironPunch.mp3';
  healSound.src = '../sound/heal.mp3';
  enemyShotSound.src = '../sound/enemyBeam.mp3';
  const that = this;

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
    ctx.drawImage(images['waist'], enemyX + 120, enemyY - 45);
    ctx.drawImage(images['rightLeg'], enemyX + 85, enemyY - 35);
    ctx.drawImage(images['leftLeg'], enemyX + 163, enemyY - 25);
    ctx.drawImage(images['rightArm'], enemyX + 60, enemyY - 92 + breathAmt);
    ctx.drawImage(images['torso'], enemyX + 109, enemyY - 75 + breathAmt);
    ctx.drawImage(images['leftArm'], enemyX + 160, enemyY - 110 + breathAmt);
    ctx.drawImage(images['head'], enemyX + 85, enemyY - 115 + breathAmt);
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

  function updateBreath() {
    if (breathDir === 1) {  // breath in
      breathAmt -= 0.1;
      if (breathAmt < -1.5) {
        breathDir = -1;
      }
    } else {  // breath out
      breathAmt += 0.1;
      if (breathAmt > 1.5) {
        breathDir = 1;
      }
    }
  }

  function animatedEnemy() {
    if (tickCountEnemy > 4) {
      updateBreath();
      ctx.clearRect(800, 300, canvas.width, canvas.height);
      drawEnemy(700, 385);
      tickCountEnemy = 0;
    }
    tickCountEnemy += 1;
    requestAnimationFrame(animatedEnemy);
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
      punchSound.play();
      throw new Error('kostyl.js');
    }
  }

  this.ironPunch = function () {
    if (tickCountIronMan > 4) {
      attackOn(700);
      walk();
      tickCountIronMan = 0;
      attackEnd();
    }
    tickCountIronMan += 1;
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
    if (tickCountIronMan > 4) {
      clear();
      drawEnemy(700, 385);
      xCoordinate = (xCoordinate >= 706 ? 0 : xCoordinate + 118);
      ctx.drawImage(ironHeal, xCoordinate, 0, 118, 91, dx, 375, 118, 91);
      tickCountIronMan = 0;
      healSound.play();
      healEnd();
    }
    tickCountIronMan += 1;
    requestAnimationFrame(that.ironHeal);
  }

  function fireEnd() {
    if (enemyBeamX <= 285) {
      enemyBeamX = 875;
      enemyBeamY = -25;
      start();
      throw new Error('kostyl.js');          
    }
  }

  function enemyFire() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy(660, 385);
    ctx.drawImage(ironManPunch, 600, 0, spriteWidth, 120, 300, 350, spriteWidth, 120);
    ctx.drawImage(fireHead, 920, -20);
    ctx.drawImage(fireArm, enemyBeamX, enemyBeamY);
    enemyBeamX = (enemyBeamX <= 285 ? 284 : enemyBeamX -= 20);
    enemyBeamY = (enemyBeamY >= 295 ? 296 : enemyBeamY += 10);
    enemyShotSound.play();
    fireEnd();
    requestAnimationFrame(enemyFire)
  }

  this.hitPlayer = function() {
    enemyFire();
  }

  ironManPunch.onload = function() {
    setTimeout(() => {
      start();
      animatedEnemy();
    }, 100);
  };
}

export default CanvasDrawer;
