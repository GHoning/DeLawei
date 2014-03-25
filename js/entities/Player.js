/**
 *  PlayerObject used to control the player
 */
game.playerObject = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			//wtf? 
			this.parent(x, y, settings);
			//tiled?
			this.settings = settings;
			//follow player
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			//set velocity
			this.setVelocity(settings.speedX, settings.speedY);
			//set friction dafuq?
			this.setFriction(settings.friction, settings.friction);
			//turn gravity off
			this.gravity = false;
			//sladoos
			this.updateColRect(128 - 114, 100, 256 - 50, 50);
			//tag as player
			this.type = me.game.PLAYER;
		},

		update : function () {
			if (me.input.isKeyPressed("Up")) {
				this.vel.y -= this.accel.y * me.timer.tick;
			}

			if (me.input.isKeyPressed("Left")) {
				this.vel.x -= this.accel.x * me.timer.tick;
			}

			if (me.input.isKeyPressed("Down")) {
				this.vel.y += this.accel.y * me.timer.tick;
			}

			if (me.input.isKeyPressed("Right")) {
				this.vel.x += this.accel.x * me.timer.tick;
			}

			this.updateMovement();
			this.parent();
			return true;
		}
	});