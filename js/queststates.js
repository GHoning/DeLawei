QuestStates = [
	{
		'name' : "intro",
		'initial': true,
		'events' : {
			'talk_to_kim': 'talk_to'
		}
	},{
		'name' : "talk_to_roel",
		'events' : {
			'get_brief': 'brief'
		}
	},{
		'name' : "brief",
		'events' : {
			'read_letter': 'brief_gelezen'
		}
	},{
		'name' : "brief_gelezen",
		'events' : {
			'get_quest_chair': 'quest_chair'
		}
	},{
		'name' : "quest_chair",
		'events' : {
			'get_note1': 'got_note1'
		}
	},{
		'name' : "got_note1",
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
			'talk_to_sam2': 'get_note2'
		}
	},{
		'name' : "get_note2",
		'events' : {
			'retrieve_note2': 'got_note2'
		}
	},{
		'name' : "got_note2",
		//hier weer verder morgen voor de states
		'events' : {
			'retrieve_note2': 'got_note2'
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
	
	this.reset = function() 
}