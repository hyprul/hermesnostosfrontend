class Traveler {

	constructor({
	    id,
	    name,
	    age,
	    pictureUrl,
	    journeys = []
	  } = {}) {
	  	this.id = id;
	    this.name = name;
	    this.age = age;
	    this.picture_url = pictureUrl;
	    this.journeys = this.createJourneys(journeys);
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