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
			this.questName = settings.questname;
			this.setVelocity(6, 6);
			this.setFriction(3, 3);
			this.gravity = false;
			this.keyLock = false;
			
			this.questReaction;
			this.addQuestReaction("!");
		},

		update : function () {
			this.updateMovement();
			this.parent();
			/*
				Most disgusting piece of crap ever written by mankind...
			*/
			if(game.data.currentQuestState == "accept") {
				this.questReaction.change("!");
			} 
			
			if(game.data.currentQuestState == "accepted") {
				this.questReaction.change("?");
			}
			
			if(game.data.currentQuestState == "done") {
				this.questReaction.change("$");
			}

			var res = me.game.collide(this);

			if (res) {
				if (res.obj.type == me.game.PLAYER) {
					if (me.input.isKeyPressed("Use") && !this.keyLock) {
						if(game.data.inventory[0] != this.requires) {
							game.data.drawText = "I WOULD LIKE A " + this.requires.toUpperCase() + "\n ,PLEASE?";
							game.data.questItems.push(this.requires);
							game.data.quests.push(this.questName);
							game.data.currentQuestState = "accepted";
						} else {
							game.data.drawText = "THANKS FOR " + this.requires.toUpperCase();
							game.data.currentQuestState = "done";
						}
						this.keyLock = true;
					}
				}
			}

			if (!me.input.isKeyPressed("Use") && this.keyLock) {
				this.keyLock = false;
			}

			return true;
		},
		
		addQuestReaction : function (txt) {
			this.questReaction = new game.HUD.Questfield(this.pos.x + 96 , this.pos.y - 32 , txt);
			me.game.add(this.questReaction, 1002);
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
	
game.Wall = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.collidable = true;
			this.gravity = false;
			this.polons = [new me.Vector2d(this.x, this.y), new me.Vector2d(this.x +200, this.y -200),new me.Vector2d(this.x, this.y -200)]
			this.poly = new me.PolyShape(new me.Vector2d(this.x, this.y), this.polons, true);
			//this.setShape(this.poly);
			console.log(this.getBounds());
		},
		
		onCollision : function (res, obj) {
			console.log("stuff");
		},

		update : function () {
			/*var res = me.game.world.collide(this);
			if (res.obj.type == me.game.world.PLAYER) {
				console.log("toho");
			}
		
			this.updateMovement();
			this.parent();
			return true;*/
		}
	});