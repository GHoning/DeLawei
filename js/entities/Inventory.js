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
			this.itemSlotPos = 128;
			this.itemMargin = 17;
			this.invLength = 0;
			this.addInventorySlots();
			this.addItems(items);
			this.addInventoryBalk();
		},

		addInventorySlots : function () {
			for (var i = 0; i < constants.INVENTORY_SLOTS; i++) {
				this.addChild(new game.UIImage((constants.INVENTORY_SLOT_SIZE + this.margin) * i + this.itemSlotPos,
						constants.SCREENHEIGHT - (constants.INVENTORY_SLOT_SIZE + 17),
						"inventorySlot"));
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
			var gui_item = new game.HUD.Inventory.InventoryItem(this.getItemXPos(this.items.length),
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

		fixItemPositions : function(index) {
			for (var i = index; i < this.items.length; i++) {
				this.items[i].pos.x = this.getItemXPos(i); //Put the items in the right spot so when an item gets added it will be in an empty spot
			}
		},
		
		getItemXPos: function(index) {
			return (constants.INVENTORY_SLOT_SIZE + this.margin) * index + (this.itemSlotPos + this.itemMargin);
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
			this.tooltip = new game.UIText(x, y - 40, "font", this.name);
			me.game.world.addChild(this.tooltip, Infinity + 1001);
			this.onClick();
			console.log("this.onClick()");
		},
		
		update: function(dt) {
			this.parent(dt);
			return true;
		},

		onClick : function () {
			try {
				game.play.HUD.addChild(new game.HUD.Inventory.ShowItem((constants.SCREENWIDTH / 2) - 256, 20, {image: this.name + "_showItem", spriteWidth: 512, spriteHeight: 608}));
			} catch(error) {
				console.log(error);
			}
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
	
game.HUD.Inventory.ShowItem = game.UIButton.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.floating = true;
			this.z = 1;
		},

		onClick : function () {
			me.game.world.removeChild(this);
			game.data.questStateMachine.consumeEvent("read_letter");
		},

		onHover : function (bool) {
		
		}
	});