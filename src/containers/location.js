class Location {

	constructor({
	    id,
	    name,
	    coordinates,
	    journal_entry,
	    visit_frequency,
	    journey_id
	  } = {}) {
	  	this.id = id;
	  	this.name = name;
	    this.coordinates = coordinates;
	    this.journal_entry = journal_entry;
	    this.visit_frequency = visit_frequency;
	    this.journey_id = journey_id;
	    Location.all.push(this)
	}

	static findLocationById(id){
	  	return Location.all.find(x => x.id === id)
	}

	render(){

	}


}

Location.all = []