function Collision(collisionMap) {
	this.collisionMap = collisionMap;
	this.maxHeight = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).rows;
	this.maxWidth = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).cols;
	
	this.addNPCsToCollision = function () {
		var NPCs = me.game.world.getChildByName("npc");

		if (NPCs.length > 0) {
			for (var i = 0; i < NPCs.length; i++) {
				this.collisionMap[NPCs[i].mapPosX][NPCs[i].mapPosY] = {
					obj : NPCs[i].settings.name,
					name : NPCs[i].settings.image,
					type : NPCs[i].settings.type
				};
			}
		}
	}
	
	this.addItemsToCollision = function () { 
		var items = me.game.world.getChildByName("item");

		if (items.length > 0) {
			for (var i = 0; i < items.length; i++) {
				this.collisionMap[items[i].mapPosX][items[i].mapPosY] = {
					obj : items[i].settings.name,
					name : items[i].settings.image,
					type : items[i].settings.type
				};
			}
		}
	}
	
	this.addDoorsToCollision = function () {
		var doors = me.game.world.getChildByName("door");

		if (doors.length > 0) {
			for (var i = 0; i < doors.length; i++) {
				this.collisionMap[doors[i].mapPosX1][doors[i].mapPosY1] = {
					name : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY,
					type : doors[i].settings.type
				};
				this.collisionMap[doors[i].mapPosX2][doors[i].mapPosY2] = {
					name : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY,
					type : doors[i].settings.type
				};
				this.collisionMap[doors[i].mapPosX3][doors[i].mapPosY3] = {
					name : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY,
					type : doors[i].settings.type
				};
				this.collisionMap[doors[i].mapPosX4][doors[i].mapPosY4] = {
					name : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY,
					type : doors[i].settings.type
				};
			}
		}
	}
	
	this.addSceneryToCollision = function () {
		var scenery = me.game.world.getChildByName("scenery");
		
		if (scenery.length > 0) {
			for (var i = 0; i < scenery.length; i++) {
				this.collisionMap[scenery[i].mapPosX][scenery[i].mapPosY] = {
					type : scenery[i].settings.type
				};
			}
		}
	}

	//collision with npc none with the rest.
	this.isWalkable = function (x, y) {
		if (this.collisionMap[x][y] != null) {
			//think of a better algorithm
			if (this.collisionMap[x][y].type == "none") {
				return true;
			} else if(this.collisionMap[x][y].type !== "solid") {
				return false;
			} else  if (this.collisionMap[x][y].type == "solid") {
				return false;
			} else {
				return true;
			}
		}
		return true;
	}
	
	this.getTile = function (x, y) {
		return this.collisionMap[x][y];
	}
	
	this.clearTile = function (x, y){
		this.collisionMap[x][y] = null;
	}
	
	this.isNextToNPC = function (x, y) {
		if(this.collisionMap[x][y-1] != null) {
			if(this.collisionMap[x][y-1].obj == "npc") {
				game.data.lastSpokenNPC = this.collisionMap[x][y-1].name;
				var npc = me.game.world.getChildByName("npc");
				
				for (var i = 0; i < npc.length; i++) {
					if(npc[i].image == this.collisionMap[x][y-1].name) {
						npc[i].lookAt("down");
					}
				}
				
				return true;
			}
			
			return false;
		}
		
		if(this.collisionMap[x-1][y] != null) {
			if(this.collisionMap[x-1][y].obj == "npc") {
				game.data.lastSpokenNPC = this.collisionMap[x-1][y].name;
				var npc = me.game.world.getChildByName("npc");
				
				for (var i = 0; i < npc.length; i++) {
					if(npc[i].image == this.collisionMap[x-1][y].name) {
						npc[i].lookAt("up");
					}
				}
				
				return true;
			}
			
			return false;
		}
		
		if(this.collisionMap[x][y+1] != null) {
			if(this.collisionMap[x][y+1].obj == "npc") {
				game.data.lastSpokenNPC = this.collisionMap[x][y+1].name;
				var npc = me.game.world.getChildByName("npc");
				
				for (var i = 0; i < npc.length; i++) {
					if(npc[i].image == this.collisionMap[x][y+1].name) {
						npc[i].lookAt("right");
					}
				}
				
				return true;
			}
			
			return false;
		}
		
		if(this.collisionMap[x+1][y] != null) {
			if(this.collisionMap[x+1][y].obj == "npc") {
				game.data.lastSpokenNPC = this.collisionMap[x+1][y].name;
				var npc = me.game.world.getChildByName("npc");
				
				for (var i = 0; i < npc.length; i++) {
					if(npc[i].image == this.collisionMap[x+1][y].name) {
						npc[i].lookAt("left");
					}
				}
				
				return true;
			}
			
			return false;
		}
		
		return false;
	} 
	
	this.addNPCsToCollision();
	this.addItemsToCollision();
	this.addDoorsToCollision();
	this.addSceneryToCollision();
}