game.MenuScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
		me.game.world.addChild(new game.MenuScreen.playButton(100, 100, {image: "playButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.creditButton(100, 515, {image: "creditsButton", spriteWidth: 256,spriteHeight: 128}));
		me.game.world.addChild(new game.MenuScreen.instructionsButton(515, 100, {image: "instructionsButton", spriteWidth: 256,spriteHeight: 128}));
		//me.game.world.addChild(new game.MenuScreen.imageTest(515, 515, "playButton", 256, 128));
	}
});

game.MenuScreen.playButton = game.UIButton.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
		},

		onClick : function () {
			//TODO addStateChange
			console.log("start");
		}
	});
	
/*game.MenuScreen.imageTest = game.UIImage.extend({
	init : function (x, y, image, spriteWidth, spriteHeight) {
		this.parent(x, y, image, spriteWidth, spriteHeight);
	}
});*/
	
game.MenuScreen.creditButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		//TODO addStateChange
		console.log("credits");
	}
});

game.MenuScreen.instructionsButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},
	
	onClick : function () {
		//TODO addStateChange
		console.log("instructions");
	}
});