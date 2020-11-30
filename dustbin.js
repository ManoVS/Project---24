class dustbin{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y,width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white");
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
      }
    }