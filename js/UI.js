/*
 *	Button to make buttons
 */
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
		
		this.onHover(this.getShape().containsPointV(me.input.mouse.pos));
		
		
		if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
			this.keyLock = true;
			this.onClick();
			//me.audio.play("click_sfx");
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

/*
 *	Text to display text
 */
game.UIText = me.Renderable.extend({
	init : function (x, y, font, text) {
		//the 10's are irrelevant
		this.parent(new me.Vector2d(x,y), 10, 10);
		this.font = new me.BitmapFont(font, 32);
		this.font = new me.Font("Arail", 24, "#000000");
		
		this.text = text;
		this.floating = true;
		this.text = this.format(this.text, 20);
	},
	
	update : function () {
		//This can be changed for performance 
		return true;
	},
	
	format : function (text, sentenceLength) {
	
		var sentence = sentenceLength;
		
		console.log("charaters in sentence " + sentence);
		
		/*for (var i = 0; i < this.text.length; i = i + sentence) {
			console.log(i);
			//var t = this.text;
			var tt = this.text.slice(i, i + sentence);
			
			console.log(this.text);
			
			this.text = tt.replace(/ (?!.*? )/, "/n");
			
			
			console.log("index of string tt " + (tt.lastIndexOf(" ")));
			console.log("index of string tt + i " + (tt.lastIndexOf(" ") + i));

			console.log("return whitespace " + this.text[(tt.lastIndexOf(" ") + i)]);
			
			
			var repl = "12_13_12".replace(/12(?!.*?12)/, 'aa');
			
			console.log(repl);
			
			this.text[(tt.lastIndexOf(" ") + i)] = "k";
		}*/
		
		console.log(this.text);
		
		return text;
	},
	
	replaceText : function (txt) {
		this.text = txt;
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