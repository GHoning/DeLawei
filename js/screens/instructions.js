game.InstructionsScreen = me.ScreenObject.extend({
		onResetEvent : function () {
			this.alwaysUpdate = true;
			//me.game.world is the main container for the game. And the 'add' is replaced by addChild
			me.game.world.addChild(new game.InstructionsScreen.MenuButton(50, 640, {
					image : "menuButton",
					spritewidth : 256,
					spriteheight : 128
				}));
			me.game.world.addChild(new game.InstructionsScreen.PlayButton(650, 640, {
					image : "playButton",
					spritewidth : 256,
					spriteheight : 128
				}));
			me.game.world.addChild(new game.UIImage(0, 0, "introductiescherm"));
		},

	});

game.InstructionsScreen.MenuButton = game.UIButton.extend({

		init : function (x, y, settings) {
			this.parent(x, y, settings);
			console.log("init");
		},

		onClick : function () {
			console.log("onClick");
			me.state.change(me.state.MENU);
		},

		onHover : function (bool) {
			if (bool) {
				console.log("hover");
			}
		},
	});

game.InstructionsScreen.PlayButton = game.UIButton.extend({

		init : function (x, y, settings) {
			this.parent(x, y, settings);
			console.log("init");
		},

		onClick : function () {
			console.log("onClick");
			me.state.change(me.state.PLAY);
		},

		onHover : function (bool) {
			if (bool) {
				console.log("hover");
			}
		},
	});