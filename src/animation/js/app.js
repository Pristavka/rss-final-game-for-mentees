const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const sprite = new Image();
let lastSpritePos = 1100;
let spriteWidth = 100;
const sprite2 = new Image();
let curSprite = sprite;
let x = 0;
let dx = 300;
let tickCount = 0;

sprite.src = './img/sprites/IronMan3.png';
sprite2.src = './img/sprites/ironAttack.png';
sprite.onload = function() {
    setTimeout(() => {
        start();
    }, 5);
};

function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy(700,385);
    ctx.drawImage(sprite2, 600, 0, spriteWidth, 120, 300, 350, spriteWidth, 120);
    curSprite = sprite;
    spriteWidth = 100;
    lastSpritePos = 1100;
    x = 0;
    dx = 300;
}

function drawPerson() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy(700, 385);
    x = (x >= lastSpritePos ? 0 : x + spriteWidth);
    ctx.drawImage(curSprite, x, 0, spriteWidth, 120, dx, 350, spriteWidth, 120);
}

function drawEllipse(cx, cy, width, height) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - height / 2);
    ctx.bezierCurveTo(
        cx + width/2, cy - height / 2,
        cx + width/2, cy + height / 2,
        cx, cy + height / 2
    );
    ctx.bezierCurveTo(
        cx - width / 2, cy + height / 2,
        cx - width / 2, cy - height / 2,
        cx, cy - height / 2
    );
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#323299';
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
