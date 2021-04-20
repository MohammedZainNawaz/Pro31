const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var plinko1

function setup() {
  createCanvas(480,650);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(240,641,480,15)
  
  plinko1 = new Plinko(200,200,20,20)






}

function draw() {
  background(0);  
  ground.display();
  plinko1.display();
  drawSprites();
}