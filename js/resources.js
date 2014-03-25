game.resources = [

	/* Graphics.
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	{
		name : "characterMale",
		type : "image",
		src : "data/img/sprite/CharacterMale.png"
	}, {
		name : "characterFemale",
		type : "image",
		src : "data/img/sprite/CharacterFemale.png"
	}, {
		name : "flappie",
		type : "image",
		src : "data/img/sprite/Flappie2.png"
	}, {
		name : "pipe1",
		type : "image",
		src : "data/img/sprite/Pipe1.png"
	}, {	
		name : "metatiles64x64",
		type : "image",
		src : "data/img/tileset/metatiles64x64.png"
	}, {
		name : "inventorySlot",
		type : "image",
		src : "data/img/sprite/Inventory.png"
	}, {
		name : "font",
		type : "image",
		src : "data/img/sprite/32x32_font.png"
	},
	
	/*	Buttons.
	 *
	 *
	 */
	{
		name : "inventoryButton",
		type : "image",
		src : "data/img/button/btn_toInv.png"
	}, {
		name : "gameButton",
		type : "image",
		src : "data/img/button/btn_toGame.png"
	}, {
		name : "playButton",
		type : "image",
		src : "data/img/button/btn_toPlay.png"
	}, {
		name : "creditsButton",
		type : "image",
		src : "data/img/button/btn_toCredits.png"
	}, {
		name : "menuButton",
		type : "image",
		src : "data/img/button/btn_toMenu.png"
	}, {
		name : "instructionsButton",
		type : "image",
		src : "data/img/button/btn_toInstructions.png"
	},

	/*
	 * Background
	 */
	{
		name : "DressingRoom",
		type : "image",
		src : "data/img/backgrounds/Dressingroom.png"
	}, {
		name : "GrandHall",
		type : "image",
		src : "data/img/backgrounds/Grandhall.png"
	}, {
		name : "EndScreen",
		type : "image",
		src : "data/img/backgrounds/TheaterFlappieBird.png"
	}, {
		name : "credits",
		type : "image",
		src : "data/img/backgrounds/credits.png"
	},
	
	/*
	 *	Inv Items
	 */
	 
	{
		name : "flappie_inv",
		type : "image",
		src : "data/img/sprite/Flappie2_inv.png"
	}, {
		name : "pipe1_inv",
		type : "image",
		src : "data/img/sprite/Pipe1_inv.png"
	},

	/* Atlases
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */

	/* Maps.
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
	 */

	{
		name : "grandhall",
		type : "tmx",
		src : "data/map/Grandhall.tmx"
	}, {
		name : "dressingroom",
		type : "tmx",
		src : "data/map/DressingRoom.tmx"
	}

	/* Background music.
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */

	/* Sound effects.
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
];
