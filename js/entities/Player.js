//TODO clean this up

game.Player = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			me.game.viewport.setDeadzone(constants.CAMERA_BOUNDING_BOX.x, constants.CAMERA_BOUNDING_BOX.y);
			me.game.viewport.setBounds(0, 0, me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).rows * constants.TILEWIDTH, me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).cols * constants.TILEHEIGHT);
			
			this.gravity = false;
			this.alwaysUpdate = true;
			
			this.mapPos = constants.PLAYER_STARTMAPLOCATION;
			this.keylock = false;
			
			this.renderable = new me.AnimationSheet(0, 0, me.loader.getImage("alex"), 128, 256);
			this.renderable.addAnimation("downLeft",[0,1,2,3]);
			this.renderable.addAnimation("downRight",[4,5,6,7]);
			this.renderable.addAnimation("upRight",[8,9,10,11]);
			this.renderable.addAnimation("upLeft",[12,13,14,15]);

			this.animate = false;
			this.index = 0;
			this.deltaTime = 0;
			this.goUpRight = false;
			this.goDownLeft = false;
			this.goUpLeft = false;
			this.goDownRight = false;
			console.log("player created");
		},
		
		switchAnimations : function () {
			if(this.renderable != null){
				if(!this.renderable.isCurrentAnimation("downLeft") && this.goDownLeft) {
					this.renderable.setCurrentAnimation("downLeft");
				} else if (!this.renderable.isCurrentAnimation("downRight") && this.goDownRight) {
					this.renderable.setCurrentAnimation("downRight");
				} else if (!this.renderable.isCurrentAnimation("upRight") && this.goUpRight) {
					this.renderable.setCurrentAnimation("upRight");
				} else if (!this.renderable.isCurrentAnimation("upLeft") && this.goUpLeft) {
					this.renderable.setCurrentAnimation("upLeft");
				}
			}
		},
		
		animations : function () {
			this.deltaTime += me.timer.tick;
			//determines speed 
			if(this.deltaTime >= 4) {
				this.renderable.setAnimationFrame(this.index);
				this.index++;
				this.deltaTime = 0;
				
				if(this.goUpRight) {
					this.pos.x += (64/5);
					this.pos.y -= (32/5);
				} else if (this.goDownLeft) {
					this.pos.x -= (64/5);
					this.pos.y += (32/5);
				} else if (this.goUpLeft){
					this.pos.x -= (64/5);
					this.pos.y -= (32/5);
				} else if (this.goDownRight){
					this.pos.x += (64/5);
					this.pos.y += (32/5);
				}
				
				if(this.index == 5) {
					this.keylock = false;
					this.animate = false;
					this.index = 0;
					me.audio.play("footstep_sfx");
				
					if(this.goUpRight) {
						this.mapPos.y -= 1;
					} else if (this.goDownLeft) {
						this.mapPos.y += 1;
					} else if (this.goUpLeft){
						this.mapPos.x -= 1;
					} else if (this.goDownRight){
						this.mapPos.x += 1;
					}					
				}
			}
		},
		
		//TODO use the base of the object
		updateZ : function () {
			me.game.world.sortOn = "y";
			me.game.world.sort();
		},
		
		update : function () {
			//console.log("player Update");
		
			if(this.animate) {
				this.animations();
			}
		
			//TODO do this in NPC itself
			this.updateZ();
			
			var tile = game.play.collision.getTile(this.mapPos.x, this.mapPos.y);
			//use items
			
			if(tile != null) {
				//item pickup
				if (me.input.isKeyPressed("Use") && tile.obj == "item") {
				
					if(game.data.questStateMachine.getStatus() == "got_note4" && this.goUpRight) {
						game.data.questStateMachine.consumeEvent("get_note5");
						console.log(game.data.questStateMachine.getStatus());
						game.play.addItemToInventory(tile.name);
						game.play.collision.clearTile(this.mapPos.x, this.mapPos.y);
					}else if(game.data.questStateMachine.getStatus() == "get_note4" && this.goUpRight) {
						game.data.questStateMachine.consumeEvent("pick_up_note4");
						console.log(game.data.questStateMachine.getStatus());
						game.play.addItemToInventory(tile.name);
						game.play.collision.clearTile(this.mapPos.x, this.mapPos.y);
					}else if(game.data.questStateMachine.getStatus() == "got_note3" && this.goUpLeft) {
					//Talk width kim
						game.data.lastSpokenNPC = "kim";
						game.play.HUD.remove();
						me.state.change(me.state.SPEECH);
					
						/*game.data.questStateMachine.consumeEvent("get_note4");
						console.log(game.data.questStateMachine.getStatus());
						game.play.addItemToInventory(tile.name);
						console.log(game.data.inventory);
						game.play.collision.clearTile(this.mapPos.x, this.mapPos.y);*/
					}else if(game.data.questStateMachine.getStatus() == "get_note2" && this.goDownRight) {
						game.data.questStateMachine.consumeEvent("pick_up_note2");
						console.log(game.data.questStateMachine.getStatus());
						game.play.addItemToInventory(tile.name);
						console.log(game.data.inventory);
						game.play.collision.clearTile(this.mapPos.x, this.mapPos.y);
					}else if(game.data.questStateMachine.getStatus() == "get_note1" && this.goUpRight) {
						game.data.questStateMachine.consumeEvent("pick_up_note1");
						console.log(game.data.questStateMachine.getStatus());
						
						var sceneries = me.game.world.getChildByName("scenery");
						
						for(var i = 0; i < sceneries.length; i++) {
							if(sceneries[i].n == 1) {
								sceneries[i].setAnimationFrameTo(0);
							}
						}
						
						game.play.addItemToInventory(tile.name);
						console.log(game.data.inventory);
						game.play.collision.clearTile(this.mapPos.x, this.mapPos.y);
						
					}
				//door
				} else if (tile.name == "door") {
					console.log(game.data.questStateMachine.indexes.get_note1);
					console.log(game.data.questStateMachine.getIndex(game.data.questStateMachine.getStatus()));
					if(game.data.questStateMachine.getIndex(game.data.questStateMachine.getStatus()) < game.data.questStateMachine.indexes.get_note1 && tile.level == "Theater") {	
						console.log(1);
						game.data.lastSpokenNPC = "sam";
						game.play.HUD.remove();
						
						this.mapPos.x += 1;
						this.pos.x += 64;
						this.pos.y += 32;
						
						me.state.change(me.state.SPEECH);
					} else if (game.data.questStateMachine.getIndex(game.data.questStateMachine.getStatus()) < game.data.questStateMachine.indexes.got_note1 && tile.level == "Kleedkamer") {
						console.log(2);
						game.data.lastSpokenNPC = "randy";
						game.play.HUD.remove();
						
						this.mapPos.y -= 1;
						this.pos.x += 64;
						this.pos.y -= 32;
						
						me.state.change(me.state.SPEECH);	
					} else {
						game.play.loadLevel(tile.level, tile.playerX, tile.playerY, tile.mapX, tile.mapY);
					}
				}
			}
			
			//talk to NPC
			if (game.play.collision.isNextToNPC(this.mapPos.x, this.mapPos.y) && me.input.isKeyPressed("Use") && !this.keylock) {
				console.log(game.data.lastSpokenNPC);
				this.keylock = true;
				
				var npcs = me.game.world.getChildByName("npc");
				//look at NPC while talking
				for(var i = 0; i < npcs.length; i++) {
					if(npcs[i].image == game.data.lastSpokenNPC) {
						if(npcs[i].lookRight) {
							this.goUpRight = false;
							this.goDownLeft = false;
							this.goUpLeft = true;
							this.goDownRight = false;
						} else if (npcs[i].lookLeft) {
							this.goUpRight = false;
							this.goDownLeft = false;
							this.goUpLeft = false;
							this.goDownRight = true;
						} else if (npcs[i].lookUp) {
							this.goUpRight = false;
							this.goDownLeft = true;
							this.goUpLeft = false;
							this.goDownRight = false;
						} else if (npcs[i].lookDown) {
							this.goUpRight = true;
							this.goDownLeft = false;
							this.goUpLeft = false;
							this.goDownRight = false;
						}
					}
				}
				
				this.switchAnimations();
				
				game.play.HUD.remove();
				me.state.change(me.state.SPEECH);
			}
			
			//Walk
			if (me.input.isKeyPressed("Up") && !this.keylock) {
				this.goUpRight = true;
				this.goDownLeft = false;
				this.goUpLeft = false;
				this.goDownRight = false;
				this.switchAnimations();
				
				if(game.play.collision.isWalkable(this.mapPos.x, this.mapPos.y-1)){
					this.keylock = true;
					this.animate = true;
				}
			}
			
			if (me.input.isKeyPressed("Left") && !this.keylock) {
				this.goUpRight = false;
				this.goDownLeft = false;
				this.goUpLeft = true;
				this.goDownRight = false;
				this.switchAnimations();
				
				if(game.play.collision.isWalkable(this.mapPos.x-1, this.mapPos.y)) {
					this.keylock = true;
					this.animate = true;
				}
			}

			if (me.input.isKeyPressed("Down") && !this.keylock) {
				this.goUpRight = false;
				this.goDownLeft = true;
				this.goUpLeft = false;
				this.goDownRight = false;
				this.switchAnimations();
			
				if(game.play.collision.isWalkable(this.mapPos.x, this.mapPos.y+1)){
					this.keylock = true;
					this.animate = true;
				}
			}

			if (me.input.isKeyPressed("Right") && !this.keylock) {
				this.goUpRight = false;
				this.goDownLeft = false;
				this.goUpLeft = false;
				this.goDownRight = true;
				this.switchAnimations();
				
				if(game.play.collision.isWalkable(this.mapPos.x+1, this.mapPos.y)){
					this.keylock = true;
					this.animate = true;
				}
			} 
			
			this.updateMovement();
			this.parent();
			return true;
		},
	});