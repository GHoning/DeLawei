game.player = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			this.setMaxVelocity(256, 128);
			this.setFriction(0, 0);
			this.gravity = false;
			this.alwaysUpdate = true;
			
			this.maxMapHeight = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).cols;
			this.maxMapWidth = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).rows;
			
			this.type = me.game.world.PLAYER;
			
			//collisionShape
			this.shapes[0].height = 64;
			this.shapes[0].width = 128;
			this.shapes[0].pos = new me.Vector2d(32,256-64);
			
			this.mapPos = constants.PLAYER_STARTLOCATION;
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
			this.deltaTime = this.deltaTime + me.timer.tick;
			
			
			
			//time step
			if(this.deltaTime >= 2) {
				this.renderable.setAnimationFrame(this.index);
				this.index++;
				this.deltaTime = 0;
				
				if(this.index >= 3) {
					this.keylock = false;
					this.index = 0;
					this.renderable.setAnimationFrame(this.index);
					this.animate = false;
				}
			}
		},
		
		walkUp : function () {
			this.animate = true;
			this.mapPos.y -= 1;
			this.pos.x += 64;
			this.pos.y -= 32;
		},
		
		walkDown : function () {
			this.animate = true;
			this.mapPos.y += 1;
			this.pos.x -= 64;
			this.pos.y += 32;
		},
		
		walkLeft : function () {
			this.animate = true;
			this.mapPos.x -= 1;
			this.pos.x -= 64;
			this.pos.y -= 32;
		},
		
		walkRight : function () {
			this.animate = true;
			this.mapPos.x += 1;
			this.pos.x += 64;
			this.pos.y += 32;
		},
		
		update : function () {
		
			if (me.input.isKeyPressed("Talk")) {
				me.state.change(me.state.READY);
				game.data.lastSpokenPerson = "Henk";
			}
			
			if(game.play.collisionMap[this.mapPos.x][this.mapPos.y] != null){			
				if (me.input.isKeyPressed("Use") && game.play.collisionMap[this.mapPos.x][this.mapPos.y].tileId == constants.ITEM_TILEID) {
					console.log("picked up " + game.play.collisionMap[this.mapPos.x][this.mapPos.y].tileset.TileProperties[constants.ITEM_TILEID].item_name);
				} else if (game.play.collisionMap[this.mapPos.x][this.mapPos.y].tileId == constants.DOOR_TILEID) {
					console.log("move to new area");
				}
			}
					
			if(this.animate) {
				this.animations();
			}
			
			if (me.input.isKeyPressed("Up") && !this.keylock) {
				this.keylock = true;
				this.renderable.setCurrentAnimation("upRight");
				if(this.mapPos.y-1 >= 0 && game.play.collisionMap[this.mapPos.x][this.mapPos.y-1] != null){
					console.log(game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].tileId);
					if (game.play.collisionMap[this.mapPos.x][this.mapPos.y-1].tileId == constants.COLLISION_TILEID) {
						this.keylock = false;
					} else {
						this.walkUp();
					}
				} else {
					this.walkUp();
				}
			}

			if (me.input.isKeyPressed("Left") && !this.keylock) {
				this.keylock = true;
				this.renderable.setCurrentAnimation("upLeft");
				if(this.mapPos.x-1 >= 0 && game.play.collisionMap[this.mapPos.x-1][this.mapPos.y] != null){
					console.log(game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].tileId);
					if(game.play.collisionMap[this.mapPos.x-1][this.mapPos.y].tileId ==  constants.COLLISION_TILEID){
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
				this.renderable.setCurrentAnimation("downLeft");
				if(this.mapPos.y < this.maxMapHeight && game.play.collisionMap[this.mapPos.x][this.mapPos.y+1] != null){
					console.log(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].tileId);
					if(game.play.collisionMap[this.mapPos.x][this.mapPos.y+1].tileId == constants.COLLISION_TILEID){
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
				this.renderable.setCurrentAnimation("downRight");
				if(this.mapPos.x < this.maxMapWidth && game.play.collisionMap[this.mapPos.x+1][this.mapPos.y] != null){
					console.log(game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].tileId);
					if(game.play.collisionMap[this.mapPos.x+1][this.mapPos.y].tileId == constants.COLLISION_TILEID){	
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