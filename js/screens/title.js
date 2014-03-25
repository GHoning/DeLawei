game.TitleScreen = me.ScreenObject.extend({

	init: function() {
		this.parent(true);
	},
	
	onResetEvent: function() {
		this.alwaysUpdate = true;
		me.input.bindKey(me.input.KEY.ENTER, "enter");
		me.game.add(new game.TitleScreen.playButton(100, 100, {image: "playButton", spritewidth: 415,spriteheight: 185}));
		me.game.add(new game.TitleScreen.creditButton(100, 515, {imgage: "creditButton", spritewidth: 415,spriteheight: 185}));
		me.game.add(new game.TitleScreen.instructionsButton(515, 100, {imgage: "InstructionsButton", spritewidth: 415,spriteheight: 185}));
		
	},
	
	update: function() {
		
		return true;
	},
	
	onDestroyEvent: function() {
		
	},
	
	draw: function() {
		
	}
	
});

game.TitleScreen.playButton = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("playButton"), 415, 185);
		},

		update : function () {
			
			if (this.containsPoint(me.input.mouse.pos.x, me.input.mouse.pos.y) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
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
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("creditsButton"), 415, 185);
	},

	update : function () {
			
		if (this.containsPoint(me.input.mouse.pos.x, me.input.mouse.pos.y) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
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
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("instructionsButton"), 415, 185);
	},

	update : function () {
			
		if (this.containsPoint(me.input.mouse.pos.x, me.input.mouse.pos.y) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			me.state.change(me.state.INSTRUCTIONS);
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