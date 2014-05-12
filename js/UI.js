game.UIButton = me.ObjectEntity.extend({
	init : function(x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = false;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(settings.image), settings.spriteWidth, settings.spriteHeight);
		//add Shape in MelonJS 1.0.0 for the collision box
		this.rect = new me.Rect(this.pos, settings.spriteWidth, settings.spriteHeight);
		this.addShape(this.rect);
		
	},
	
	update : function () {
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			this.onClick();
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

game.UIText = me.Renderable.extend({
	init : function (x, y, font, text) {
		//the 10's are irrelevant
		this.parent(new me.Vector2d(x,y), 10, 10);
		this.font = new me.BitmapFont(font, 32);
		this.text =  text;
		this.floating = true;
	},
	
	update : function () {
		//This can be changed for performance 
		return true;
	},
	
	draw : function (context) {
		this.font.draw(context, this.text, this.pos.x, this.pos.y);
	}
});


game.UIImage = me.Renderable.extend({
	init : function (x, y, image, spriteWidth, spriteHeight) {
		this.parent(x, y, image, spriteWidth, spriteHeight);
		this.pos.x = x;
		this.pos.y = y;
		this.image = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image), spriteWidth, spriteHeight);
		this.floating =  true;
	},
	
	update : function () {
		//This can be changed for performance
		return true;
	},
	
	draw : function (context) {
		this.image.draw(context);
	}	
});