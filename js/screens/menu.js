game.MenuScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		me.game.world.addChild(new game.MenuScreen.playButton(238, 457, {image: "playButton", spriteWidth: 148,spriteHeight: 54}));
		//me.game.world.addChild(new game.MenuScreen.creditButton(100, 515, {image: "creditsButton", spriteWidth: 256,spriteHeight: 128}));
		//me.game.world.addChild(new game.MenuScreen.nhllogo(0, 0, "nhllogo"));
		me.game.world.addChild(new game.UIImage(0, 0, "startbackground"));
	}
});

game.MenuScreen.playButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		me.state.change(me.state.SCORE);
	},
	
	onHover : function () {
	
	}
});

game.MenuScreen.nhllogo = game.UIImage.extend({
	init : function(x, y, image) {
		this.parent(x, y, image);
	},
});