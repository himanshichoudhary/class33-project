const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world ;
var bg;
var snow;
var array = [];

function preload(){
bg = loadImage("snow3.jpg");
snow = loadImage("snow4.webp");

}


function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
}

function draw() {
  background(bg);  
Engine.update(engine);
  

 if(frameCount%5===0){
   array.push(snow = new Snowfall() )
  
 }
 for(var i = 0;i<array.length;i++ ){
   array[i].display();
   
 }


  drawSprites();


}