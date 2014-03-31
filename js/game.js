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
		playerPosX: 5400, //player Start Location
		playerPosY: 1600,
		quests : [],
		currentQuestState : "accept" //very dirty fix
	},

	"onload" : function () {
		if (!me.video.init("screen", 1024*2 , 768 *2, true, 'auto')) {
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
		me.state.set(me.state.INSTRUCTIONS, new game.InstructionsScreen());
		me.state.set(me.state.QUESTS, new game.Questlog());
		
		
		me.pool.register("playerObject", game.playerObject);
		me.pool.register("itemObject", game.itemObject);

		/*me.entityPool.add("playerObject", game.playerObject);
		me.entityPool.add("itemObject", game.itemObject);
		me.entityPool.add("QuestNPC", game.QuestNPCObject);
		me.entityPool.add("spawnpoint", game.Spawnpoint);
		me.entityPool.add("LevelSwitch", game.LevelSwitch);*/

		me.input.bindKey(me.input.KEY.W, "Up");
		me.input.bindKey(me.input.KEY.A, "Left");
		me.input.bindKey(me.input.KEY.S, "Down");
		me.input.bindKey(me.input.KEY.D, "Right");

		me.input.bindKey(me.input.KEY.UP, "Up");
		me.input.bindKey(me.input.KEY.LEFT, "Left");
		me.input.bindKey(me.input.KEY.DOWN, "Down");
		me.input.bindKey(me.input.KEY.RIGHT, "Right");

		me.input.bindKey(me.input.KEY.E, "Use");
		
		me.input.bindKey(me.input.KEY.X, "mouse/touch");
		me.input.bindPointer(me.input.KEY.X);

		me.state.change(me.state.MENU);
	}
};
