/**
 *  The games play screen. Used too handle level switches and inventory guffins
 */
game.PlayScreen = me.ScreenObject.extend({
		
		onResetEvent : function () {
			me.levelDirector.loadLevel(game.data.currentLevel);
			game.data.score = 0;
			this.HUD;
			this.Inventory;
			this.addHUD();
			this.checkQuestItems();
			this.checkItems();
			this.placePlayer(game.data.playerPosX, game.data.playerPosY);
			
		},
		
		addInventory : function () {
			this.Inventory = new game.Inventory.Container();
			me.game.world.addChild(this.Inventory);
		},
		
		addHUD :  function () {
			this.HUD = new game.HUD.Container();
			me.game.world.addChild(this.HUD);
		},
		
		placePlayer : function (x, y) {
			var player = me.game.world.getChildByName("playerObject");
			player[0].pos.x = x;
			player[0].pos.y = y;
		},
		
		checkItems : function () {
			var itemInArea = me.game.world.getChildByName("itemObject");
			
			for (i = 0; i < game.data.inventory.length; i++) {
				if(itemInArea.length > 0){
					if(game.data.inventory[i] == itemInArea[0].image){
						me.game.remove(itemInArea[0]);
					}
				}
			}
		},
		
		checkQuestItems : function () {
			var itemInArea = me.game.world.getChildByName("itemObject");
			
			for (i = 0; i < itemInArea.length; i++) {
				if(itemInArea[0].image != game.data.questItems[i]) {
					me.game.remove(itemInArea[i]);
				}
			}
		},
		
		onDestroyEvent : function () {
			me.game.world.removeChild(me.game.world.getChildByName("HUD")[0]);
		},

		loadLevel : function (settings) {
			this.settings = settings;
			me.game.viewport.fadeIn(settings.fade, settings.duration);
			var previousLevel = me.levelDirector.getCurrentLevelId();
			me.levelDirector.loadLevel(settings.to);

			var spawnList = me.game.getEntityByName("Spawnpoint");
			var player = me.game.getEntityByName("playerObject");
			var spawn;

			for (var i = 0; i < spawnList.length; i++) {
				spawn = spawnList[i];
				if (spawn.from == previousLevel) {
					this.placePlayer(spawn.pos.x, spawn.pos.y);
				}
			}

			me.game.viewport.fadeOut(settings.fade, settings.duration);

			this.checkQuestItems();
			this.checkItems();
			game.data.drawText = "";
		}
	});
