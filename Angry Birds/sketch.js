
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1;
var g;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;
	hammer1 = new Hammer(400,350,100,20);

	g = new Ground(400,650,800,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	//Engine.Update();
 
  background(0);
  rectMode(CENTER);
  hammer1.display();
  g.display();
  
  drawSprites();
 
}



