var dialog = [
	//TODO write a text wrapper
	//--------------------------------------------------------------------------
	["kim","intro",
		[	
			"Alex", "Hallo! Ik ben Alex en ik ben gestuurd door mijn schoolkrant om over de vernieuwing te schrijven.",
			"Kim","Hallo Alex, je leraar had al contact met ons opgenomen. Helaas heb ik nu geen tijd om jou te helpen maar je bent vrij om rond te lopen en de mensen te interviewen die aanwezig zijn. Als je vragen hebt voor mij wees dan vooral niet bang om me lastig te vallen.",
			"Alex", "Bedankt!"
		]],
		
	["roel","intro", 
		[	"Alex","Pardon meneer...",
			"Roel","Sorry ik heb nu geen tijd voor je, kom later anders terug."			
		]], 
	
	["sam","intro", 
		[	
			"Alex","Pardon meneer...",
			"Sam","Sorry ik heb nu geen tijd, kom later maar terug"
		]],

	["tim","intro", 
		[	"Alex","Pardon meneer",
			"Tim","Helaas heb ik nu even geen tijd, kan je later misschien terugkomen?"		
		]], 
		
	["randy","intro", 
		[	"Randy","Jij mag hier helemaal niet zijn!"		
		]], 
		
	//--------------------------------------------------------------------------
	["kim","talk_to_roel",
		[
			"Alex","Kunt u mij wat vertellen over de Lawei zelf?",
			"Kim","Ja hoor! De Lawei is geopend in 1960.",
			"Kim","En we zijn 1 van de grootste en bekendste schouwburgen in Nederland!"
		]],
		

	["sam","intro", 
		[	
			"Alex","Pardon meneer...",
			"Sam","Sorry ik heb nu geen tijd, kom later maar terug"
		]],

	["tim","intro", 
		[	"Alex","Pardon meneer",
		 "Tim", " Helaas heb ik nu even geen tijd, kan je later misschien terugkomen?"			
		]], 


	["roel","talk_to_roel", 
		[
			"Alex","(Een oude man kijkt triest voor zich uit)",
			"Alex","Pardon meneer, is er misschien iets mis?",
			"Roel","Ik heb deze brief gekregen van een goede vriend van mij maar ik kan hem niet helpen. Ik ben nou eenmaal niet meer de jongste.",
			"Alex","Roel overhandigt de brief",
 			"Alex","(Je hebt een brief van Roel gekregen, je kunt hem teruglezen door op het icon in je inventory te klikken)"
		]], 
		
	["randy","talk_to_roel", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "brief_read",
		[
			"Alex","Kunt u mij wat vertellen over de Lawei zelf?",
			"Kim","Ja hoor! De Lawei is geopend in 1960.",
			"Kim","Maar nu zijn we 1 van de grootste en bekendste schouwburgen in Nederland!"
		]],
		
	["roel", "brief_read",
		[
			"Alex","Ik kan u wel helpen als u dat wilt, meneer...?",
			"Roel","Roel, mijn vrienden noemen me Roel. Het zou veel voor me betekenen als je dat voor me zou willen doen. Maar mijn goede vriend was wel erg goed in puzzels en raadsels, heb je daar wel het geduld voor jongeman?",
			"Alex","Maakt u zich daar maar geen zorgen om, ik zal ervoor zorgen dat u het notenschrift compleet krijgt.",
			"Roel","Bedankt jongeman, heel erg bedankt. Laat me maar weten als ik je ergens mee kan helpen.",
			"Roel","Ik geloof dat Tajiri het liefst vooraan zat. Helaas kan ik me het nummer van de stoel niet herinneren."
		]], 
		

	["sam","brief_read", 
		[	
			"Alex","Pardon meneer...",
			"Sam","Sorry ik heb nu geen tijd, kom later maar terug"
		]],

	["tim","brief_read", 
		[	"Alex","Pardon meneer",
			"Tim","Helaas heb ik nu even geen tijd, kan je later misschien terugkomen?"			
		]], 
		
	["randy","brief_read", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
		

	//--------------------------------------------------------------------------
	["kim", "quest_chair",
		[
			"Alex","Heeft u nog iets interessants te vertellen over de Lawei?",
			"Kim","Hmm...Wist je dat er een stoel is in de grote toneelzaal die altijd open blijft staan. Ze zeggen dat er een geest op die stoel zit om mee te kijken bij voorstellingen. Wat er ook aan gebeurd ze kunnen het niet repareren."
		]],	
		
		
	["roel", "quest_chair",
		[
			"Alex","Waar was de favoriete stoel van Tajiri ook alweer?",
			"Roel","Vooraan, in de grote toneelzaal jongeman, helaas weet ik het stoelnummer niet meer maar ik weet zeker dat je er wel uitkomt."
		]],
		
	["sam","quest_chair", 
		[	"Alex","(Je wordt tegengehouden door een grote boos kijkende man)",
			"Sam","Sorry maar je mag daar niet in!",
			"Alex","Hallo meneer, ik ben Alex en ik ben hier om een artikel te schrijven over de Lawei. Kunt u mij misschien meer vertellen over uzelf en het gebouw?", 
			"Alex","En waarom mag ik daar niet naar binnen?",
			"Sam","Ik ben Sam en ik ben 1 van de acteurs voor het komende nieuwe toneelstuk.",
			"Alex","Nieuw toneelstuk?",
			"Sam","Oeps, daar mocht ik niks over zeggen",
			"Alex","Zou het mogelijk zijn om een kijkje te nemen in de toneelzaal?",

			"Sam","Sorry, ik denk dat je daar speciale toestemming voor nodig hebt. Maar laten we een deal maken, als jij mij het nummer van Kim het meisje bij de balie kan scoren dan wil ik je wel stiekem doorlaten.",
			"Alex","Dat is een deal! Zal ik er wat speciaals bij zeggen?",
			"Sam"," (Sam bloost) Uh, uhm, nee ik denk het niet."			
		]],

	["tim","quest_chair", 
		[	"Alex","Pardon meneer",
			"Tim","Helaas heb ik nu even geen tijd, kan je later misschien terugkomen?"						
		]],
	
	["randy","quest_chair", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "get_note1",
		[	"Kim","Heb je al in de grote toneelzaal gekeken?"
		]],	
		
		
	["roel", "get_note1",
		[
			"Roel","Heb je alle delen al?",
			"Alex","Nee nog niet!"
		]],
		
	["sam","get_note1", 
		[	"Sam","Nog bedankt voor het nummer"
		]],

	["tim","get_note1", 
		[	"Tim","Kan je later ook terugkomen?"
		]],
		
	["randy","get_note1", 
		[	"Randy","Jij mag hier eigenlijk niet zijn", 
						
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "got_note1",
		[	"Kim","Ik vraag me af hoe het met Sam gaat"
		]],	
		
		
	["roel", "got_note1",
		[
			"roel", "Lukt het een beetje?"
		]],
		
	["sam","got_note1", 
		[	"Sam","Ik hoop dat Kim met me uit wilt gaan"
		]],

	["tim","got_note1", 
		[	"Tim","Ik heb het nu te druk voor je, sorry."
		]], 
		
	["randy","got_note1", 
		[	"Randy","Jij mag hier eigenlijk niet zijn", 
			"Alex","Ik ben over de vernieuwbouw aan het schrijven voor mijn schoolkrant",
			"Randy","Oh, wil je alsjeblieft voorzichtig zijn met wat je aanraakt, alles is nieuw in de kleedkamer",
			"Alex","Dat komt helemaal goed!"		
		]], 	
		
	//--------------------------------------------------------------------------
	["kim", "get_number",
		[
			"Alex","Kim?",
			"Kim","Ja?",
			"Alex","Mag ik misschien je nummer?",
			"Kim","Waarvoor?",
			"Alex","Sam zegt dat ik speciale toestemming nodig heb om de toneelzaal binnen te gaan maar dat ik naar binnen mag als ik hem je nummer geef.",
			"Kim","Haha, speciale toestemming...",
			"Alex","(Kim knipoogt giechelend en geeft je haar nummer)",
			"Kim","Zeg maar tegen hem dat als hij wat anders van me wilt hebben dat hij dat zelf maar moet regelen.",
			"Alex","Bedankt! Ik zal de boodschap doorgeven."
		]],	
		
		
	["roel", "get_number",
		[	"Roel","Die Sam ziet er de laatste tijd uit alsof hij verliefd is"
		]],
		
	["sam","get_number", 
		[	"Sam","Kim ziet er mooi uit vandaag"			
		]],

	["tim","get_number", 
		[	
			"Tim","Hallo meneer, ik ben Alex en ik vroeg me af of u tijd heeft voor een interview?",
			"Helaas heb ik nu even geen tijd, kan je later misschien terugkomen?"
		]],
		
	["randy","get_number", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
		
	//--------------------------------------------------------------------------
	["kim", "got_number",
		[	"Kim","Ik hoop dat Sam me belt..."
		]],
		
	["roel", "got_number",
		[	"Roel","Die Kim kijkt de laatste tijd best vaak naar Sam"
		]],
		
	["sam","got_number", 
		[	
			"Alex","Sam, ik heb het nummer van Kim voor je.",
			"Sam","Geweldig! Bedankt!",
			"Alex","Kim heeft wel gezegd dat als je iets anders van haar wilt het zelf moet vragen.",
			"Sam","Haha, ik zal het proberen."
		]],

	["tim","got_number", 
		[	"Tim","Sorry, ik ben nu bezig."			
		]],
		
	["randy","got_number", 
		[	"Randy","Jij mag hier eigenlijk niet zijn",
				
		]], 
		
	//--------------------------------------------------------------------------
	["kim", "got_note2",
		[	"Kim","Hoe gaat het met de interviews?"
		]],
		
	["roel", "got_note2",
		[	"Roel","Hoe staat het met het notenschrift?"
		]],
		
	["sam","got_note2", 
		[	"Sam","Acteren is leuk!"			
		]],

	["tim","got_note2", 
		[	
			"Alex","Pardon, mag ik misschien uw bar onderzoeken?",
			"Tim","Is er een reden dat je mijn bar wilt onderzoeken?",
			"Alex","Ik wil graag dit raadsel oplossen voor Roel (je wuift het briefje voor je uit waar het raadsel op staat)",
			"Tim","Kan het zijn dat je dit zoekt? (Tim zwaait een deel van het notenschrift voor Alex",
			"Alex","Ja, dat is het precies!",
			"Tim","Laten we afspreken dat als jij een nieuwe kurkentrekker voor me kan regelen, jij dit stukje kunst krijgt van mij",
			"Alex","Dat is afgesproken, tot zo!"
		]],
		
	["randy","got_note2", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"
			
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "quest_get_pocketknife",
		[	
			"Alex","Kim?",
			"Kim","Ja Alex?",
			"Alex","Weet je misschien waar ik een kurkentrekker vandaan kan halen?",
			"Kim","...",
			"Kim","Waarvoor heb je een kurkentrekker voor nodig?",
			"Alex","De barman heeft een nieuwe nodig...",
			"Kim","Die Tim... hij heeft die kurkentrekker nu al 3 keer vervangen",
			"Kim","Misschien kan je Roel vragen, hij loopt wel eens rond met een Zwitsers zakmes."
		]],
		
	["roel", "quest_get_pocketknife",
		[	"Alex","(Roel staart dromerig voor zich uit)"
		]],
		
	["sam","quest_get_pocketknife", 
		[	"Sam","To be or not to be...(Sam oefent zijn teksten voor het toneelstuk)"			
		]],

	["tim","quest_get_pocketknife", 
		[	"Tim","Heb je er al 1 gevonden?"			
		]],
	
	["randy","quest_get_pocketknife", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "quest_get_pocketknife2",
		[	"Kim","Die Tim maakt ook van alles stuk..."
		]],
		
	["roel", "quest_get_pocketknife2",
		[	
			"Alex","Meneer?",
			"Roel","Alex, hoe gaat het ermee? Heb je het al gevonden?",
			"Alex","Ik ben ermee bezig, maar heeft u misschien een kurkentrekker?",
			"Roel","Hmm, ik heb alleen een zakmes, er zit wel een kurkentrekker aan vast, zou dat goed genoeg zijn?",
			"Alex","Ja! Helemaal goed.",
			"Roel","Krijgt ik hem wel terug?",
			"Alex","Ja is goed, bedankt!"
		]],
		
	["sam","quest_get_pocketknife2", 
		[	"Sam","Ik vraag me af of ze rode rozen mooi vindt."			
		]],

	["tim","quest_get_pocketknife2", 
		[	"Tim","Heb je er al 1 gevonden?"			
		]],
		
	["randy","quest_get_pocketknife2", 
		[	"Randy","Jij mag hier eigenlijk niet zijn, wat doe je hier?"	
		]], 
	
	//--------------------------------------------------------------------------
	["kim", "have_pocketknife",
		[	"Kim","Misschien moet ik maar meerdere kurkentrekkers inslaan."
		]],
		
	["roel", "have_pocketknife",
		[	"Alex","(Roel staart dromerig voor zich uit)"
		]],
		
	["sam","have_pocketknife", 
		[	"Sam", "To be or not to be...wat was de rest van de tekst ook alweer (Sam oefent zijn rol)"			
		]],

	["tim","have_pocketknife", 
		[	
			"Alex","Hier is de kurkentrekker!",
			"Tim","Ah, een zakmes... Ik moet het er maar mee doen. Dankjewel.",
			"Alex","Ik mocht hem lenen van Roel, maar hij wilt hem wel terug!",
			"Tim","Ik zal eraan denken om hem terug te geven aan het einde van de dag. Hier is wat ik in mijn bar had gevonden. (Tim geeft je het 3e deel van het notenschrift)"
		]],
		
	["randy","have_pocketknife", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
		
	//--------------------------------------------------------------------------
	["kim", "got_note3",
		[	"Kim","Heb je al met Roel gesproken? Hij is de oud directeur van de Lawei, wist je dat al?"
		]],
		
	["roel", "got_note3",
		[	"Roel","Vroeger was alles zoveel rustiger (Roel praat tegen zichzelf)"
		]],
		
	["sam","got_note3", 
		[	"Sam","Ik denk dat rood haar lievelingskleur is...(Sam staart dromerig voor zich uit)"			
		]],

	["tim","got_note3", 
		[	"Tim","Is het nog gelukt bij de bar?"			
		]],
		
	["randy","got_note3", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
		
	//--------------------------------------------------------------------------
	["kim", "got_note4",
		[	"Kim","Soms vraag ik me af of ik actrice zou moeten worden."
		]],
		
	["roel", "got_note4",
		[	"Roel","Er is zoveel talent tegenwoordig."
		]],
		
	["sam","got_note4", 
		[	"Sam","Ik wil de beste acteur in de wereld worden"			
		]],

	["tim","got_note4", 
		[	"Tim","Wil je misschien iets drinken?"			
		]],
		
	["randy","got_note4", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
		
	//--------------------------------------------------------------------------
	["kim", "got_note5",
		[	"Kim","Als je iets wilt drinken moet je bij Tim zijn."
		]],
		
	["roel", "got_note5",
		[	
			"Alex","Meneer, ik heb alle delen van het notenschrift.",
			"Roel","Dit is echt een kunstwerk van Tajiri. Zullen we naar het toneel gaan om het te spelen?"
		]],
		
	["sam","got_note5", 
		[	"Sam","Wil je anders bij mijn nieuwe toneelstuk komen kijken?"			
		]],

	["tim","got_note5", 
		[	"Tim","Wil je echt niks drinken?"			
		]],
		
	["randy","got_note5", 
		[	"Randy","Jij mag hier eigenlijk niet zijn"		
		]], 
	
	
	//kopie doel einden
	//--------------------------------------------------------------------------
	/*["kim", "get_number",
		[	"..."
		]],
		
	["roel", "get_number",
		[	"..."
		]],
		
	["sam","get_number", 
		[	"..."			
		]],

	["tim","get_number", 
		[	"..."			
		]],*/
	]