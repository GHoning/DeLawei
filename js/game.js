/**
 *  The game contains the data and resources loaded.
 */
var game = {

	data : {
		score : 0,
		inventory : [],
		questItems : [],
		drawText : "",//Temporary for arbitrary bullshit MOB
		currentLevel: "test", //set Starting Level
		playerPos: new me.Vector2d(0, 0),//player Start Location
		quests : [],
		currentQuestState : "accept", //very dirty fix
		lastSpokenPerson : "",
	},
	
	

	"onload" : function () {
		if (!me.video.init("screen", constants.SCREENWIDTH, constants.SCREENHEIGHT, true, 'auto')) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}

		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}

		me.audio.init("mp3,ogg");
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(game.resources);
		me.state.change(me.state.LOADING);
	},
	
	

	"loaded" : function () {
		game.play = new game.PlayScreen(true, true);
		me.state.set(me.state.PLAY, game.play);
		
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.CREDITS, new game.CreditsScreen());
		me.state.set(me.state.SETTINGS, new game.InstructionsScreen());
		me.state.set(me.state.USER, new game.Questlog());
		game.speech = new game.SpeechScreen(true, true);
		me.state.set(me.state.READY, game.speech);
		
		
		me.pool.register("playerObject", game.playerObject);
		me.pool.register("itemObject", game.itemObject);
		me.pool.register("wall", game.Wall);
		me.pool.register("QuestNPC", game.QuestNPCObject);
		me.pool.register("spawnpoint", game.Spawnpoint);
		me.pool.register("LevelSwitch", game.LevelSwitch);

		me.input.bindKey(me.input.KEY.W, "Up");
		me.input.bindKey(me.input.KEY.A, "Left");
		me.input.bindKey(me.input.KEY.S, "Down");
		me.input.bindKey(me.input.KEY.D, "Right");

		me.input.bindKey(me.input.KEY.UP, "Up");
		me.input.bindKey(me.input.KEY.LEFT, "Left");
		me.input.bindKey(me.input.KEY.DOWN, "Down");
		me.input.bindKey(me.input.KEY.RIGHT, "Right");

		me.input.bindKey(me.input.KEY.E, "Use");
		me.input.bindKey(me.input.KEY.T, "Talk");//Tijdelijke toest om te babbelen met je slachtoffer. "E" toets is waarschijnlijk logischer.
		
		me.input.bindKey(me.input.KEY.X, "mouse/touch");
		me.input.bindPointer(me.input.KEY.X);

		me.state.change(me.state.MENU);
	}
};
