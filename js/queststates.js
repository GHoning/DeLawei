QuestStates = [
	{
		'name' : "intro",
		'initial': true,
		'events' : {
			'talk_to_kim': 'roel'
		}
	},{
		'name' : "roel",
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
			'so_cool': 'end'
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