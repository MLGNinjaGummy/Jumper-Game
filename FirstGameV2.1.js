function jumper() {
    this.x = 0;
    this.y = 0;
    this.gravity = 0.5; // the force of gravity
    this.lift = -10; //opposing force of gravity
    this.velocity = 0; //speed of gravity force
    //Function to let things be displayed and put what jumper would look like
    this.show = function() {
        fill(255,0,0);
        ellipse(this.x,this.y,50,50);
    }
    //Build a function called up that will take the initial velocity and modify by opposing gravity
    this.up = function() {
        this.velocity += this.lift;
    }
    //Update the jumper continuously
    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9 //Air resistance
        //Prevent the jumper from leaving the ground
        if (this.y > h) {
            this.y = h;
            this.velocity = 0;
        }
        //Prevent  the jumper from leaving the screen
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}