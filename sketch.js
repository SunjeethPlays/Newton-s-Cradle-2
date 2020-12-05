
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var string1, string2 , string3, string4, string5;
var roof;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400,100,600,50);

	ground = new Roof (400,775,800,50);

	bobObject1 = new Pendulum (300,500,50,50);
	string1 = new String (bobObject1.body,{x:200,y:100});

	bobObject2 = new Pendulum (350,500,50,50);
	string2 = new String (bobObject2.body,{x:300,y:100});

	bobObject3 = new Pendulum (400,500,50,50);
	string3 = new String (bobObject3.body,{x:400,y:100});

	bobObject4 = new Pendulum (450,500,50,50);
	string4 = new String (bobObject4.body,{x:500,y:100});

	bobObject5 = new Pendulum (500,500,50,50);
	string5 = new String (bobObject5.body,{x:600,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  Engine.update(engine);

  roof.display();

  ground.display();

  bobObject1.display();
  string1.display();

  bobObject2.display();
  string2.display();

  bobObject3.display();
  string3.display();

  bobObject4.display();
  string4.display();

  bobObject5.display();
  string5.display();

  mouseDragged();

  drawSprites();
 
  textSize(30);
  fill("black");
  text("Press Up Arrow To Lift The Pendulum", 150, 30);
  text("Press Down Arrow To Release The Pendulum", 100, 60);
}

function mouseDragged() {

Matter.Body.setPosition(bobObject1.body,{x:mouseX, y:mouseY});
  
}

