game.SpeechScreen = me.ScreenObject.extend({

		init : function () {
			
		},

		onResetEvent : function () {
			this.alwaysUpdate = true;
			this.textfield = new game.SpeechScreen.Textfield(0, 0);
			me.game.world.addChild(this.textfield, Infinity);
			me.game.world.addChild(new game.SpeechScreen.nextButton(1400, 1400, {
					image : "nextButton",
					spritewidth : 80,
					spriteheight : 20
				}));
			me.game.world.addChild(new game.SpeechScreen.textBackground(0, 0, {
					image : "textbackground",
					spritewidth : 1024 * 2,
					spriteheight : 768 * 2
				}));
			me.game.world.addChild(new game.SpeechScreen.mainCharacter(0, 0, {
					image : "maincharacter",
					spritewidth : 1024 * 2,
					spriteheight : 768 * 2
				}));
			me.game.world.addChild(new game.SpeechScreen.speechCharacter(0, 0, {
					image : "speechcharacter",
					spritewidth : 1024 * 2,
					spriteheight : 768 * 2
				}));
				
			
		}
	});

game.SpeechScreen.nextButton = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.collidable = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("nextButton"), 80, 20);
			this.rect = new me.Rect(this.pos, 80, 20);
			this.addShape(this.rect);
		},

		update : function () {
			if (this.getShape().containsPointV(me.input.mouse.pos) && me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
				this.keyLock = true;
				if (game.speech.textfield.index == Henk.length - 1) {
					me.state.change(me.state.PLAY);
				} else {
					game.speech.textfield.switchIndex(1);
				}
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

game.SpeechScreen.Textfield = me.Renderable.extend({
		init : function (x, y) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.font = new me.BitmapFont("font", 32);
			this.font.set("left");
			this.index = 0;
			this.floating = true;
		},

		switchIndex : function (amount) {
			this.index += amount;
		},

		update : function () {
			this.textDisplay = Henk[this.index];
			return true;
		},

		draw : function (context) {
			this.font.draw(context, this.textDisplay, 450, 1100);
		}
	});

game.SpeechScreen.textBackground = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.collidable = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("textbackground"), 1024 * 2, 768 * 2);
		},

		update : function () {
			return true;
		},

		draw : function (context) {
			this.imgButton.draw(context);
		}
	});

game.SpeechScreen.speechCharacter = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.collidable = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("speechcharacter"), 1024 * 2, 768 * 2);
		},

		update : function () {
			return true;
		},

		draw : function (context) {
			this.imgButton.draw(context);
		}
	});

game.SpeechScreen.mainCharacter = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.keyLock = true;
			this.floating = true;
			this.collidable = true;
			this.imgButton = new me.AnimationSheet(this.pos.x, this.pos.y, me.loader.getImage("maincharacter"), 1024 * 2, 768 * 2);
		},

		update : function () {
			return true;
		},

		draw : function (context) {
			this.imgButton.draw(context);
		}
	});