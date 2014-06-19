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
				this.textfield = new game.UIText(150, constants.SCREENHEIGHT - 170, "font", this.script[this.index + 1]);
				me.game.world.addChild(this.textfield);
				//empty object just to listen for mouse click
				this.eventListener = new game.SpeechScreen.eventListener(0, 0, {});
				me.game.world.addChild(this.eventListener);
				
				this.namelabel = new game.UIText(740, constants.SCREENHEIGHT - 235, "font", this.script[this.index]);
				me.game.world.addChild(this.namelabel);
				
				this.bgnamelabel= new game.UIImage(730, constants.SCREENHEIGHT - 250, "namelabel");
				me.game.world.addChild(this.bgnamelabel);
				
				/*this.bgnamelabelNPC= new game.UIImage(130, constants.SCREENHEIGHT - 250, "namelabel");
				me.game.world.addChild(this.bgnamelabelNPC);*/
				
				me.game.world.addChild(new game.UIText(140, constants.SCREENHEIGHT - 40, "font", "Druk op spatiebalk om door te gaan"));
				me.game.world.addChild(new game.UIImage(128, constants.SCREENHEIGHT - 192, "speechbalk"));
				me.game.world.addChild(new game.UIImage(1024 - 276, constants.SCREENHEIGHT - 571, "alex_convo"));
				
				if(game.data.lastSpokenNPC == "kim") {
					me.game.world.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 574, game.data.lastSpokenNPC + "_convo"));
				} else {
					me.game.world.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 638, game.data.lastSpokenNPC + "_convo"));
				}
			}
		},
		
		//This is a problem because Alex isn't always the initiator of conversation
	/*	updateNameLabel : function(index) {
			if (index % 2 == 0) {
				this.namelabel.replaceText("Alex");
				this.namelabel.pos.x = 740;
			} else {
				this.namelabel.replaceText(game.data.lastSpokenNPC);
				this.namelabel.pos.x = 140;
			}
		},*/
		
		
		
		stateChange : function () {
		
			//Copy paste
			/*if(game.data.questStateMachine.getStatus() =="got_number" && game.data.lastSpokenNPC == "sam") {
				game.data.questStateMachine.consumeEvent("talk_to_sam2");
				console.log(game.data.questStateMachine.getStatus());
			}else */
		
			
			if(game.data.questStateMachine.getStatus() =="got_note5" && game.data.lastSpokenNPC == "roel") {
				console.log("got here");
			}else if(game.data.questStateMachine.getStatus() =="have_pocketknife" && game.data.lastSpokenNPC == "tim") {
				game.data.questStateMachine.consumeEvent("talk_to_tim2");
				game.data.inventory.splice(game.data.inventory.indexOf("zakmes"),1);
				game.data.inventory.push("notenschrift3");
				
			}else if(game.data.questStateMachine.getStatus() =="quest_get_pocketknife2" && game.data.lastSpokenNPC == "roel") {
				game.data.questStateMachine.consumeEvent("talk_to_roel3");
				game.data.inventory.push("zakmes");
				
			}else if(game.data.questStateMachine.getStatus() =="quest_get_pocketknife" && game.data.lastSpokenNPC == "kim") {
				game.data.questStateMachine.consumeEvent("talk_to_kim2");
				
			}else if(game.data.questStateMachine.getStatus() =="got_note2" && game.data.lastSpokenNPC == "tim") {
				game.data.questStateMachine.consumeEvent("talk_to_tim");
				
			}else if(game.data.questStateMachine.getStatus() =="got_note1" && game.data.lastSpokenNPC == "randy") {
				game.data.questStateMachine.consumeEvent("randomNPCTalk");
				
			}else if(game.data.questStateMachine.getStatus() =="got_number" && game.data.lastSpokenNPC == "sam") {
				game.data.inventory.splice(game.data.inventory.indexOf("note"),1);
				game.data.questStateMachine.consumeEvent("talk_to_sam2");
				
			}else if(game.data.questStateMachine.getStatus() =="get_number" && game.data.lastSpokenNPC == "kim") {
				game.data.inventory.push("note");
				game.data.questStateMachine.consumeEvent("talk_to_kim");
				
			}else if(game.data.questStateMachine.getStatus() =="quest_chair" && game.data.lastSpokenNPC == "sam") {
				game.data.questStateMachine.consumeEvent("talk_to_sam1");
				
			}else if(game.data.questStateMachine.getStatus() == "brief_read" && game.data.lastSpokenNPC == "roel") {
				game.data.questStateMachine.consumeEvent("get_quest_chair");
				
			} 
			
			else if(game.data.questStateMachine.getStatus() == "brief") {
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
		},
		
		changeLines : function () {
			
			this.index = this.index + 2;
			//this.updateNameLabel(this.index);
			
			if (this.index < this.script.length) {
				this.namelabel.replaceText(this.script[this.index]);
				this.textfield.replaceText(this.script[this.index + 1]);
			} else if (this.index >= this.script.length) {
				this.stateChange();
				this.index = 0;
				
				if(game.data.questStateMachine.getStatus() =="got_note5" && game.data.lastSpokenNPC == "roel") {
					me.state.change(me.state.GAME_END);
				} else {
					me.state.change(me.state.PLAY);
				}
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
