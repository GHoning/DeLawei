game.MenuScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
		me.game.world.addChild(new game.MenuScreen.playButton(100, 100, {image: "playButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.creditButton(100, 515, {image: "creditsButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.instructionsButton(515, 100, {image: "instructionsButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.nhllogo(0, 0, "nhllogo"));
	}
});

game.MenuScreen.playButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		me.state.change(me.state.PLAY);
	},
	
	onHover : function () {
		//do fun hover stuff here console.log("hover");
	}
});
	
game.MenuScreen.creditButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		//TODO addStateChange
		console.log("credits");
	},
	
	onHover : function () {
	
	}
});

game.MenuScreen.instructionsButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},
	
	onClick : function () {
		//TODO addStateChange
		console.log("instructions");
	},
	
	onHover : function () {
	
	}
});

game.MenuScreen.nhllogo = game.UIImage.extend({
	init : function(x, y, image) {
		this.parent(x, y, image);
	},
});