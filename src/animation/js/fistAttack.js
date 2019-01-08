function fistAttack() {
    if (tickCount > 4) {
        attackOn(700);
        drawPerson();
        tickCount = 0;
        attackEnd();
    }
    tickCount++;
    requestAnimationFrame(fistAttack);
}

function attackOn(position) {
    if (dx >= position) {
        curSprite = sprite2;
        spriteWidth = 150;
        lastSpritePos = 600;
    }
    else dx+=20;
}

function attackEnd() {
    if (curSprite === sprite2 && x === lastSpritePos) {
        ctx.drawImage(sprite, 0, 0, 100, 120, 350, 100, 120);       
    }
}

document.querySelector('#fist').addEventListener('click', function(){
fistAttack();
});

document.querySelector('#startPos').addEventListener('click', function() {
start();
});
