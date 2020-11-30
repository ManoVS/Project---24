
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  paperBall = new paper(100,100,15);
  dust3 = new dustbin(130,70,15,90);
  dust2 = new dustbin(90,140,15,90);
  dust1 = new dustbin(270,320,170,15);

	Ground = new ground(400,650,2035563,10);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

  paperBall.display();
  Ground.display();
  dust1.display();
  dust2.display();
  dust3.display();

  keyDown();
  drawSprites();
 
}

function keyDown(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85, y : -85})
  }
}

