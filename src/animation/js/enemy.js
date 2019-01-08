const images = {};

function loadEnemy(name) {
    let randomNum = Math.round(0.5 + Math.random() * 3);
    images[name] = new Image();
    images[name].src = `img/${name}/${name}${randomNum}.png`;
}

loadEnemy('head');
loadEnemy('leftArm');
loadEnemy('leftLeg');
loadEnemy('rightLeg');
loadEnemy('torso')
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
