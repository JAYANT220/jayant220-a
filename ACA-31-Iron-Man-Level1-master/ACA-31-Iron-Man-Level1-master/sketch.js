
var bg, backgroundImg;

function preload() {
  bgImage = loadImage("images/bg.jpg");
  playerImage = loadImage("images/iron.png");

 
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.scale = 2;
  bg.addImage(bgImage);

  player = createSprite(40,550,30,30);
  player.addImage(playerImage);
  player.scale = 0.4;

 
}

function draw() {

  
  if (keyDown("up")){
    player.velocityY = -10;
  }
  if (keyDown("left")) {
    player.x = player.x - 5;
  }
  if (keyDown("right")) {
    player.x = player.x + 5;
  }
  player.velocityY = player.velocityY + 0.5; 
  
 
    
    drawSprites();
   
}

