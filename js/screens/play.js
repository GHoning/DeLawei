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
			this.placePlayer(game.data.playerPos);
		},
		
		addNPCToCollision : function(collisionMap) {
			var NPCs = me.game.world.getChildByName("npc");
			
			if(NPCs.length > 0) {
				for(var i = 0; i < NPCs.length; i++) {
					collisionMap[NPCs[i].mapPosX][NPCs[i].mapPosY] = {type: NPCs[i].settings.name, name: NPCs[i].settings.image};
				}
			}
			
			return collisionMap;
		},
		
		addItemsToCollision : function(collisionMap) {
			var items = me.game.world.getChildByName("item");
			
			if(items.length > 0) {
				for(var i = 0; i < items.length; i++) {
					collisionMap[items[i].mapPosX][items[i].mapPosY] = {type: items[i].settings.name, name: items[i].settings.image};
				}
			}
			
			return collisionMap;
		},
		
		addDoorsToCollision : function(collisionMap) {
			var doors = me.game.world.getChildByName("door");

			if(doors.length > 0) {
				//TODO AddItemtoo collision
				for (var i = 0; i < doors.length; i++) {	
					collisionMap[doors[i].mapPosX1][doors[i].mapPosY1] = {type: doors[i].name, level: doors[i].level, mapX: doors[i].mapX, mapY: doors[i].mapY, playerX: doors[i].playerX, playerY: doors[i].playerY};
					collisionMap[doors[i].mapPosX2][doors[i].mapPosY2] = {type: doors[i].name, level: doors[i].level, mapX: doors[i].mapX, mapY: doors[i].mapY, playerX: doors[i].playerX, playerY: doors[i].playerY};
					collisionMap[doors[i].mapPosX3][doors[i].mapPosY3] = {type: doors[i].name, level: doors[i].level, mapX: doors[i].mapX, mapY: doors[i].mapY, playerX: doors[i].playerX, playerY: doors[i].playerY};
					collisionMap[doors[i].mapPosX4][doors[i].mapPosY4] = {type: doors[i].name, level: doors[i].level, mapX: doors[i].mapX, mapY: doors[i].mapY, playerX: doors[i].playerX, playerY: doors[i].playerY};
					console.log(collisionMap[doors[i].mapPosX1][doors[i].mapPosY1]);
				}
			}
			
			return collisionMap;
		},
		
		getCollisionMap : function () {
			//TODO add the object Items and doors and NPCs
			me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).alpha = 0;
			var collisionMap = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).layerData;
			collisionMap = this.addNPCToCollision(collisionMap);
			collisionMap = this.addItemsToCollision(collisionMap);
			collisionMap = this.addDoorsToCollision(collisionMap);
			
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
			game.data.playerPos = player[0].pos;
			//TODO clean up
			/*try {
			me.game.world.removeChild(me.game.world.getChildByName("HUD")[0]);
			} catch (e) {
				console.log(this);
				console.log(e);
			}*/
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
		
		addItemToInventory : function (item) {
			if(this.checkInventory(item)){
				game.data.inventory.push(item);
				this.HUD.inventory.addItem(item);
				//go over list and find the right item through name
				var items = me.game.world.getChildByName("item");
				
				me.game.world.removeChild(items[0]);
				
				console.log(game.data.inventory);
			}
		},

		loadLevel : function (level, x, y, mapX, mapY) {
			console.log(level);
			me.levelDirector.loadLevel(level);
			var player = me.game.world.getChildByName("player");
			player[0].mapPos.x = mapX;
			player[0].mapPos.y = mapY;
			player[0].pos.x = x;
			player[0].pos.y = y;
			this.collisionMap = this.getCollisionMap();
		}
	});
