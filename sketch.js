
function preload(){
 player1_img=loadImage("first player.png")
 player2_img=loadImage("second player.png")
 background_img=loadImage("background.jpg")

obstacle1_img=loadImage("bomb.png");
obstacle2_img=loadImage("table.png");

}

function setup(){
  createCanvas(1000,600);

  ground = createSprite(500,300,1200,800);
  ground.addImage ("background",background_img);
  ground.velocityX = -3
  ground.scale = 3.5


  player2 = createSprite(100,500,50,10);
  player2.addImage("player2",player2_img) ;
  player2.scale = 1.2

  invisibleground= createSprite(500,520,1200,2);
 // invisibleground.visible = false;
  
}

function draw(){
  background(background_img);
 
  if(ground.x<0){
    ground.x = ground.width/5
 }

 if(keyDown("space")){
  player2.VelocityY = -7
 }  
 player2.velocityY+=0.8

 player2.collide(invisibleground)

  obstacle1()
  obstacle2()
drawSprites()
}
function obstacle1(){
if(frameCount%120==0){
  var obstacle = createSprite(900,500,10,10)
  obstacle.addImage(obstacle1_img)
  obstacle.velocityX = -3
  obstacle.scale = 0.5
  obstacle.lifetime = 300  
}
}
function obstacle2(){
  if(frameCount%150==0){
    var obstacle = createSprite(900,500,10,10)
    obstacle.addImage(obstacle2_img)
    obstacle.velocityX = -3
    obstacle.scale = 0.2
    obstacle.lifetime = 300  
  }
  }