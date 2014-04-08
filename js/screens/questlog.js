/**
 *  The games play screen. Used too handle level switches and inventory guffins
 */
game.Questlog = me.ScreenObject.extend({
		
		onResetEvent : function () {
			me.game.world.addChild(new game.Questlog.gameButton(1024 - 256 , 768 - 128, {spritewidth: 256,spriteheight: 128}));
			//place DisplayQuests foreach quest in game.data.quests
			for (var i = 0; i < game.data.quests.length; i++) {
				me.game.world.addChild(new game.Questlog.DisplayQuest(960 , 64 * i, game.data.quests[0].toUpperCase() + "\n"));
			}
		}
	});
	
game.Questlog.gameButton = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("gameButton"), 256, 128);
			//add Shape in MelonJS 1.0.0 for the collision box
			this.rect = new me.Rect(this.pos, 256, 128);
			this.addShape(this.rect);
		},

		update : function () {
			this.imgButton.setAnimationFrame(0);
			
			if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
				me.state.change(me.state.PLAY);
			}

			if (!me.input.isKeyPressed("mouse/touch")) {
				this.keyLock = false;
			}
			
			return true;
		},

		draw : function (context) {
			this.imgButton.draw(context);
		}
	});
	
game.Questlog.DisplayQuest = me.Renderable.extend({
		init : function (x, y, drawtext) {
			this.parent(new me.Vector2d(x, y), 10, 10 );
			this.font = new me.BitmapFont("font", 32);
			this.font.set("right");
			this.textDisplay;
			this.floating = false;
			this.drawtext = drawtext;
		},
		
		update : function () {

		},
		
		draw : function (context){
			this.font.draw(context, this.drawtext, this.pos.x , this.pos.y);
		}
	});