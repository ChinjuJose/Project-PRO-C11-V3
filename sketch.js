var player, playerRunning;
var path, pathImage;
var leftBoundary, rightBoundary;

function preload(){
  playerRunning = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  player = createSprite(200,350,20,20);
  player.addAnimation("pr",playerRunning);
  player.scale = 0.08;

  leftBoundary = createSprite(10,0,10,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(390,0,10,800);
  rightBoundary.visible = false;
}

function draw() {
  background(220);
  drawSprites();

  if(path.y>400){
    path.y = height/4;
  }
  player.x = mouseX;
  player.collide(leftBoundary);
  player.collide(rightBoundary);

}
