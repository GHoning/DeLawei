/**
 *  The games play screen. Used too handle level switches and inventory
 */
game.EndScreen = me.ScreenObject.extend({

		onResetEvent : function () {
			this.thing = true;
			me.audio.stop("footstep_sfx");
			me.audio.play("laweiwin_bgm");
			this.button = new game.EndScreen.NextButton(850, 700, {image: "nextbutton", spriteWidth: 148, spriteHeight: 54});
			this.button.setOnClick(this.nextScreen.bind(this));
			me.game.world.addChild(this.button, 2000);
			this.BGTheater = new game.UIImage(0, 0, "endbackgroundtheater");
			me.game.world.addChild(this.BGTheater, 1);
		},
		
		addBackgroundKrant : function() {
			me.game.world.removeChild(this.BGTheater);
			this.BGKrant = new game.UIImage(0, 0, "endbackgroundkrant");
			me.game.world.addChild(this.BGKrant, 1);
		},
		
		addLastScreen : function() {
			//me.game.world.removeChild(this.BGKrant);
			this.code = new game.UIText((constants.SCREENWIDTH / 2) - 70, 500, "font", "Code: " + words[Math.floor(Math.random() * words.length)])
			me.game.world.addChild(this.code, 2000);
			this.replaybutton = new game.EndScreen.ReplayButton((constants.SCREENWIDTH / 2) - 74, 600, {image: "replaybutton", spriteWidth: 148, spriteHeight: 54})
			me.game.world.addChild(this.replaybutton, 2000);
			this.interfacewachtword = new game.UIImage((constants.SCREENWIDTH / 2) - 256, 100, "interfacewachtwoord");
			me.game.world.addChild(this.interfacewachtword, 2000);
			me.game.world.removeChild(this.button);
		},
		
		nextScreen : function() {
			
			if(this.thing){
				this.addBackgroundKrant();
				this.thing = false;
			} else {
				this.addLastScreen();
			}
		},		
		onDestroyEvent : function () {
			me.audio.stop("laweiwin_bgm");
		}

	});
	
game.EndScreen.NextButton = game.UIButton.extend({
	
	onHover : function() {
		
	},
}),
	
game.EndScreen.ReplayButton = game.UIButton.extend({
	
	onHover : function() {
		
	},
	
	onClick : function () {
		console.log("replay");
		game.data.inventory = [];
		game.data.currentLevel = constants.STARTING_LEVEL;
		game.data.playerMapPos = constants.PLAYER_STARTMAPLOCATION;
		game.data.currentQuestState = constants.STARTING_QUESTSTATE;
		game.data.playerPos = constants.PLAYER_STARTLOCATION;
		game.data.questStateMachine = new StateMachine(QuestStates);
		
		me.state.change(me.state.PLAY);
		
		//TODO quest state reset();
		//TODO reset variables and start playscreen
	}
});
