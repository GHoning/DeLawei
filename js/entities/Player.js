//TODO clean this up

game.Player = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			me.game.viewport.setDeadzone(constants.CAMERA_BOUNDING_BOX.x, constants.CAMERA_BOUNDING_BOX.y);
			//me.game.viewport.setBounds(0, 0, game.play.collision.maxWidth * constants.TILEWIDHT, game.play.collision.maxHeight * constants.TILEHEIGTH);
			
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
		},
		
		animations : function () {
			this.deltaTime += me.timer.tick;			
			//determines speed 
			if(this.deltaTime >= 4) {
				this.renderable.setAnimationFrame(this.index);
				this.index++;
				this.deltaTime = 0;
				
				if(this.renderable.isCurrentAnimation("upRight")) {
					this.pos.x += (64/5);
					this.pos.y -= (32/5);
				} else if (this.renderable.isCurrentAnimation("downLeft")) {
					this.pos.x -= (64/5);
					this.pos.y += (32/5);
				} else if (this.renderable.isCurrentAnimation("upLeft")){
					this.pos.x -= (64/5);
					this.pos.y -= (32/5);
				} else if (this.renderable.isCurrentAnimation("downRight")){
					this.pos.x += (64/5);
					this.pos.y += (32/5);
				}
				
				if(this.index == 5) {
					this.keylock = false;
					this.animate = false;
					this.index = 0;
				
					if(this.renderable.isCurrentAnimation("upRight")) {
						this.mapPos.y -= 1;
					} else if (this.renderable.isCurrentAnimation("downLeft")) {
						this.mapPos.y += 1;
					} else if (this.renderable.isCurrentAnimation("upLeft")){
						this.mapPos.x -= 1;
					} else if (this.renderable.isCurrentAnimation("downRight")){
						this.mapPos.x += 1;
					}					
				}
			}
		},
		
		//TODO remove these.
		walkUp : function () {
			//TODO check for animation
			this.renderable.setCurrentAnimation("upRight");
			this.animate = true;
			//TODO enable audio.me.audio.play("footstep_sfx");
		},
		
		walkDown : function () {
			//TODO check for animation
			this.renderable.setCurrentAnimation("downLeft");
			this.animate = true;
			//TODO enable audio.me.audio.play("footstep_sfx");
		},
		
		walkLeft : function () {
			//TODO check for animation
			this.renderable.setCurrentAnimation("upLeft");
			this.animate = true;
			//TODO enable audio.me.audio.play("footstep_sfx");
		},
		
		walkRight : function () {
			//TODO check for animation
			this.renderable.setCurrentAnimation("downRight");
			this.animate = true;
			//TODO enable audio.me.audio.play("footstep_sfx");
		},
		
		//TODO do this in NPC itself
		checkNPCZ : function () {
			var npc = me.game.world.getChildByName("npc");

			if(npc.length > 0) {
				for( var i = 0; i < npc.length; i++ ) {
					if(npc[i].pos.y > this.pos.y) {
						npc[i].setZ(20);
					} else if (npc[0].pos.y < this.pos.y) {
						npc[i].setZ(14);
					}
				}
				
				me.game.world.sort();				
			}
		},
		
		nextToNPC : function () {
			//TODO make it shorter
			if(game.play.collisionMap[this.mapPos.x][this.mapPos.y-1] != null) {
				if(game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].type == "npc") {
					game.data.lastspokenNPC = game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].name;
					var npc = me.game.world.getChildByName("npc");
					for (var i = 0; i < npc.length; i++) {
						if(npc[i].image == game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].name) {
							npc[i].lookAt("down");
						}
					}
					
					return true;
				} else {
					return false;
				}
			}
			
			if (game.play.collisionMap[this.mapPos.x-1][this.mapPos.y] != null) {
				if(game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].type == "npc") {
					game.data.lastspokenNPC = game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].name;
					var npc = me.game.world.getChildByName("npc");
					for (var i = 0; i < npc.length; i++) {
						if(npc[i].image == game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].name) {
							npc[i].lookAt("up");
						}
					}
					
					return true;
				} else {
					return false;
				}
			}
			
			if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1] != null) {
				if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].type == "npc") {
					game.data.lastspokenNPC = game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].name;
					var npc = me.game.world.getChildByName("npc");
					for (var i = 0; i < npc.length; i++) {
						
						if(npc[i].image == game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].name) {
							npc[i].lookAt("right");
						}
					}
					return true;
				} else {
					return false;
				}
			}
		
			if(game.play.collisionMap[this.mapPos.x+1][this.mapPos.y] != null) {
				if(game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].type == "npc") {
					game.data.lastspokenNPC = game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].name;
					var npc = me.game.world.getChildByName("npc");
					
					for (var i = 0; i < npc.length; i++) {
						if(npc[i].image == game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].name) {
							npc[i].lookAt("left");
						}
					}
					return true;
				} else {
					return false;
				}
			}
			
			return false;
		},
		
		update : function () {
		
			if(this.animate) {
				this.animations();
			}
		
			//TODO do this in NPC itself
			this.checkNPCZ();
			
			
			if(game.play.collisionMap[this.mapPos.x][this.mapPos.y] != null) {
				//item
				if (me.input.isKeyPressed("Use") && game.play.collisionMap[this.mapPos.x][this.mapPos.y].type == "item") {
					game.play.addItemToInventory(game.play.collisionMap[this.mapPos.x][this.mapPos.y].name);
				//door
				} else if (game.play.collisionMap[this.mapPos.x][this.mapPos.y].type == "door") {
					var tile = game.play.collisionMap[this.mapPos.x][this.mapPos.y];
					game.play.loadLevel(tile.level, tile.playerX, tile.playerY, tile.mapX, tile.mapY);
				}
			}
			
			//talk to NPC
			if(this.nextToNPC() && me.input.isKeyPressed("Use") && !this.keylock){
				this.keylock = true;
				//game.play.removeItemFromInventory("koekje"); TODO fix bug
				game.play.HUD.remove();
				me.state.change(me.state.SPEECH);
			}
			
			//TODO make type only contain solid or not no stupid stuff with npc/item/door and stuff check cords function
			if (me.input.isKeyPressed("Up") && !this.keylock) {
				this.keylock = true;
				if(this.mapPos.y-1 >= 0 && game.play.collisionMap[this.mapPos.x][this.mapPos.y-1] != null) {
				//TODO reconsider the options about this system
					if (game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].type == "item" || game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].type == "door") {
						this.walkUp();
					} else if(game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].type == "npc") {
						this.keylock = false;
					} else if (game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].tileset.TileProperties[game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].tileId].type == constants.COLLISION_TYPE) {
						this.keylock = false;
					}else {
						this.walkUp();
					}
				} else {
					this.walkUp();
				}
			}
			
			if (me.input.isKeyPressed("Left") && !this.keylock) {
				this.keylock = true;
				if(this.mapPos.x-1 >= 0 && game.play.collisionMap[this.mapPos.x-1][this.mapPos.y] != null){
					if(game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].type == "item" || game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].type == "door") {
						this.walkLeft();
					} else if(game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].type == "npc") {
						this.keylock = false;
					} else if (game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].tileset.TileProperties[game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].tileId].type == constants.COLLISION_TYPE){
						this.keylock = false;
					} else {
						this.walkLeft();
					}
				}else {
					this.walkLeft();
				}
			}

			if (me.input.isKeyPressed("Down") && !this.keylock) {
				this.keylock = true;
				
				if(this.mapPos.y < this.maxMapHeight && game.play.collisionMap[this.mapPos.x][this.mapPos.y+1] != null){
					if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].type == "item" || game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].type == "door"){
						this.walkDown();
					} else if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].type == "npc"){
						this.keylock = false;
					} else if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].tileset.TileProperties[game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].tileId].type == constants.COLLISION_TYPE){
						this.keylock = false;
					} else {
						this.walkDown();
					}
				} else {
					this.walkDown();
				}
			}

			if (me.input.isKeyPressed("Right") && !this.keylock) {
				this.keylock = true;
				if(this.mapPos.x < this.maxMapWidth && game.play.collisionMap[this.mapPos.x+1][this.mapPos.y] != null){
					if(game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].type == "item" || game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].type == "door"){	
						this.walkRight();
					} else if (game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].type == "npc") {
						this.keylock = false;
					} else if (game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].tileset.TileProperties[game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].tileId].type == constants.COLLISION_TYPE){
						this.keylock = false;
					} else {
						this.walkRight();
					}
				} else {
					this.walkRight();
				}
			}
			
			this.updateMovement();
			this.parent();
			return true;
		},
	});