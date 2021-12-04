const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, ground1, ground2;
var ball;


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.3,
    isStatic: false,
    friction: 0,
    density: 1.2
  }

  ellipseMode(RADIUS);
  ball = Bodies.circle(100, 360, 10, ball_options);
  World.add(world, ball);


  rectMode(CENTER);
  ground = new Ground(300, 380, 600, 10);
  ground1 = new Ground(400, 320, 10, 100); 
  ground2 = new Ground(500, 320, 10, 100); 


  
}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();

  ellipse(ball.position.x, ball.position.y, 10);

  if(keyCode === UP_ARROW)
  {
    Force(0.06);
  }
  else
  {
    Force(0);
  }

}

function Force(char)
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:char, y:0});
}