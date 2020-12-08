var ground, backgroundImg ;

var monkey, player_running ;

var banana, bananaImg;

var obstacle, obstacleImg,  obstacleGroup ;  


function preload(){
  
  backgroundImg = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);   
  
 // monkey = createSprite(500,380,10,10); 
 // monkey.addAnimation("running",player_running);
 // monkey.velocityX = 3;
  
  ground = createSprite(200,400,20,20);
  ground.addImage("ground",backgroundImg); 
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  
  
}

function draw() {
  background(220);
  
  
  
  drawSprites();
}

function spawnobstacles(){
  if(frameCount % 300 === 0){
  var stone = createSprite(400,345 ,40,10);
  stone.scale = 0.15;
  stone.addAnimation("stone.png");
  stone.velocityX = -5;
  stone.lifetime = 80; 
  
  //adjust the depth
  stone.depth = monkey.depth;
  
  obstanclesGroup.add(stone);
 }
}


