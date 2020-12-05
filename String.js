  
class String {
    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 500,
            stiffness: 0.08
        }

        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.string);

    }

    display(){

        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }
    }
    