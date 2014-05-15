/**
 * Inventory Container
 */
game.HUD.Inventory = game.HUD.Inventory || {};

game.HUD.Inventory.Container = me.ObjectContainer.extend({

		init : function (items) {
			this.parent();
			//this.isPersistent = true;
			this.items = [];
			this.collidable = false;
			this.z = Infinity;
			this.name = "Inventory";
			this.invLength = 0;
			this.addInventorySlots();
			this.addItems(items);
		},
		
		addInventorySlots : function () {
			for (var i = 0; i < constants.INVENTORY_SLOTS; i++) {
				this.addChild(new game.HUD.Inventory.InventorySlot(constants.INVENTORY_SLOT_SIZE * i,
																   constants.SCREENHEIGHT - constants.INVENTORY_SLOT_SIZE));
			}
		},

		addItems : function (items) {
			for (var i = 0; i < items.length; i++) {
				this.addItem(items[i]);
			}
		},
		
		addItem : function(item) {
			var gui_item = new game.HUD.Inventory.InventoryItem(constants.INVENTORY_SLOT_SIZE * this.items.length,
																constants.SCREENHEIGHT - constants.INVENTORY_SLOT_SIZE, item);
			this.addChild(gui_item);
			this.items.push(gui_item);
		},
		
		removeItem : function(item) {
			for (var i = 0; i < this.items.length; i++) {
				if (this.items[i].name === item) {
					var gui_item = this.items.splice(i, 1)[0];
					this.removeChild(gui_item);
					this.fixItemPositions(i);
					return;
				}
			}
		},
		
		fixItemPositions : function (index) {
			for (var i = index; i < this.items.length; i++) {
				this.items[i].pos.x = i * constants.INVENTORY_SLOT_SIZE;
				console.log(this.items[i]);
			}
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
game.HUD.Inventory.InventoryItem = me.AnimationSheet.extend({
		init : function (x, y, image) {
			this.parent(x, y, me.loader.getImage(image + "_inv"), 128, 128);
			this.floating = true;
			this.z = 1;
			this.name = image;
		},
	});