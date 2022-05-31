const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var boat
var balls=[]
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  boat=new Boat(width-79,height-60,170,170,-80)
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
for(var I=0;I<balls.length;I++){
  showCannonBalls(balls[I])
}

boat.display()
  cannon.display();
  
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall=new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall)
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {

    balls[balls.length-1].shoot();
  }
}
function showCannonBalls(ball){
if(ball){
  ball.display()
}
}