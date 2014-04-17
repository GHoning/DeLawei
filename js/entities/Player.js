game.playerObject = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			this.setVelocity(settings.speedX, settings.speedY);
			this.setFriction(settings.friction, settings.friction);
			this.gravity = false;
			
			//tag as player
			this.type = me.game.world.PLAYER;
			//this.collisionMap = me.game.currentLevelgetLayerByName("Drawthisplease").getTile(this.pos.x, this.pos.y);
		},
		
		update : function () {
		
			if (me.input.isKeyPressed("Talk")) {
				me.state.change(me.state.READY);
				game.data.lastSpokenPerson = "Henk";
			}
			
			if (me.input.isKeyPressed("Up")) {
				this.vel.x += this.accel.x * me.timer.tick;
				this.vel.y -= this.accel.y * me.timer.tick;
			}

			if (me.input.isKeyPressed("Left")) {
				this.vel.x -= this.accel.x * me.timer.tick;
				this.vel.y -= this.accel.y * me.timer.tick;
			}

			if (me.input.isKeyPressed("Down")) {
				
				this.vel.x -= this.accel.x * me.timer.tick;
				this.vel.y += this.accel.y * me.timer.tick;
			}

			if (me.input.isKeyPressed("Right")) {
				this.vel.x += this.accel.x * me.timer.tick;
				this.vel.y += this.accel.y * me.timer.tick;
			}
			
			//console.log("fps:" +me.sys.fps);
			//console.log("collsionMap: "+me.game.collisionMap.orientation);
			//console.log(me.game.currentLevel.getLayerByName("Drawthisplease"));
			//console.log("collsionMapTile: "+me.game.currentLevel.getLayerByName("Drawthisplease").getTileId(this.pos.x,this.pos.y));
			//console.log("collsionTileShape: "+me.game.currentLevel.getLayerByName("Drawthisplease").shapeType);
			this.updateMovement();
			this.parent();
			return true;
		},
	});