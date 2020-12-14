var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var play=1;
var end=0;
var gamestate=1;
var ground;
var rock,rocki,rockGroup;
var bananai;
var banana,bananaGroup;
var survivalTime;
var mon;
var backgroundi;
var jungle;
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

 mon=loadAnimation("sprite_3.png");
  obstaceImage = loadImage("obstacle.png");
rocki=loadImage("obstacle.png");
 bananai=loadImage("banana.png") ;
//backgroundi=loadImage("jungle.jpg;");
}



function setup() {
  createCanvas(500, 500);
  ground = createSprite(250, 470, 1050, 20)
  monkey = createSprite(60, 420, 20, 20)
  //jungle=createSprite(250,250,20,20);
 
  monkey.addAnimation("running", monkey_running)
  monkey.addAnimation("collided",mon)
  monkey.scale = .15;
bananaGroup=new Group();
rockGroup=new Group();
}


function draw() {
  background(2)
  
   //jungle.addImage(backgroundi);
  if(gamestate===play) {

    if (keyDown("space")&& monkey.y===418 ) {
     monkey.velocityY=-18;  
} 
    survivalTime=Math.ceil(frameCount/100)
      monkey.velocityY =monkey.velocityY +0.6;
     if(monkey.isTouching(rockGroup)) {
    
    monkey.velocityY=0;   
    rockGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);  
    rockGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);  
    gamestate=end;
    } 
   food();
  enemy(); 
  }
 else if(gamestate===end){
 monkey.changeAnimation("collided",mon)        
         }
//monkey.debug=true;
  monkey.setCollider("circle",0,0,280)
 monkey.collide(ground);
  

  stroke("white");
  textSize(20);
  fill("white");
 text("score:"+score,385,50);
   stroke("white");
  textSize(20);
  fill("white");
  
  text("Survivaltime :"+survivalTime,100,50)
   ground.velocityX = -3;  
     if (ground.x < 0) {
    ground.x = ground.width / 2;
  }   

  
//

  
  drawSprites();
  console.log(gamestate)
  
 //monkey.collide(rockGroup)

}
 function food(){
 if(frameCount%90===0) {
  banana=createSprite(500,200,12,12)  ;
  banana.addImage(bananai) ;
   banana.scale=.1;
    banana.velocityX=-5;
   banana.lifetime=400;
   banana.y=Math.round(random(120,200))
    bananaGroup.add(banana);
  }
   if(monkey.isTouching(bananaGroup))  {
     bananaGroup.destroyEach();
     score=score+1;
   }
 }
function enemy()
  {
    if(frameCount%130===0){
  rock=createSprite(433,434,12,12) 
  rock.addImage(rocki)
      //rock.debug=true;
      rock.setCollider("circle",0,0,190)
   rock.scale=.2; 
    rock.lifetime=300;
      rock.velocityX=-5;
      rockGroup.add(rock);

    }   
    
    
    
    
   
    
    
  }
  
