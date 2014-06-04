QuestStates = [
	{
		'name' : "intro",
		'initial': true,
		'events' : {
			'talk_to_kim': 'talk_to_roel'
		}
	},{
		'name' : "talk_to_roel",
		'events' : {
			'get_brief': 'brief'
		}
	},{
		'name' : "brief",
		'events' : {
			'read_letter': 'brief_read'
		}
	},{
		'name' : "brief_read",
		'events' : {
			'get_quest_chair': 'quest_chair'
		}
	},{
		'name' : "quest_chair",
		'events' : {
			'talk_to_sam1': 'get_number'
		}
	},{
		'name' : "get_number",
		'events' : {
			'talk_to_kim': 'got_number'
		}
	},{
		'name' : "got_number",
		'events' : {
			'talk_to_sam2': 'get_note1'
		}
	},{
		'name' : "get_note1",
		'events' : {
			'pick_up_note1': 'got_note1'
		}
	},{
		'name' : "got_note1",
		'events' : {
			'pick_up_note2': 'got_note2'
		}
	},{
		'name' : "got_note2",
		'events' : {
			'talk_to_tim': 'quest_get_pocketknife'
		}
	},{
		'name' : "quest_get_pocketknife",
		'events' : {
			'talk_to_kim2' : 'quest_get_pocketknife2'
		}
	},{
		'name' : "quest_get_pocketknife2",
		'events' : {
			'talk_to_sam3' : 'have_pocketknife'
		}
	},{
		'name' : "have_pocketknife",
		'events' : {
			'talk_to_tim2' : 'got_note3'
		}
	},{
		'name' : "got_note3",
		'events' : {
			'get_note4' : 'got_note4'
		}
	},{
		'name' : "got_note4",
		'events' : {
			'get_note5' : 'got_note5'
		}
	},{
		'name' : "got_note5",
		'events' : {
			'finish_game' : 'finished_game'
		}
	}
];

function StateMachine(QuestStates) {
	this.states = QuestStates;
	this.indexes = {}; //convenience
	for( var i = 0; i< this.states.length; i++) {
		this.indexes[this.states[i].name] = i;
		if(this.states[i].initial) {
			this.currentState = this.states[i];
		}
	}
	
	this.consumeEvent = function(e) {
		if(this.currentState.events[e]){
			this.currentState = this.states[this.indexes[this.currentState.events[e]]];
		}
	}
	
	this.getStatus = function() {
		return this.currentState.name;
	}
}