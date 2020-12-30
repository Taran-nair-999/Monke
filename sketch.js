var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var ground
var FoodGroup, obstacleGroup
var score, survivalTime

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 215, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400, 250, 900, 10);
  ground.velocityx = -4;
  ground.x = ground.width / 2
  console.log(ground.x);

  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0

}


function draw() {
  background("");

  food();
  rock();
  

  if (keyWentDown("space")) {
    monkey.velocityY = -6;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);

  text("Score= "+score,170,50)
  
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time="+survivalTime,150,100)

  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400, 100, 10, 10)
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage, "banana");
    banana.lifetime = 110;
    banana.scale = 0.1;
    banana.velocityX = -4;

    foodGroup.add(banana);
  }
}

function rock() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 230, 10, 10)
    obstacle.addImage(obstacleImage, "obstacle");
    obstacle.lifetime = 110;
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;

    obstacleGroup.add(obstacle);
  }
}