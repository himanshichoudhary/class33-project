class Snowfall{

constructor(){
    var options={
        isStatic:false,

    }
    this.snowfall = Bodies.rectangle(random(1,800),10,10,10,options);
    World.add(world,this.snowfall);
}
display(){
    imageMode(CENTER);
    image(snow,this.snowfall.position.x,this.snowfall.position.y)
}
}