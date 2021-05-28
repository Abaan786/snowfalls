class Flake {
constructor (x,y){
var option = {
    friction:0.001,
    density:0.1
}

this.flake = Bodies.circle(x,y,5,option);
this.radius = 5
World.add(world,this.flake)

}


showSnow() {
    fill("takeblue");
    ellipseMode (CENTER);
    ellipse (this.flake.position.x,this.flake.position.y,this.radius,this.radius)

}
}