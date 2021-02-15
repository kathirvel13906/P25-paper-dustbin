const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj;
var newBinGreen;
var groundObject;
var paper;
var world;

function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
  groundObject=new ground(width/2,670,width,20);
  dustbinObj=new dustbin(1200,650);
  newBinGreen = new Bin();
	paper = new Paper(400,200,80,80);

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(230);

  Engine.update(engine);

  if(keyDown("up_arrow")) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 185, y: -130});
  }

  groundObject.display();
  dustbinObj.display();
  newBinGreen.display();
  paper.display();
}

