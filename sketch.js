const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1,d3,d3, ground, paper;

function preload(){

dustbinImage = loadImage("dustbingreen.png");



}
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

d1 = new Dustbin(1300,665,170,20)
d2 = new Dustbin(1205,615,20,120)
d3 = new Dustbin(1395,615,20,120)
ground = new Ground(800,685,1600,20)
paper = new Paper(400,360,50)
  
}


function draw() {
	
	Engine.update(engine);
	  rectMode(CENTER);
  background("white");
  
  d1.display();
  d2.display();
  d3.display()
 ground.display();
 paper.display()
 image(dustbinImage,1185,530,250,150);
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
  
	}
}







