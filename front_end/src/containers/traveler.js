class Traveler {

	constructor({
	    id,
	    name,
	    age,
	    picture_url,
	    journeys = []
	  } = {}) {
	  	this.id = id;
	    this.name = name;
	    this.age = age;
	    this.picture_url = picture_url;
	    this.journeys = createJourneys(journeys);
	    Traveler.all.push(this)
	}

	createJourneys(journeys){
		return journeys.map(journey => new Journey(journey));
	}


	static findTravelerById(id){
	  	return Traveler.all.find(x => x.id === id)
	}


	render(){

	}


}

Traveler.all = []