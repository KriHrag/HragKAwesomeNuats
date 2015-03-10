game.PlayerEntity = me.Entity.extend({
   init: function(x, y, settings){
       this._super(me.Entity, 'init', [x, y, {
               image: "player",
               width: 64,
               height: 64,
               spritewidth: "64", 
               spriteheight: "64",
               getShape: function(){
                   return(new me.Rect(0, 0, 64, 64)).toPolygon();
               }
       }]);
   
       this.body.setVelocity(5, 20);
       
       this.renderable.addAnimation("idle", [78]);
       this.renderable.addAnimation("walk", [117, 118,  119, 120, 121, 122, 123, 124, 125], 80);
   
       this.renderable.setCurrentAnimation("idle");
   },
   
   update:function(delta){
       if(me.input.isKeyPressed("right")){
           //adds to the position of my x by the velocity defined above in 
           //setVelocity() and multiplying it by me.timer.tick
           // and me.timer.tick makes the moovement look smooth
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.renderable.setCurrentAnimation("walk");
            this.flipX(true);
       }
        else if(me.input.isKeyPressed("left")){
        this.flipX(true);
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
        
        //makes mario go left
    }
    else{
        this.body.vel.x = 0;
    }
    
    if (me.input.isKeyPressed("up")) {
    
    this.body.vel.y -= this.body.accel.y * me.timer.tick;
    
}
       
       this.body.update(delta);
       return true;
   }
});

