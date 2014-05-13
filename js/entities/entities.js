/**
 *  ItemObject. Specifics are filled in using tiled.
 */
game.Item = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			console.log("item");
			this.parent(x, y, settings);
			this.settings = settings;
			this.image = settings.image;
			this.name = settings.name;
			this.spritewidth = settings.spritewidth;
			this.spriteheight = settings.spriteheight;
			this.gravity = false;
			console.log("item_build");
		}
	});

/**
 *  The QuestNPCObject specifics are filled using tiled.
 */
game.QuestNPC = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			console.log("npc");
			this.parent(x, y, settings);
			this.settings = settings;
			this.image = settings.npc_name;
			this.questName = settings.questname;
			this.requires = settings.requires;
			this.gravity = false;
			console.log("npc_build");
		},

		update : function () {
			
		},
		
		addQuestReaction : function (txt) {
			this.questReaction = new game.HUD.Questfield(this.pos.x + 96 , this.pos.y - 32 , txt);
			me.game.add(this.questReaction, 1002);
		}
	});