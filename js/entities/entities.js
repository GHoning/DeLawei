/**
 *  Player by Gerard soon to be replace by awesome!
 */
/*game.playerObject = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			this.setVelocity(settings.speed, settings.speed);
			this.setFriction(3, 3);
			this.gravity = false;
			this.updateColRect(128 - 114, 100, 256 - 50, 50);
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
	});*/

/**
 *  ItemObject. Specifics are filled in using tiled.
 */
game.itemObject = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.image = settings.image;
			this.setVelocity(6, 6);
			this.setFriction(3, 3);
			this.gravity = false;
			this.collidable = true;
		},

		update : function () {
			this.updateMovement();
			this.parent();

			var res = me.game.collide(this);

			if (res) {
				if (res.obj.type == me.game.PLAYER) {
					if (me.input.isKeyPressed("Use")) {
						game.data.inventory.push(this.image);
						me.game.remove(this);
					}
				}
			}
			
			return true;
		}
	});

/**
 *  The QuestNPCObject specifics are filled using tiled.
 */
game.QuestNPCObject = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.requires = settings.requires;
			this.image = settings.image;
			this.setVelocity(6, 6);
			this.setFriction(3, 3);
			this.gravity = false;
			this.keyLock = false;
		},

		update : function () {
			this.updateMovement();
			this.parent

			var res = me.game.collide(this);

			if (res) {
				if (res.obj.type == me.game.PLAYER) {
					if (me.input.isKeyPressed("Use") && !this.keyLock) {
						if(game.data.inventory[0] != this.requires) {
							console.log("I WANT! " + this.requires);
							game.data.drawText = "I WOULD LIKE A " + this.requires.toUpperCase() + "\n ,PLEASE?";
							game.play.HUD.addTextfield();
							game.data.questItems.push(this.requires);
						} else {
							console.log("Thanks for " + this.requires);
							game.data.drawText = "THANKS FOR " + this.requires.toUpperCase();
							game.play.HUD.addTextfield();
						}
						this.keyLock = true;
					}
				}
			}

			if (!me.input.isKeyPressed("Use") && this.keyLock) {
				this.keyLock = false;
			}

			return true;
		}
	});

/**
 *  Spawnpoint x,y are used for player placement
 */
game.Spawnpoint = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.from = settings.from;
		}
	});

/**
 *  LevelSwitch if hit by player switch level
 */
game.LevelSwitch = me.LevelEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
		},

		update : function () {
			this.updateMovement();
			this.parent();
			var res = me.game.collide(this);

			if (res) {
				if (res.obj.type == me.game.PLAYER) {
					game.play.loadLevel(this.settings);
				}
			}
			return true;
		}
	});