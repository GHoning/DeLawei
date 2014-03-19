game.EndScreen = me.ScreenObject.extend({

		init : function () {
			this.parent(true);

			this.title = null;
			this.font = null;
			this.craftingSpotList = [];
			this.inventoryItemList = [];
		},

		/**
		 *  action to perform on state change
		 */
		onResetEvent : function () {
			if (this.title == null) {
				this.title = me.loader.getImage("EndScreen");
			}
		},



		draw : function (context) {
			context.drawImage(this.title, 0, 0);
		}

	});
