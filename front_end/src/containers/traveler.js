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


	attachToDom(){
		const containerforTraveler = document.getElementById('profile');
		const newTravelerElement = this.render();
		containerforTraveler.innerHTML += newTravelerElement;
	}


	render(){
		//debugger
		// return `
		// <div class="container">
		// <h3 style="font-weight:bold">${this.name}</h4>
		// <img src=${this.picture_url} class="circle responsive-img">
		
		// </div>`

		this.journeys.forEach(function(journey){
			journey.render()
		})

		return `
		      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
                      <div class="col s10">
              <span class="black-text">
                These are the memories of Don Draper, Don Corleone, and Leonardo Dicaprio.
              </span>
            </div>
            <div class="col s2">
              <img src=${this.picture_url} alt="" class="responsive-img">
            </div>
              <div class="col s2">
              <img src="https://uproxx.files.wordpress.com/2016/08/godfather9.jpg?quality=95&w=650&h=360" alt="" class="responsive-img">
            </div>
            <div class="col s2">
              <img src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2014/11/leonardo_dicaprio.jpg" alt="" class="responsive-img">
            </div>

          </div>
        </div>
      </div>
            
		`

		// return `
		// <div class="container">
		// <div class="card large">
  //             <div class="card-image">
  //               <img src="${this.picture_url}">
  //               <span class="card-title">${this.name}</span>
  //             </div>
  //             <div class="card-content">
  //               <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //             </div>
  //             <div class="card-action">
  //               <a href="#">This is a link</a>
  //               <a href="#">This is a link</a>
  //             </div>
  //       </div>
  //       </div>
		// `
		//debugger
		//${this.journeys[0].name}
	}


}

Traveler.all = []