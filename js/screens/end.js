/**
 *  The games play screen. Used too handle level switches and inventory
 */
game.EndScreen = me.ScreenObject.extend({

		onResetEvent : function () {
			me.audio.stop("footstep_sfx");
			me.audio.play("laweiwin_bgm");
			me.game.world.addChild(new game.EndScreen.NextButton(500, 500, {image: "nextbutton", spriteWidth: 148, spriteHeight: 54}))
			this.BGTheater = new game.UIImage(0, 0, "endbackgroundtheater")
			me.game.world.addChild(this.BGTheater);
		},
		
		addBackgroundKrant : function() {
			me.game.world.removeChild(this.BGTheater);
			this.BGKrant = new game.UIImage(0, 0, "endbackgroundkrant");
			me.game.world.addChild(BGKrant);
		},
		
		addLastScreen : function() {
			me.game.world.removeChild(this.BGKrant);
			me.game.world.addChild(new game.UIText(500, 300, "font", words[Math.floor(Math.random() * words.length)]));
			me.game.world.addChild(new game.EndScreen.ReplayButton(500, 500, {image: "replaybutton", spriteWidth: 155, spriteHeight: 46}))
		}, 
		
		onDestroyEvent : function () {
			me.audio.stop("laweiwin_bgm");
		}

	});
	
game.EndScreen.NextButton = game.UIButton.extend({
	
	onHover : function() {
		
	},
	
	onClick : function() {
		//TODO call parent functions
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
