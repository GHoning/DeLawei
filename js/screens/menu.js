game.MenuScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
		me.game.world.addChild(new game.MenuScreen.playButton(100, 100, {image: "playButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.creditButton(100, 515, {image: "creditsButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.nhllogo(0, 0, "nhllogo"));
	}
});

game.MenuScreen.playButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		me.state.change(me.state.INSTRUCTIONS);
	},
	
	onHover : function () {
	
	}
});
	
game.MenuScreen.creditButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		console.log("credits");
		me.state.change(me.state.CREDITS);
	},
	
	onHover : function () {
	
	}
});

game.MenuScreen.nhllogo = game.UIImage.extend({
	init : function(x, y, image) {
		this.parent(x, y, image);
	},
});