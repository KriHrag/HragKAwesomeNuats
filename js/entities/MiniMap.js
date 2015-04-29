game.MiniMap = me.Entity.extend({
   init: function(x, y, settings){
       this._super(me.Entity, "init", [x, y, {
               image: "minimap3", 
               width: 874,
               height: 270,
               spritewidth: "874",
               spriiteheight: "270",
               getShape: function(){
                   return (new me.Rect(0, 0, 874, 270)).toPolygon();
               }
       }]);
   this.floating = true;
   
   } 
});