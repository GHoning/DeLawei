/**
 * Inventory Container
 */
game.HUD.Inventory = game.HUD.Inventory || {};

game.HUD.Inventory.Container = me.ObjectContainer.extend({

		init : function (items) {
			this.parent();
			//this.isPersistent = true;
			this.collidable = false;
			this.z = Infinity;
			this.name = "Inventory";
			this.invLength = 0;
			this.addInventorySlots();
			this.addItems(items);
		},
		
		addInventorySlots : function () {
			for (i = 0; i < constants.INVENTORY_SLOTS; i++) {
				this.addChild(new game.HUD.Inventory.InventorySlot(128 * i, constants.SCREENHEIGHT - 128));
			}
		},

		addItems : function (items) {
			for (i = 0; i < items.length; i++) {
				this.addItem(items[i]);
			}
		},
		
		addItem : function(item) {
			console.log(this.invLength);
			this.addChild(new game.HUD.Inventory.InventoryItem(128 * this.invLength, constants.SCREENHEIGHT - 128, item));
			this.invLength++;
		},

		remove : function () {
			me.game.world.removeChild(this);
		},
	});
/**
 *  InventorySlot Renderable. This displays the slots to place the InventoryItems on.
 */
game.HUD.Inventory.InventorySlot = me.Renderable.extend({
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
game.HUD.Inventory.InventoryItem = me.Renderable.extend({
		init : function (x, y, image) {
			this.parent(new me.Vector2d(x, y), 128, 128);
			this.floating = true;
			this.inventoryItems = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image + "_inv"), 128, 128);
			this.z = 1;
		},

		draw : function (context) {
			this.inventoryItems.draw(context);
		}
	});