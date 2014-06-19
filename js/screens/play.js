/**
 *  The games play screen. Used too handle level switches and inventory
 */
game.PlayScreen = me.ScreenObject.extend({

		onResetEvent : function () {
			me.levelDirector.loadLevel(game.data.currentLevel);
			this.HUD;
			this.addHUD();
			this.collision = new Collision(me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).layerData);
			this.placePlayer(game.data.playerPos);
			this.itemOnReset();
			
			
			if(game.data.questStateMachine.getStatus() == "brief"){
				try {
					game.play.HUD.addChild(new game.HUD.Inventory.ShowItem((constants.SCREENWIDTH / 2) - 256, 20, {image: "brief_showItem", spriteWidth: 512, spriteHeight: 608}));
				} catch(err) {
					console.log(err.message);
				}
			}
		},

		addHUD : function () {
			this.HUD = new game.HUD.Container();
			me.game.world.addChild(this.HUD);
		},

		placePlayer : function (pos) {
			var player = me.game.world.getChildByName("player");
			player[0].pos.x = pos.x;
			player[0].pos.y = pos.y;
		},

		onDestroyEvent : function () {
			var player = me.game.world.getChildByName("player");
			game.data.playerPos = player[0].pos;
			game.data.currentLevel = me.levelDirector.getCurrentLevelId();
		},

		checkInventory : function (item) {
			for (var i = 0; i <= game.data.inventory.length; i++) {
				if (game.data.inventory[i] == item) {
					return false;
				}
			}

			return true;
		},
		
		itemOnReset : function () {
		//TODO fix this with quest-states 
			var items = me.game.world.getChildByName("item");
			
			for(var i = 0; i < items.length; i++) {
				for (var j = 0; j < game.data.inventory.length; j++) {
					if(items[i].settings.image == game.data.inventory[j]) {
						me.game.world.removeChild(items[i]);
					}
				}
			}
		},

		addItemToInventory : function (item) {
			game.data.inventory.push(item);
			this.HUD.inventory.addItem(item);
			me.audio.play("itempickup_sfx");
		},

		removeItemFromInventory : function (item) {
			var index = game.data.inventory.indexOf(item);
			if (index != -1) {
				game.data.inventory.splice(index, 1);
				this.HUD.inventory.removeItem(item);
			}
		},

		loadLevel : function (level, x, y, mapX, mapY) {
			me.levelDirector.loadLevel(level);
			var player = me.game.world.getChildByName("player");
			player[0].mapPos.x = mapX;
			player[0].mapPos.y = mapY;
			player[0].pos.x = x;
			player[0].pos.y = y;
			this.itemOnReset();
			this.addHUD();
			this.collision = new Collision(me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).layerData);
			
			if(me.levelDirector.getCurrentLevelId() == "theater" && game.data.questStateMachine.getIndex(game.data.questStateMachine.getStatus()) > game.data.questStateMachine.indexes.get_note1) {
				var sceneries = me.game.world.getChildByName("scenery");
					//add Notenschrift 1
				for(var i = 0; i < sceneries.length; i++) {
					if(sceneries[i].n == 1) {
						sceneries[i].setAnimationFrameTo(0);
					}
				}
			}
			
			game.data.spokenRandy = false;
		}
	});
