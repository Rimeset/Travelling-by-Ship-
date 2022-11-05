var sea,ship;
var seaImg,shipImg;

var o1, p1Img;
var o2, p2Img;
var o3, p3Img;

function preload(){

 seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");

p1Img = loadImage("sea2.png");
p2Img = loadImage("sea3.png");
p3Img = loadImage("sea4.png");

}

function setup(){
  createCanvas(400,400);

  // Moving background
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale=1;

  ship = createSprite(250,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale=0.6;

}

function draw() {
  background(rgb(85, 206, 255));
  drawSprites();

  sea.velocityX=2;

  if(keyDown("space")){
    ship.destroy();

    o1 = createSprite(200,200);
    o1.addImage(p1Img);
    o1.scale=0.7;

    o1.velocityX=2;

    ship = createSprite(250,150,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale=0.4;

  }

  if(keyDown("enter")){
    background(rgb(85, 206, 255));

   ship.destroy();
  
   o2 = createSprite(200,200);
   o2.addImage(p2Img);
   o2.scale=1;
 
   o2.velocityX=2;

   ship = createSprite(250,150,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale=0.6;

  }

  if(keyDown("a")){
    ship.destroy();
  
   o3 = createSprite(200,200);
   o3.addImage(p3Img);
   o3.scale=0.4;
 
   o3.velocityX=2;

   ship = createSprite(250,190,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale=0.5;

  }
}
