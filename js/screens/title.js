game.TitleScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		this.alwaysUpdate = true;
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
		me.game.world.addChild(new game.TitleScreen.playButton(100, 100, {image: "playButton", spritewidth: 256,spriteheight: 128}));
		me.game.world.addChild(new game.TitleScreen.creditButton(100, 515, {image: "creditsButton", spritewidth: 256,spriteheight: 128}));
		me.game.world.addChild(new game.TitleScreen.instructionsButton(515, 100, {image: "instructionsButton", spritewidth: 256,spriteheight: 128}));
		
	}
});

game.TitleScreen.playButton = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.collidable = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("playButton"), 256, 128);
			//add Shape in MelonJS 1.0.0 for the collision box
			this.rect = new me.Rect(this.pos, 256, 128);
			this.addShape(this.rect);
		},

		update : function () {
			if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
				this.keyLock = true;
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
	
game.TitleScreen.creditButton = me.ObjectEntity.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = true;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("creditsButton"), 256, 128);
		//add Shape in MelonJS 1.0.0 for the collision box
		this.rect = new me.Rect(this.pos, 256, 128);
		this.addShape(this.rect);
	},

	update : function () {
			
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			me.state.change(me.state.CREDITS);
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

game.TitleScreen.instructionsButton = me.ObjectEntity.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = true;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("instructionsButton"), 256, 128);
		//add Shape in MelonJS 1.0.0 for the collision box
		this.rect = new me.Rect(this.pos, 256, 128);
		this.addShape(this.rect);
	},

	update : function () {
			
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			me.state.change(me.state.SETTINGS);
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