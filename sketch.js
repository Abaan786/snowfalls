const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var snow = []
  var maxsnow
maxsnow = 100

var backgroundImg
var flake 
function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(800,400);
  if(frameCount%150===0){
    for(var i = 0; i< maxsnow;i++){
      snow.push(new Flake(random(0,400), random(0,400)))
    }
  }
}
function preload (){
  backgroundImg = loadImage("snow3.jpg")
}

function draw() {
  Engine.update(engine)
  background(backgroundImg);  
  for(var i = 0;i<maxsnow;i++){
    snow [i].showSnow()
  }
  drawSprites();
}