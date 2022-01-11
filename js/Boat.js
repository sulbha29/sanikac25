class Boat{
    constructor(x,y,width,height,boatpos){
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width ;
        this.height = height ;
        this.image = loadImage("assets/boat.png")
        this.boatposition = boatpos
        World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push ()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image (this.image,0,this.boatposition,this.width,this.height)
        pop ()
      


    }
}