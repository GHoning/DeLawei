/**
 *  The games play screen. Used too handle level switches and inventory guffins
 */
game.PlayScreen = me.ScreenObject.extend({
		
		onResetEvent : function () {
			me.levelDirector.loadLevel("grandhall");
			game.data.score = 0;
			this.HUD;
			this.Inventory;
			this.addHUD();
			this.checkQuestItems();
			this.checkItems();
		},
		
		addInventory : function () {
			this.Inventory = new game.Inventory.Container();
			me.game.add(this.Inventory);
		},
		
		addHUD :  function () {
			this.HUD = new game.HUD.Container();
			me.game.add(this.HUD);
		},
		
		checkItems : function () {
			var itemInArea = me.game.getEntityByName("itemObject");
			
			for (i = 0; i < game.data.inventory.length; i++) {
				if(itemInArea.length > 0){
					if(game.data.inventory[i] == itemInArea[0].image){
						me.game.remove(itemInArea[0]);
					}
				}
			}
		},
		
		checkQuestItems : function () {
			var itemInArea = me.game.getEntityByName("itemObject");
			
			console.log("itemInArea " + itemInArea[0].image);
			console.log("questItems " + game.data.questItems);
			
			for (i = 0; i < itemInArea.length; i++) {
				console.log("1");
				if(itemInArea[0].image != game.data.questItems[i]) {
					me.game.remove(itemInArea[i]);
				}
			}
		},
		
		onDestroyEvent : function () {
			me.game.world.removeChild(me.game.world.getEntityByProp("name", "HUD")[0]);
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
					player[0].pos.x = spawn.pos.x;
					player[0].pos.y = spawn.pos.y;
				}
			}

			//face player the right way
			/*if (settings.direction == "left") {
			player[0].flipX(true);
			} else {
			player[0].flipX(false);
			}*/

			me.game.viewport.fadeOut(settings.fade, settings.duration);

			this.checkQuestItems();
			this.checkItems();
			game.data.drawText = "";
		}
	});
