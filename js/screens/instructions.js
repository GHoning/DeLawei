game.InstructionsScreen = me.ScreenObject.extend({
	onResetEvent : function () {
		//me.game.world is the main container for the game. And the 'add' is replaced by addChild
			
		
		me.game.world.addChild(new game.InstructionsScreen.playButton(250, 557, {image: "playButton", spriteWidth: 148,spriteHeight: 54}),2001);
		me.game.world.addChild(new game.UIImage(0, 0, "introductiescherm"), 2000);
	}
});
	
game.InstructionsScreen.playButton = game.UIButton.extend({
	init : function (x, y, settings) {
		this.parent(x, y, settings);
	},

	onClick : function () {
		me.state.change(me.state.PLAY);
	},
	
	onHover : function () {
	
	}
});