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
				
				me.game.world.addChild(new game.UIText(20, constants.SCREENHEIGHT - 40, "font", "Druk op de spatiebalk om door te gaan"));
				me.game.world.addChild(new game.UIImage(128, constants.SCREENHEIGHT - 192, "speechbalk"));
				me.game.world.addChild(new game.UIImage(1024 - 276, constants.SCREENHEIGHT - 571, "alex_convo"));
				me.game.world.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 638, game.data.lastSpokenNPC + "_convo"));
			}
		},
		
		updateNameLabel : function(index) {
			if (index % 2 == 0) {
				this.namelabel.replaceText("Alex");
				this.namelabel.pos.x = this.bgnamelabel.pos.x = 730;
				//TODO bgnamelabel is not drawn in the new position
			} else {
				this.namelabel.replaceText(game.data.lastSpokenNPC);
				this.namelabel.pos.x = this.bgnamelabel.pos.x = 130;
				//TODO bgnamelabel is not drawn in the new position
			}
		},
		
		
		
		stateChange : function () {
		
			//Copy paste
			/*if(game.data.questStateMachine.getStatus() =="got_number" && game.data.lastSpokenNPC == "sam") {
				game.data.questStateMachine.consumeEvent("talk_to_sam2");
				console.log(game.data.questStateMachine.getStatus());
			}else */
		
			
			if(game.data.questStateMachine.getStatus() =="got_note5" && game.data.lastSpokenNPC == "roel") {
				me.state.change(me.state.END_GAME);
				console.log("You win, but you're still a loser");
			}else if(game.data.questStateMachine.getStatus() =="have_pocketknife" && game.data.lastSpokenNPC == "tim") {
				game.data.questStateMachine.consumeEvent("talk_to_tim2");
				console.log(game.data.questStateMachine.getStatus());
				//does not exist in speechscreen probably. So try to do this in play
				
				//game.play.removeItemFromInventory("zakmes");
				
				game.data.inventory.splice(game.data.inventory.indexOf("zakmes"),1);
				//add Notenschrift3 to inventory
				//game.play.addItemToInventory("notenschrift");
				game.data.inventory.push("notenschrift");
				
			}else if(game.data.questStateMachine.getStatus() =="quest_get_pocketknife2" && game.data.lastSpokenNPC == "roel") {
				game.data.questStateMachine.consumeEvent("talk_to_roel3");
				console.log(game.data.questStateMachine.getStatus());
				
				//add knife to inventory
				game.data.inventory.push("zakmes");
			}else if(game.data.questStateMachine.getStatus() =="quest_get_pocketknife" && game.data.lastSpokenNPC == "kim") {
				game.data.questStateMachine.consumeEvent("talk_to_kim2");
				console.log(game.data.questStateMachine.getStatus());
			}else if(game.data.questStateMachine.getStatus() =="got_note2" && game.data.lastSpokenNPC == "tim") {
				game.data.questStateMachine.consumeEvent("talk_to_tim");
				console.log(game.data.questStateMachine.getStatus());
			}else if(game.data.questStateMachine.getStatus() =="got_number" && game.data.lastSpokenNPC == "sam") {
				game.data.questStateMachine.consumeEvent("talk_to_sam2");
				console.log(game.data.questStateMachine.getStatus());
			}else if(game.data.questStateMachine.getStatus() =="get_number" && game.data.lastSpokenNPC == "kim") {
				game.data.questStateMachine.consumeEvent("talk_to_kim");
				console.log(game.data.questStateMachine.getStatus());
			}else if(game.data.questStateMachine.getStatus() =="quest_chair" && game.data.lastSpokenNPC == "sam") {
				game.data.questStateMachine.consumeEvent("talk_to_sam1");
				console.log(game.data.questStateMachine.getStatus());
			}else if(game.data.questStateMachine.getStatus() == "brief_read" && game.data.lastSpokenNPC == "roel") {
				game.data.questStateMachine.consumeEvent("get_quest_chair");
				console.log(game.data.questStateMachine.getStatus());
			} 
			
			//TODO clean up give to HUD for display of letter. Comrade!
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
			this.index++;
			this.updateNameLabel(this.index);
			
			if (this.index < this.script.length) {
				this.textfield.replaceText(this.script[this.index]);
			} else if (this.index >= this.script.length) {
				console.log(game.data.questStateMachine.getStatus());
				this.stateChange();
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
