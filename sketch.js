var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var ob1img, ob2img, ob3img, ob4img, ob5img, ob6img

var score=0
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 ob1img=loadImage("obstacle1.png")
 ob2img=loadImage("obstacle2.png")
 ob3img=loadImage("obstacle3.png")
 ob4img=loadImage("obstacle4.png")
 ob5img=loadImage("obstacle5.png")
 ob6img=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  score=score+Math.round(frameCount/60)
  text("score :"+score,500,50)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles()
{
  if (frameCount % 60== 0)
  {
    obstacle = createSprite(600,165,10,40)
    obstacle.velocityX= -6
    var r=Math.round(random(1,6))
    switch(r)
    {
      case 1:obstacle.addImage(ob1img);break;
      case 2:obstacle.addImage(ob2img);break;
      case 3:obstacle.addImage(ob3img);break;
      case 4:obstacle.addImage(ob4img);break;
      case 5:obstacle.addImage(ob5img);break;
      case 6:obstacle.addImage(ob6img);break;
            
      
    }
    obstacle.scale=0.5
    obstacle.lifetime=100
  }
}