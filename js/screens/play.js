/**
 *  The games play screen. Used too handle level switches and inventory guffins
 */
game.PlayScreen = me.ScreenObject.extend({
		
		onResetEvent : function () {
			me.levelDirector.loadLevel(game.data.currentLevel);
			game.data.score = 0;
			this.HUD;
			this.NotebookScreen;
			this.addHUD();
			this.collisionMap = this.getCollisionMap();
		},
		
		getCollisionMap : function () {
			me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).alpha = 0;
			var collisionMap = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).layerData;
			return collisionMap;
		},
		
		addHUD :  function () {
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
			game.data.playerPos = new me.Vector2d(player[0].pos.x, player[0].pos.y);
			me.game.world.removeChild(me.game.world.getChildByName("HUD")[0]);
		},
		
		checkInventory : function (item) {
			for( var i = 0; i <= game.data.inventory.length; i++) {
				if(game.data.inventory[i] == item) {
					return false;
				}
			}
			
			return true;
		},
		
		//if Items is in inventory remove from world
		itemOnReset : function (item) {
			
		},
		
		getFucked : function (name) {
			console.log(name + " got Fucked!");
		},
		
		addItemToInventory : function (item) {
			if(this.checkInventory(item)){
				game.data.inventory.push(item);
				
				//go over list and find the right item through name
				var items = me.game.world.getChildByName("item");
				
				me.game.world.removeChild(items[0]);
				
				console.log(game.data.inventory);
			}
		},

		loadLevel : function (level, x, y, mapX, mapY) {
			me.levelDirector.loadLevel(level);
			var player = me.game.world.getChildByName("player");
			player[0].mapPos.x = mapX;
			player[0].mapPos.y = mapY;
			this.collisionMap = this.getCollisionMap();
			//TODO add x,y to player.pos
		}
	});
