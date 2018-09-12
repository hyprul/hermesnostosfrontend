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
	  	//debugger

	  	let journeyid = `test${this.id}tab`
	  	let journeycontentid = `test${this.id}`
	  	//debugger

	  	if(journeyid){
		  	const journey = document.getElementById(journeyid);
		  	//debugger
		  	const journeycontent = document.getElementById(journeycontentid)
		  	journeycontent.innerHTML = `${this.overview}`
		  	journey.innerHTML = `<a href="#test${this.id}" style="color:black">${this.name}</a>`


		  	//debugger


		  	this.locations.forEach(function(location){
				location.render()
				//debugger
			})

		  	//debugger
	  	}



	  }


}


Journey.all = []
