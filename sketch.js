const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; //namespacing

var myEngine;
var myWorld;
var box1, box2;
var ground;

function setup()
{
  var canvas=createCanvas(1200,400);

  myEngine = Engine.create(); //step.1 Create an engine that has all the rules of physics
  myWorld = myEngine.world; //step.2 Create a physical world using engine

  ground = new Ground(600, 390, 1200, 20);
  box1 = new Box(200, 200, 50, 50);
  box2 = new Box(230, 50, 70, 90);
}

function draw()
{
  background("black");

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
}
