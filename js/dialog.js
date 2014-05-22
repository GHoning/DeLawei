var dialog = [
	//TODO write a text wrapper
	["kim","intro",
		[	"Hallo! Ik ben alex en \nik ben gestuurd door \nmijn schoolkrant om over \nde vernieuwing te schrijven.",
			"Hallo alex, jouw leraar had al contact met ons opgenomen. Helaas heb ik geen tijd op het moment om jou te helpen maar je bent vrij om rond te lopen en de mensen te interviewen die aanwezig zijn. Als je vragen hebt voor mij wees dan vrij om me lastig te vallen.",
			"Bedankt!"
		]],
		
	["roel","intro", 
		[	"..."			
		]], 
	
	["sam","intro", 
		[	"..."			
		]],

	["tim","intro", 
		[	"..."			
		]], 
		
	["kim","roel",
		[
			"Kunt u mij wat vertellen over de Lawei zelf?",
			"Ja hoor! De Lawei is geopend in 1960. Er waren wat problemen met het bouwen ervan.",
			"Maar nu zijn we 1 van de grootste en bekendste schouwburgen in Nederland!"
		]],
		
	["roel","roel", 
		[
			"Pardon meneer, is er misschien iets mis?",
			"Ik heb deze brief gekregen van een goede vriend van mij maar ik kan hem niet helpen. Ik ben nou eenmaal niet meer de jongste.",
			"Ik ben Alex, kan ik misschien ergens mee helpen?"
		]], //TODO show letter on screen (monologue)
		
	["sam","roel", 
		[	"..."			
		]],

	["tim","roel", 
		[	"..."			
		]], 
		
	["kim", "brief_gelezen",
		[
			"Kunt u mij wat vertellen over de Lawei zelf?",
			"Ja hoor! De Lawei is geopend in 1960. Er waren wat problemen met het bouwen ervan.",
			"Maar nu zijn we 1 van de grootste en bekendste schouwburgen in Nederland!"
		]],
		
	["roel", "brief_gelezen",
		[
			"Ik kan u wel helpen hiermee als u dat wilt, meneer…?",
			"Roel, noem me Roel. Het zou veel voor me betekenen als je dat voor me zou willen doen. Maar mijn goede vriend was erg goed in puzzels en raadsels, heb je daar wel het geduld voor jongeman?",
			"Maakt u zich daar maar geen zorgen om, ik zal ervoor zorgen dat u het muziekstuk zult horen zoals hij dat heeft bedoelt.",
			"Bedankt jongeman, heel erg bedankt. Laat me maar weten als ik je ergens mee kan helpen.",
			"Ik geloof dat Tajiri het liefst in het midden van de grote toneelzaal zat. Helaas kan ik me het nummer niet herinneren."
		]], //TODO quest state to quest_chair
		
	["sam","brief_gelezen", 
		[	"..."			
		]],

	["tim","brief_gelezen", 
		[	"..."			
		]], 
		
	["kim", "quest_chair",
		[
			"Heeft u nog iets interessants te vertellen over de Lawei?",
			"Hmm...Wist je dat er een stoel is in de grote toneelzaal die altijd open blijft staan. Ze zeggen dat er een geest op die stoel zit om mee te kijken bij voorstellingen. Wat er ook aan gebeurd ze kunnen het niet repareren."
		]],	
		
		
	["roel", "quest_chair",
		[
			"Waar was de favoriete stoel van Tajiri ook alweer?",
			"In de grote toneelzaal jongeman, helaas weet ik het stoelnummer niet meer maar ik weet zeker dat je er wel uitkomt."
		]],
		
	["sam","quest_chair", 
		[	"..."			
		]],

	["tim","quest_chair", 
		[	"..."			
		]], 
		
	["letter","brief",
		[
			"Beste Roel, Ik weet nog hoe we vroeger samen aan het notenschrift hebben gewerkt en ik heb daar nu nog steeds goede herinneringen aan.",
			"We hebben samen veel plezier gehad maar ik heb het complete notenschrift nooit aan je kunnen laten horen.", 
			"Daar heb ik achteraf best veel spijt van, ik had altijd gedacht dat we genoeg tijd zouden hebben.",
			"Het zou me goed doen als je het notenschrift zou kunnen horen zoals ik het bedoelt heb.",
			"Het eerste stuk zal je vinden in mijn favoriete stoel in de grote toneelzaal.",
			"Mijn goede vriend, ik wens je nog veel goede jaren toe.",
			"Groeten, Tajiri"
		]]
]