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
			this.margin = 14;
			this.invLength = 0;
			this.addInventorySlots();
			this.addItems(items);
			this.addInventoryBalk();
		},

		addInventorySlots : function () {
			for (var i = 0; i < constants.INVENTORY_SLOTS; i++) {
				this.addChild(new game.UIImage((constants.INVENTORY_SLOT_SIZE + this.margin) * i + 128,
						constants.SCREENHEIGHT - (constants.INVENTORY_SLOT_SIZE + 17), "inventorySlot"));
			}
		},

		addInventoryBalk : function () {
			this.addChild(new game.UIImage(0, constants.SCREENHEIGHT - 128, "inventorybalk"));
		},

		addItems : function (items) {
			for (var i = 0; i < items.length; i++) {
				this.addItem(items[i]);
			}
		},

		addItem : function (item) {
			//Put the items in an array to access them later
			var gui_item = new game.HUD.Inventory.InventoryItem((constants.INVENTORY_SLOT_SIZE + this.margin) * this.items.length + 145,
					constants.SCREENHEIGHT - constants.INVENTORY_SLOT_SIZE, {
					image : item + "_inv",
					name : item,
					spriteWidth : 64,
					spriteHeight : 64
				});
			this.addChild(gui_item);
			this.items.push(gui_item);
		},

		removeItem : function (item) {
			for (var i = 0; i < this.items.length; i++) {
				if (this.items[i].name === item) { //Check for item to remove
					var gui_item = this.items.splice(i, 1)[0]; //Get the first element of the array that gets returned
					this.removeChild(gui_item);
					this.fixItemPositions(i);
					return;
				}
			}
		},

		fixItemPositions : function (index) {
			for (var i = index; i < this.items.length; i++) {
				this.items[i].pos.x = i * constants.INVENTORY_SLOT_SIZE; //Put the items in the right spot so when an item gets added it will be in an empty spot.
			}
		},

		remove : function () {
			me.game.world.removeChild(this);
		},
	});

/**
 *  Inventory Items. Displays the Item. Has no further use.
 */

game.HUD.Inventory.InventoryItem = game.UIButton.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.floating = true;
			this.z = 1;
			this.tooltip = new game.UIText(x - 40, y - 40, "font", this.name);
			me.game.world.addChild(this.tooltip, Infinity + 1001);
		},

		onClick : function () {
			console.log("open brief");
		},

		onHover : function (bool) {
			if (bool) {
				//fuck alpha
				this.tooltip.replaceText(this.name);
			} else {
				this.tooltip.replaceText("");
			}

		}
	});