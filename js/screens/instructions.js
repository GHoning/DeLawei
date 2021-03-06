game.InstructionsScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		this.alwaysUpdate = true;
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
		me.game.world.addChild(new game.InstructionsScreen.menuButton(100, 100, {image: "menuButton", spritewidth: 256,spriteheight: 128}));
	}
});

game.InstructionsScreen.menuButton = me.ObjectEntity.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = false;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("menuButton"), 256, 128);
		//add Shape in MelonJS 1.0.0 for the collision box
		this.rect = new me.Rect(this.pos, 256, 128);
		this.addShape(this.rect);
	},

	update : function () {
			
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			me.state.change(me.state.MENU);
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