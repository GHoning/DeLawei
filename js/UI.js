/*
 *	Button to make buttons
 */
game.UIButton = me.ObjectEntity.extend({
	init : function(x, y, settings) {
		this.parent(x, y, settings);
		this.keyLock = false;
		this.floating = true;
		this.imgButton = new me.AnimationSheet(0, 0, me.loader.getImage(settings.image), settings.spriteWidth, settings.spriteHeight);
		//add Shape in MelonJS 1.0.0 for the collision box
		this.rect = new me.Rect(this.pos, settings.spriteWidth, settings.spriteHeight);
		this.addShape(this.rect);
	},
	
	update : function () {
		
		this.onHover(this.getShape().containsPointV(me.input.mouse.pos));
		
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			this.onClick();
			me.audio.play("click_sfx");
		}
		
		if (!me.input.isKeyPressed("mouse/touch")) {
			this.keyLock = false;
		}
		
		return true;
	},
	
	draw : function (context) {
		context.translate(this.pos.x, this.pos.y);
		this.imgButton.draw(context);
	}
});

/*
 *	Text to display text
 */
game.UIText = me.Renderable.extend({
	init : function (x, y, font, text) {
		//the 10's are irrelevant
		//TODO make var for setting length of sentences
		this.parent(new me.Vector2d(x,y), 10, 10);
		this.font = new me.BitmapFont(font, 32);
		this.font = new me.Font("Arail", 24, "#000000");
		
		this.text = text;
		this.floating = true;
		this.text = this.wordWrap(this.text, constants.TEXTWIDTH);
	},
	
	update : function () {
		//This can be changed for performance 
		return true;
	},
	
	testWhite : function(x) {
		var white = new RegExp(/^\s$/);
		return white.test(x.charAt(0));
	},
	
	wordWrap : function (str, maxWidth) {
	
		var newLineStr = "\n";
		var done = false;
		var res = '';
		
		do {
			found = false;
			
			for (i = maxWidth -1; i >= 0; i--) {
				if(this.testWhite(str.charAt(i))) {
					res = res + [str.slice(0, i), newLineStr].join('');
					str = str.slice(i + 1);
					found = true;
					break;
					
				}
			}
			
			if(!found) {
				res = res + [str.slice(0, maxWidth), newLineStr].join('');
				str = str.slice(maxWidth);
			}
			
			if(str.length < maxWidth)
				done = true;
		} while (!done);
		
		return res + str;
		
		console.log(res);
	},
	
	replaceText : function (txt) {
		this.text = this.wordWrap(txt, constants.TEXTWIDTH);
	},
	
	draw : function (context) {
		this.font.draw(context, this.text, this.pos.x, this.pos.y);
	}
});

/*
 *	Image to display images
 */
game.UIImage = me.Renderable.extend({
	init : function (x, y, image) {
		this.parent(x, y, image);
		this.pos.x = x;
		this.pos.y = y;
		this.image = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage(image));
		this.floating =  true;
	},
	
	update : function () {
		//This can be changed for performance
		return true;
	},
	
	draw : function (context) {
		this.image.draw(context, this.pos.x, this.pos.y);
	}	
});