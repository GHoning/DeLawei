/**
 * a HUD container
 */
 
//TODO clean up this mess half of these functions don't get used because limited UI maybe move Inventory here'
game.HUD = game.HUD || {};

game.HUD.Container = me.ObjectContainer.extend({

		init : function () {
			this.parent();
			//this.isPersistent = true;
			this.collidable = false;
			this.z = Infinity;
			this.name = "HUD";
			this.addMuteButton();
			this.inventory;
			this.addInventory();
			this.addIntroduction();
		},
		
		addIntroduction : function () {
			if(game.data.firstTime) {
				this.introscreen = new game.HUD.IntroductionScreen(0, -70, {image: "introductiescherm", spriteWidth: 1024, spriteHeight: 768});
				this.addChild(this.introscreen);
				game.data.firstTime = false;
			}
		},
		
		addInventory : function() {
			this.inventory = new game.HUD.Inventory.Container(game.data.inventory);
			me.game.world.addChild(this.inventory);
		},
		
		remove :  function () {
			me.game.world.removeChild(this);
		},
		
		addMuteButton : function () {
			this.addChild(new game.HUD.MuteButton(0, 0, "muteIcon", "unmuteIcon"));
		}
	});
	
game.HUD.MuteButton = game.UIButton.extend({
	init : function(x, y, image1, image2) {
		this.muted = true;
		this.imgMuted = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image1), 64, 64);
		this.imgUnmuted = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image2), 64, 64);
		//TODO fix this isue
		//this.parent(x, y, this.imgMuted);
		
	},
	
	onClick : function() {
		if(muted){
			me.audio.muteAll();
			this.image = imgMuted;
		} else {
			me.audio.unmuteAll();
			this.image = imgUnmuted;
		}
	},
	
	
});

game.HUD.IntroductionScreen = game.UIButton.extend({
	init : function(x, y, settings) {
		this.parent(x, y, settings);
	},
	
	onClick : function() {
		me.game.world.removeChild(this);
	},
	
	onHover : function() {
		
	}
	
	
});