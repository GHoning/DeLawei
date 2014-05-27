/**
 *  The game contains the data and resources loaded.
 */
var game = {
	//global game variables
	data : {
		currentLevel: constants.STARTING_LEVEL, 
		playerMapPos: constants.PLAYER_STARTMAPLOCATION,
		currentQuestState : constants.STARTING_QUESTSTATE,
		playerPos: constants.PLAYER_STARTLOCATION,
		inventory : [],
		lastspokenNPC : "",
		questStateMachine : new StateMachine(QuestStates)
	},
	
	/*
	 *	Checks if the user uses a html 5 compatible browser and if the user tries to use the debugger.
	 */
	onload : function () {
		if (!me.video.init("screen", constants.SCREENWIDTH, constants.SCREENHEIGHT, true, 'auto')) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}

		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}

		me.audio.init("ogg,mp3");
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(game.resources);
		me.state.change(me.state.LOADING);
	},
	
	/*
	 *	Called when loading is finished. Creates all the screen objects en registers objects to their respective entity pool.
	 */
	loaded : function () {
		game.play = new game.PlayScreen();
		me.state.set(me.state.PLAY, game.play);
		
		game.menu = new game.MenuScreen();
		me.state.set(me.state.MENU, game.menu);
		
		game.credits = new game.CreditsScreen();
		me.state.set(me.state.CREDITS, game.credits);
		
		var INSTRUCTIONS = me.state.USER + 0;
		game.instructions = new game.InstructionsScreen();
		me.state.set(me.state.INSTRUCTIONS, game.instructions);
		
		var NOTEBOOK = me.state.USER + 1;
		game.notebook = new game.NotebookScreen();
		me.state.set(me.state.NOTEBOOK, game.notebook);
		
		var SPEECH = me.state.USER + 2;
		game.speech = new game.SpeechScreen();
		me.state.set(me.state.SPEECH, game.speech);
		
		me.pool.register("player", game.Player);
		me.pool.register("item", game.Item);
		me.pool.register("npc", game.QuestNPC);
		me.pool.register("door", game.Door);

		me.input.bindKey(me.input.KEY.W, "Up");
		me.input.bindKey(me.input.KEY.A, "Left");
		me.input.bindKey(me.input.KEY.S, "Down");
		me.input.bindKey(me.input.KEY.D, "Right");

		me.input.bindKey(me.input.KEY.UP, "Up");
		me.input.bindKey(me.input.KEY.LEFT, "Left");
		me.input.bindKey(me.input.KEY.DOWN, "Down");
		me.input.bindKey(me.input.KEY.RIGHT, "Right");

		me.input.bindKey(me.input.KEY.E, "Use");
		me.input.bindKey(me.input.KEY.ENTER, "Use");
		me.input.bindKey(me.input.KEY.SPACE, "Uses");
		me.input.bindKey(me.input.KEY.M, "Mutes");
		
		me.input.bindKey(me.input.KEY.X, "mouse/touch");
		me.input.bindPointer(me.input.KEY.X);
		me.state.change(me.state.MENU);
	}
};
