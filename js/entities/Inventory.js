/**
 * Inventory Container
 */
game.Inventory = game.Inventory || {};

game.Inventory.Container = me.ObjectContainer.extend({

		init : function () {
			this.parent();
			this.isPersistent = true;
			this.collidable = false;
			this.z = Infinity;
			this.name = "Inventory";
			this.addButton();
			this.addInventorySlots();
			this.addItemToSlots();
			
		},
		
		addButton : function () {
			this.addChild(new game.Inventory.gameButton(1024 - 256 , 768 - 128, {spritewidth: 256,spriteheight: 128}));
		},
		
		addInventorySlots : function () {
			for (i = 0; i <= 4; i++) {
				for (j = 0; j <= 5; j++) {
					this.addChild(new game.Inventory.InventorySlot(128 +(128*i), 768 -(128 * j)));
				}
			}
		},
		
		addItemToSlots : function () {
			for (i = 0; i < game.data.inventory.length; i++) {
				this.addChild(new game.Inventory.InventoryItem(128 +(128*i), 768 - 128, game.data.inventory[i]));
			}
		},
		
		remove : function () {
			me.game.world.removeChild(this);
		}
	});
	
/**
 *  Button Class for Inventory. returns to game.
 */
game.Inventory.gameButton = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("gameButton"), 256, 128);
			//add Shape in MelonJS 1.0.0 for the collision box
			this.rect = new me.Rect(this.pos, 256, 128);
			this.addShape(this.rect);
		},

		update : function () {
			this.imgButton.setAnimationFrame(0);
			
			if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
				this.keyLock = true;
				
				game.play.Inventory.remove();
				game.play.addHUD();
			}

			if (!me.input.isKeyPressed("mouse/touch")) {
				this.keyLock = false;
			}
			
			return true;
		},

		draw : function (context) {
			this.imgButton.draw(context);
		}
	});
	
/**
 *  InventorySlot Renderable. This displays the slots to place the InventoryItems on.
 */
game.Inventory.InventorySlot = me.Renderable.extend({
		init : function (x, y) {
			this.parent(new me.Vector2d(x, y), 0, 0);
			this.floating = true;
			this.inventryslotsprite = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("inventorySlot"), 128, 128);
		},

		update : function () {
			this.inventryslotsprite.setAnimationFrame(0);
			return true;
		},

		draw : function (context) {

			this.inventryslotsprite.draw(context);
		}
	});
	
/**
 *  Inventory Items. Displays the Item. Has no further use.
 */
game.Inventory.InventoryItem = me.Renderable.extend({
		init : function (x, y, image) {
			this.parent(new me.Vector2d(x, y), 128, 128);
			this.floating = true;
			this.inventoryItems = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image+"_inv"), 128, 128);
			this.z = 1;
		},
		
		draw : function (context) {
			this.inventoryItems.draw(context);
		}
	});