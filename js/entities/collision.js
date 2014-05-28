function Collision(collisionMap) {
	this.collisionMap = collisionMap;
	this.maxHeight = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).rows;
	this.maxWidth = me.game.currentLevel.getLayerByName(constants.ISOCOLL_LAYER).cols;
	
	this.addNPCsToCollision = function () {
		var NPCs = me.game.world.getChildByName("npc");

		if (NPCs.length > 0) {
			for (var i = 0; i < NPCs.length; i++) {
				this.collisionMap[NPCs[i].mapPosX][NPCs[i].mapPosY] = {
						type : NPCs[i].settings.name,
						name : NPCs[i].settings.image
				};
			}
		}
	}
	
	this.addItemsToCollision = function () { 
		var items = me.game.world.getChildByName("item");

		if (items.length > 0) {
			for (var i = 0; i < items.length; i++) {
				this.collisionMap[items[i].mapPosX][items[i].mapPosY] = {
					type : items[i].settings.name,
					name : items[i].settings.image
				};
			}
		}
	}
	
	this.addDoorsToCollision = function () {
		var doors = me.game.world.getChildByName("door");

		if (doors.length > 0) {
			for (var i = 0; i < doors.length; i++) {
				this.collisionMap[doors[i].mapPosX1][doors[i].mapPosY1] = {
					type : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY
				};
				this.collisionMap[doors[i].mapPosX2][doors[i].mapPosY2] = {
					type : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY
				};
				this.collisionMap[doors[i].mapPosX3][doors[i].mapPosY3] = {
					type : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerY
				};
				this.collisionMap[doors[i].mapPosX4][doors[i].mapPosY4] = {
					type : doors[i].name,
					level : doors[i].level,
					mapX : doors[i].mapX,
					mapY : doors[i].mapY,
					playerX : doors[i].playerX,
					playerY : doors[i].playerYa
				};
			}
		}
	}
	
	this.checkPosition = function (vec2) {
		
	}
	
	this.addNPCsToCollision();
	this.addItemsToCollision();
	this.addDoorsToCollision();
}