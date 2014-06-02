/**
 *  ItemObject. Specifics are filled in using tiled.
 */
game.Item = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.mapPosX = settings.mapPosX;
			this.mapPosY = settings.mapPosY;
			this.spritewidth = settings.spritewidth;
			this.spriteheight = settings.spriteheight;
			this.type = settings.type;
			this.gravity = false;
			console.log("item created");
		}
	});
	
/**
 *  DoorObject. Specifics are filled in using tiled.
 */
game.Door = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			
			this.level = settings.level;
			this.mapX = settings.mapX;
			this.mapY = settings.mapY;
			this.playerX = settings.playerX;
			this.playerY = settings.playerY;
			
			this.mapPosX1 = settings.tile1x;
			this.mapPosX2 = settings.tile2x;
			this.mapPosX3 = settings.tile3x;
			this.mapPosX4 = settings.tile4x;
			
			this.mapPosY1 = settings.tile1y;
			this.mapPosY2 = settings.tile2y;
			this.mapPosY3 = settings.tile3y;
			this.mapPosY4 = settings.tile4y;
			
			this.type = settings.type;
			
			this.gravity = false;
			console.log("door created");
		}
	});

/**
 *  The QuestNPCObject specifics are filled using tiled.
 */
game.QuestNPC = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.settings = settings;
			this.image = settings.image;
			this.mapPosX = settings.mapPosX;
			this.mapPosY = settings.mapPosY;
			this.type = settings.type;
			this.gravity = false;
			this.z = 20;
			this.renderable = new me.AnimationSheet(0, 0, me.loader.getImage(settings.image), 128,256);
			this.renderable.addAnimation("direction", [0, 1, 2, 3]);
			this.renderable.setCurrentAnimation("direction");
			me.game.world.sort();
			console.log("npc Created")
		},

		update : function () {
			return false;
		},
		
		setZ : function (num) {
			this.z = num;
			me.game.world.sort();
		},
		
		lookAt : function (direction) {
			switch(direction) {
				case "down":
					this.renderable.setAnimationFrame(0);
					break;
				case "left":
					this.renderable.setAnimationFrame(1);
					break;
				case "right":
					this.renderable.setAnimationFrame(2);
					break;
				case "up":
					this.renderable.setAnimationFrame(3);
					break;
			}	
		},
		
		addQuestReaction : function (txt) {
			this.questReaction = new game.HUD.Questfield(this.pos.x + 96 , this.pos.y - 32 , txt);
			me.game.add(this.questReaction, 1002);
		}
	});