class Box{
     constructor(x,y){

        this.bo=Bodies.rectangle(x,y,50,50)

        World.add(wo,this.bo)

    }


    display(){

        var pos=this.bo.position

        rectMode(CENTER)
        rect(pos.x,pos.y,50,50)
    }





}