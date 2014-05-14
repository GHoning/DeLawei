game.resources = [

	/* Graphics.
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	 
	 
	/*
     * Animation-sheets;
	 */	
	
	{
		name : "alex",
		type : "image",
		src : "data/img/sprite/AlexAnimationSheet.png"
	}, { 
		name : "roel",
		type : "image",
		src : "data/img/sprite/RoelAssets.png"
	} ,{
		name : "inventorySlot",
		type : "image",
		src : "data/img/sprite/Inventory.png"
	}, {
		name : "brief",
		type : "image",
		src : "data/img/sprite/brief.png"
	}, {
		name : "font",
		type : "image",
		src : "data/img/sprite/32x32_font.png"
	},
	
	/*
     * Sprites-Speech;
	 */	
	 
	{
		name : "alex_convo",
		type : "image",
		src : "data/img/sprite/AlexConvo.png"
	}, {
		name : "roel_convo",
		type : "image",
		src : "data/img/sprite/RoelConvo.png"
	},
	
	
	/*	
	 * Tile-sets.
	 */

	{
		name : "FloorSet",
		type : "image",
		src : "data/img/tileset/FloorSet.png"
	}, {
		name : "Glassset2",
		type : "image",
		src : "data/img/tileset/Glassset2.png"
	}, {
		name : "MetaTiles",
		type : "image",
		src : "data/img/tileset/MetaTiles.png"
	}, {
		name : "Stairset",
		type : "image",
		src : "data/img/tileset/Stairset.png"
	}, {
		name : "WallSet2",
		type : "image",
		src : "data/img/tileset/WallSet2.png"
	}, 
	 
	/*	
	 * Buttons.
	 */
	 
	{
		name : "inventoryButton",
		type : "image",
		src : "data/img/button/ToInventory.png"
	}, {
		name : "gameButton",
		type : "image",
		src : "data/img/button/ToGame.png"
	}, {
		name : "playButton",
		type : "image",
		src : "data/img/button/Start.png"
	}, {
		name : "creditsButton",
		type : "image",
		src : "data/img/button/ToCredits.png"
	}, {
		name : "menuButton",
		type : "image",
		src : "data/img/button/ToMenu.png"
	}, {
		name : "instructionsButton",
		type : "image",
		src : "data/img/button/ToInstructies.png"
	}, {
		name : "questButton",
		type : "image",
		src : "data/img/button/ToQuestlog.png"
	}, {
		name : "nextButton",
		type : "image",
		src : "data/img/button/btn_toNexttext.png"
	},

	/*
	 * Background
	 */
	{
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
	}, {
		name : "koekje_inv",
		type : "image",
		src : "data/img/sprite/koekje_inv.png"
	}, {
		name : "brief_inv",
		type : "image",
		src : "data/img/sprite/koekje_inv.png"
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
		name : "Entree",
		type : "tmx",
		src : "data/map/Entree.tmx"
	}, {
		name : "Gang",
		type : "tmx",
		src : "data/map/Gang.tmx"
	}, {
		name : "Foyer",
		type : "tmx",
		src : "data/map/Foyer.tmx"
	}, {
		name : "Theater",
		type : "tmx",
		src : "data/map/Theater.tmx"
	}, {
		name : "Kleedkamer",
		type : "tmx",
		src : "data/map/Kleedkamer.tmx"
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
