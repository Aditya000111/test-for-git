class Hammer{
    constructor(x,y,width,height){
        var options = {
           'restitution': 0.5,
           'friction': 1,
           'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var pos=World.mouse;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("grey");
        rect(0, 0, this.width, this.height);
        pop();
      }
}