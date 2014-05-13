game.SpeechScreen = me.ScreenObject.extend({

		onResetEvent : function () {
			console.log("speechscreen_build");
			this.z = Infinity;
			this.index = 0;
			this.script;
			
			for(var i = 0; i < dialog.length; i++){
				if(dialog[i][0] == game.data.lastspokenNPC) {
					this.script = dialog[i][1];
				}
			}
			
			//TODO replace hard coded stuff
			this.textfield = new game.UIText(0, 768-32, "font", this.script[this.index]);
			me.game.world.addChild(this.textfield);
			//empty object just to listen for mouseclick
			this.eventListener = new game.SpeechScreen.eventListener(0,0,{});
			me.game.world.addChild(this.eventListener);
			
			me.game.world.addChild(new game.UIImage(1024-276, 768-571, "alex_convo", 276, 571));
			me.game.world.addChild(new game.UIImage(0, 768-638, game.data.lastspokenNPC + "_convo", 376, 638));
			console.log("speechscreen_build");
			me.state.change(me.state.PLAY);
		},
		
		changeLines : function(){
			console.log(2);
			this.index++;
			
			if(this.index < this.script.length){
				this.textfield.replaceText(this.script[this.index]);
			} else if (this.index >= this.script.length) {
				this.index = 0;
				me.state.change(me.state.PLAY);
			}
		}
	});
	
game.SpeechScreen.eventListener = me.ObjectEntity.extend({
		init : function (x, y, settings) {
			this.parent(x, y, settings);
			this.alwaysUpdate = true;
			this.keyLock = false;
		},
		
		update : function () {
			if(me.input.isKeyPressed("mouse/touch") && !this.keyLock) {
				game.speech.changeLines();
				this.keyLock = true;
				
			}
			
			if(!me.input.isKeyPressed("mouse/touch")) {
				this.keyLock = false;
			}
			
			return true;
		}
});