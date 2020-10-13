class Particle
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			isStatic:false
        }
			
        this.r=r;
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
	    this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
		
	}
	display(){       
            var pos=this.body.position;		
            var angle=this.body.angle;

			push()
            translate(pos.x, pos.y);
            rotate(angle);
            
	        noStroke();
			fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0,0,this.r,this.r);
			pop();
			
	}
}