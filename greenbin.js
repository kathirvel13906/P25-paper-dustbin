class Bin {
    constructor() {
        var options ={
            isStatic:true
        }

        //this.body = Bodies.rectangle(1200,555,230,245,options);
        //this.width = 230;
        //this.height = 245;
        this.image = loadImage("dustbingreen.png");

        //World.add(world, this.body);
    }

    display() {
        //var pos = this.body.position;
        //var angle = this.body.angle;

        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 1200,555, 230, 245);
        //pop();
    }
}