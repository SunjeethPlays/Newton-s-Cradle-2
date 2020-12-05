class Pendulum {

    constructor (x,y,radius) {

        var options = {
            restitution : 1,
            density:1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }

    display () {

        var pos = this.body.position;

        push();
        fill(251,1,254);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
        
    }
}