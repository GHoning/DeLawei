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
		},
		
		update : function () {
		
			if (me.input.isKeyPressed("Talk")) {
				me.state.change(me.state.READY);
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

			this.updateMovement();
			this.parent();
			return true;
		},
	});