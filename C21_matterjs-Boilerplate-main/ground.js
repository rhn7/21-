class Ground{
    constructor(x,y,width,height){
     var options = {
        isStatic:true
     }  
     this.body = Bodies.rectangle(x,y,width,height,options) 
     World.add(world,this.body)
     this.w = width
     this.h = height
    }
    show(){
        push()
        fill("yellow")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }
}
