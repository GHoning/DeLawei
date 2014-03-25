game.InstructionsScreen = me.ScreenObject.extend({

	init: function() {
		this.parent(true);
	},
	
	onResetEvent: function() {
		this.alwaysUpdate = true;
		me.game.add(new game.InstructionsScreen.menuButton(100, 100, {imgage: "menuButton", spritewidth: 580,spriteheight: 197}));
	},
	
	update: function() {
		
		return true;
	},
	
	onDestroyEvent: function() {
		
	},
	
	draw: function() {
		
	}
	
});

game.InstructionsScreen.menuButton = me.ObjectEntity.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = true;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("menuButton"), 580, 197);
	},

	update : function () {
			
		if (this.containsPoint(me.input.mouse.pos.x, me.input.mouse.pos.y) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
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