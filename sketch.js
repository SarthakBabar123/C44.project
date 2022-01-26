var backGroundImg 
var knight, knightImg;
var enemy ,enemyImg;

function preload(){
  backGroundImg = loadImage("Background.png");
  knightImg = loadImage("knightAnimaton1.png")
  enemyImg = loadImage("enemy.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  knight = createSprite(windowWidth-1200, 520, 50, 50);
  knight.addImage(knightImg);
  knight.scale = 3.5;


enemy = createSprite(windowWidth-100, 560, 50, 50);
enemy.addImage(enemyImg);
}

function draw() {
  background(backGroundImg);  
  drawSprites();
}