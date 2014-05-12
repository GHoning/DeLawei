/**
 *  ItemObject. Specifics are filled in using tiled.
 */
game.item = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.image = settings.image;
			this.name = settings.name;
			this.spritewidth = settings.spriteWidth;
			this.spriteheight = settings.spriteHeight;
			this.gravity = false;
		}
	});

/**
 *  The QuestNPCObject specifics are filled using tiled.
 */
/*game.QuestNPCObject = me.ObjectEntity.extend({
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
			/*if(game.data.currentQuestState == "accept") {
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
	});*/