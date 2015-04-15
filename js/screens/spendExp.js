game.SpendExp = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('EXP-screen')), -10); // TODO
        
        
         me.game.world.addChild(new (me.Renderable.extend({
            init: function(){
                    this._super(me.Renderable, 'init', [270, 240, 300, 50]);
                    this.font = new me.Font("Comic", 46, "yellow");
            },
            
            draw: function(renderer){
                this.font.draw(renderer.getContext(), "SPEND", this.pos.x, this.pos.y);
            }
            
        })));
        
   },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {

    }
});