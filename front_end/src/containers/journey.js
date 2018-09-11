class Journey {

	constructor({
	    id,
	    pics,
	    name,
	    overview,
	    locations = [],
	    traveler_id
	  } = {}) {
	    this.id = id;
	    this.name = name;
	    this.pics = pics;
	    this.overview = overview;
	    this.traveler_id = traveler_id;
	    this.locations = this.createLocations(locations);
	    Journey.all.push(this)
	  }


	  createLocations(locations){
	  	return locations.map(location => new Location(location));
	  }

	  static findJourneyById(id){
	  	return Journey.all.find(x => x.id === id)
	  }

	  render(){

	  }


}


Journey.all = []
