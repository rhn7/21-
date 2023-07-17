const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  topWall = new Ground(200,10,760,20)
  leftWall = new Ground(10,200,20,400)
  rightWall = new Ground(590,200,20,400)
  bottomWall = new Ground(200,390,760,20)
  wall1 = new Ground(350,305,20,150)
  wall2 = new Ground(500,305,20,150)
  ball = Bodies.circle(100,100,10,11)
  World.add(world,ball)
  button1 = createImg("right.png")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hforce)
  button2 = createImg("up.png")
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  topWall.show();
  leftWall.show();
  rightWall.show();
  bottomWall.show();
  wall1.show()
  wall2.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}