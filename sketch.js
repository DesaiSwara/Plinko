const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events

var ground;
var division=[];
var particle=[];
var plinko=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for (var k=0;k<=innerWidth;k=k+80) {
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
  }

  for (var j =40 ;j <=width;j=j+50) {
    plinko.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinko.push(new Plinko(j,175))
  }

  for (var j =40 ;j <=width;j=j+50) {
    plinko.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinko.push(new Plinko(j,375))
  }

  ground=new Ground(width/2,height,width,20);
 
}

function draw() {
  background(0); 
  
  ground.display();

  for (var j = 0;j < plinko.length;j++) {
    plinko[j].display();
  }

  if (frameCount % 60===0) {
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for (var i = 0;i < particle.length;i++) {
    particle[i].display();
  }

  for (var k = 0;k < division.length;k++) {
    division[k].display();
  }

  drawSprites();
}