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
		lastSpokenNPC : "",
		inventory : [],
		questStateMachine : new StateMachine(QuestStates),
		//ugly but it doesn't matter any more.
		spokenRandy : false
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
		
		game.end = new game.EndScreen();
		me.state.set(me.state.GAME_END, game.end);
		
		var SPEECH = me.state.USER;
		game.speech = new game.SpeechScreen();
		me.state.set(me.state.SPEECH, game.speech);
		
		game.instructions = new game.InstructionsScreen();
		me.state.set(me.state.SCORE, game.instructions);
		
		
		me.pool.register("player", game.Player);
		me.pool.register("item", game.Item);
		me.pool.register("npc", game.QuestNPC);
		me.pool.register("door", game.Door);
		me.pool.register("scenery", game.Scenery);
		me.pool.register("eventTile", game.EventTile);

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
		this.laweimusic_bgm = me.audio.playTrack("Laweimusic_bgm", true);
		//this.crowd_sfx = me.audio.playTrack("crowd_sfx", true);;
	}
};
