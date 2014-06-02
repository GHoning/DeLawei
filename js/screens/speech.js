game.SpeechScreen = me.ScreenObject.extend({

		onResetEvent : function () {
			this.z = Infinity;
			this.index = 0;
			this.script;

			for (var i = 0; i < dialog.length; i++) {
				if (dialog[i][0] == game.data.lastSpokenNPC && dialog[i][1] == game.data.questStateMachine.getStatus()) {
					this.script = dialog[i][2];
				}
			}

			if(game.data.questStateMachine.getStatus() == "brief"){ //TODO fix this in a more elegant way
			
			for (var i = 0; i < dialog.length; i++) {
				if (dialog[i][0] == "letter" && dialog[i][1] == game.data.questStateMachine.getStatus()) {
					this.script = dialog[i][2];
				}
			}
				this.index = 0;
				this.textfield = new game.UIText(150, constants.SCREENHEIGHT - 170, "font", this.script[this.index]);
				me.game.world.addChild(this.textfield);
				//empty object just to listen for mouse click
				this.eventListener = new game.SpeechScreen.eventListener(0, 0, {});
				me.game.world.addChild(this.eventListener);

				me.game.world.addChild(new game.UIImage(128, constants.SCREENHEIGHT - 192, "speechbalk"));
				me.game.world.addChild(new game.UIImage(1024 - 276, constants.SCREENHEIGHT - 571, "alex_convo"));
				
			
			} else {
				//TODO replace hard coded stuff
				this.textfield = new game.UIText(150, constants.SCREENHEIGHT - 170, "font", this.script[this.index]);
				me.game.world.addChild(this.textfield);
				//empty object just to listen for mouse click
				this.eventListener = new game.SpeechScreen.eventListener(0, 0, {});
				me.game.world.addChild(this.eventListener);

				me.game.world.addChild(new game.UIImage(128, constants.SCREENHEIGHT - 192, "speechbalk"));
				me.game.world.addChild(new game.UIImage(1024 - 276, constants.SCREENHEIGHT - 571, "alex_convo"));
				me.game.world.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 638, game.data.lastSpokenNPC + "_convo"));
			}
			
			console.log (2);
		},

		changeLines : function () {
			this.index++;
			
			if (this.index < this.script.length) {
				this.textfield.replaceText(this.script[this.index]);
			} else if (this.index >= this.script.length) {
				if(game.data.questStateMachine.getStatus() == "brief_gelezen" && game.data.lastSpokenNPC == "roel") {
					game.data.questStateMachine.consumeEvent("get_quest_chair");
					console.log(game.data.questStateMachine.getStatus());
				} else if(game.data.questStateMachine.getStatus() == "brief") {
					game.data.questStateMachine.consumeEvent("read_letter");
					console.log(game.data.questStateMachine.getStatus());
				} else if(game.data.questStateMachine.getStatus() == "roel" && game.data.lastSpokenNPC == "roel") {
					game.data.inventory.push("brief");
					game.data.questStateMachine.consumeEvent("get_brief");
					console.log(game.data.questStateMachine.getStatus());
				} else if (game.data.questStateMachine.getStatus() == "intro" && game.data.lastSpokenNPC == "kim") {
					game.data.questStateMachine.consumeEvent("talk_to_kim");
					console.log(game.data.questStateMachine.getStatus());
				}
				
				this.index = 0;
				me.state.change(me.state.PLAY);
			}
		}
	});

game.SpeechScreen.eventListener = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.alwaysUpdate = true;
			this.keyLock = false;
		},

		update : function () {
			if (me.input.isKeyPressed("Uses") && !this.keyLock) {
				game.speech.changeLines();
				this.keyLock = true;

			}

			if (!me.input.isKeyPressed("Uses")) {
				this.keyLock = false;
			}

			return true;
		}
	});