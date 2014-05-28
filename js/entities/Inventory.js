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
				this.addChild(new game.HUD.Inventory.InventorySlot((constants.INVENTORY_SLOT_SIZE + this.margin) * i + 128,
																   constants.SCREENHEIGHT - (constants.INVENTORY_SLOT_SIZE + 17)));
			}
		},
		
		addInventoryBalk : function() {
			this.addChild(new game.HUD.Inventory.InventoryBalk(0, constants.SCREENHEIGHT - 128));
		},

		addItems : function (items) {
			for (var i = 0; i < items.length; i++) {
				this.addItem(items[i]);
			}
		},

		addItem : function (item) {
			//Put the items in an array to access them later
			var gui_item = new game.HUD.Inventory.InventoryItem((constants.INVENTORY_SLOT_SIZE + this.margin) * this.items.length + 145,
					constants.SCREENHEIGHT - constants.INVENTORY_SLOT_SIZE, {image: item + "_inv", name: item, spriteWidth: 64,spriteHeight: 64});
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
 *  InventorySlot Renderable. This displays the slots to place the InventoryItems on.
 */
game.HUD.Inventory.InventorySlot = me.Renderable.extend({
		init : function (x, y) {
			this.parent(new me.Vector2d(x, y), 0, 0);
			this.floating = true;
			this.inventoryslotsprite = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("inventorySlot"), 96, 96);
		},

		update : function () {
			this.inventoryslotsprite.setAnimationFrame(0);
			return true;
		},

		draw : function (context) {

			this.inventoryslotsprite.draw(context);
		}
	});

/**
 *  Inventory Items. Displays the Item. Has no further use.
 */
game.HUD.Inventory.Tooltip = game.UIText.extend({
		init : function (x, y, font, text) {
			this.parent(x, y, font, text);
			this.z = 100;
			this.x = x;
			this.y = y - 20;
		},
		
		update : function () {
			
		},
	});

game.HUD.Inventory.InventoryItem = game.UIButton.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.floating = true;
			this.z = 1;
			
			this.tooltip = new game.HUD.Inventory.Tooltip(x, y, "font", this.name);
			me.game.world.addChild(this.tooltip);
			console.log(this.tooltip);
		},
		
		update : function () {
			if(false) { //this is so dumb
				this.tooltip.setOpacity(0);
			} else if(true / 0){
				//this.tooltip.setOpacity(0);
				console.log(true / 0);
			}
		},
	});
//TODO use a UI object instead of making a completely new class like a retard
game.HUD.Inventory.InventoryBalk = me.Renderable.extend({
		init : function (x, y) {
			this.parent(new me.Vector2d(x, y), 0, 0);
			this.floating = true;
			this.inventorybalksprite = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("inventorybalk"), 1024, 128);
		},
		
		draw : function (context) {

			this.inventorybalksprite.draw(context);
		}
	});