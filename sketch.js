//namespacing
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en, wo;
var box1;

function setup(){
  createCanvas(400,400);

  //create engine
  en=Engine.create()
  //access the world from engine
  wo=en.world

 box1=new Box(200,10,50,50)

}

function draw(){
  background(0);
 Engine.update(en)

box1.display()

}













