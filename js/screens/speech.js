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
				
				this.namelabel = new game.UIText(730, constants.SCREENHEIGHT - 235, "font", "Alex");
				me.game.world.addChild(this.namelabel);
				
				this.bgnamelabel= new game.UIImage(730, constants.SCREENHEIGHT - 250, "namelabel");
				me.game.world.addChild(this.bgnamelabel);
				
				me.game.world.addChild(new game.UIText(128, constants.SCREENHEIGHT - 40, "font", "Druk op de spatiebalk om door te gaan."));
				me.game.world.addChild(new game.UIImage(128, constants.SCREENHEIGHT - 192, "speechbalk"));
				me.game.world.addChild(new game.UIImage(1024 - 276, constants.SCREENHEIGHT - 571, "alex_convo"));
				me.game.world.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 638, game.data.lastSpokenNPC + "_convo"));
			}
		},
		
		updateNameLabel : function(index) {
			if (index % 2 == 0) {
				this.namelabel.replaceText("Alex");
				this.namelabel.pos.x, this.bgnamelabel.pos.x = 730;
				//TODO bgnamelabel is not drawn in the new position
			} else {
				this.namelabel.replaceText(game.data.lastSpokenNPC);
				this.namelabel.pos.x, this.bgnamelabel.pos.x = 130;
				//TODO bgnamelabel is not drawn in the new position
			}
		},
		
		changeLines : function () {
			this.index++;
			this.updateNameLabel(this.index);
			
			console.log(this.index);
			console.log(this.script.length);
			if (this.index < this.script.length) {
				this.textfield.replaceText(this.script[this.index]);
			} else if (this.index >= this.script.length) {
				console.log(game.data.questStateMachine.getStatus());
				if(game.data.questStateMachine.getStatus() == "brief_gelezen" && game.data.lastSpokenNPC == "roel") {
					game.data.questStateMachine.consumeEvent("get_quest_chair");
					console.log(game.data.questStateMachine.getStatus());
				} else if(game.data.questStateMachine.getStatus() == "brief") {
					game.data.questStateMachine.consumeEvent("read_letter");
					console.log(game.data.questStateMachine.getStatus());
				} else if(game.data.questStateMachine.getStatus() == "talk_to_roel" && game.data.lastSpokenNPC == "roel") {
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
