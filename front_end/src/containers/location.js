class Location {

	constructor({
	    locationId,
	    name,
	    coordinates,
	    journalEntry,
	    visit_frequency,
	    journey_id
	  } = {}) {
	  	this.id = locationId;
	  	this.name = name;
	    this.coordinates = coordinates;
	    this.journal_entry = journalEntry;
	    this.visit_frequency = visit_frequency;
	    this.journey_id = journey_id;
	    Location.all.push(this)
	}

	static findLocationById(id){
	  	return Location.all.find(x => x.id === id)
	}

	render(){

		let {coordinates: {lat, lng}, name } = this;
		[lat, lng] = [lat * 1, lng * 1];
		// let title = this.name
		//let place = document.querySelector('#map')
		//blah.createMarker({position: ${this.coordinates}, title: `${this.name}`})
		//debugger
		blah.createMarkerInfoWindow({position: {lat, lng}, title: name}, {content: this.journal_entry, picture_url: "https://img.budgettravel.com/_facebookShare/mad-mens-don-draper-steps-off-a-plane-3262015-15318_original.jpeg?mtime=20150326100320", title: this.name})
		//blah.createInfoWindow();
		//debugger
	}

}

Location.all = []
