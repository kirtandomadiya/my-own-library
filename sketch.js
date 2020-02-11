
var fixedRect , movingRect;
var gameobject1,gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 80, 50);
  movingRect=createSprite(500,300,50,80);
  gameobject1=createSprite(250,150,25,90);
  gameobject1.shapeColor="grey";
  gameobject1.velocityY=5;
  gameobject2=createSprite(250,250,90,25);
  gameobject2.shapeColor = "purple";
  gameobject2.velocityY=-4;
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}


function draw() {
  background(255,0,0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


if (isTouching(movingRect,gameobject2)){
  gameobject2.shapeColor="purple";
  movingRect.shapeColor="pink";

}
else{
  movingRect.shapeColor="yellow";
  gameobject2.shapeColor = "black";

}
bounceOff(gameobject2,gameobject1);
  drawSprites();
}
