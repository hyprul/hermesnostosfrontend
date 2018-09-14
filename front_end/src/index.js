const BASE_URL = "http://localhost:3000";
const TRAVELERS_URL = `${BASE_URL}/travelers`;
const JOURNEYS_URL = `${BASE_URL}/journeys`;
const LOCATIONS_URL = `${BASE_URL}/locations`;


//DOM Elements
const home = document.getElementById('home');



//Event Listener for Delegation
home.addEventListener('click', handleClick);

var elems = document.querySelectorAll('.modal');

//fetch(".././terms.txt").then((resp) => {debugger;document.querySelector('#terms').innerHTML = resp.responseText})
M.Modal.init(elems, {})

//Instantiate Traveler



//Create Journeys for Traveler




//Create Locations for Journey




//Fetch Everything
//var cors_api_url = 'https://cors-anywhere.herokuapp.com/';


let blah = new Map({center: {lat: 15.8700, lng: 100.9925}});
 
blah.attachToDom();
//blah.createMarker({position: {lat: 15.8700, lng: 100.9925}, title: "BLAH"})

fetch(TRAVELERS_URL+`/1`).then(resp => resp.json()).then(data => createElements(data));


// //must have all Traveler fields or API will reject
// fetch("http://localhost:3000/travelers",{
// 	method: "POST",
// 	headers: {
//             'Accept': 'application/json',
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
//            name:"sean",
//            age: 26,
// 		   picture_url :"image here"
//         })
// }).then(res => res.json()).then(console.log)


// //Patch will take only what you want to update
// fetch("http://localhost:3000/travelers/2",{
// 	method: "PATCH",
// 	headers: {
//             'Accept': 'application/json',
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
// 			name:4,
//            age: 26
//         })
// }).then(res=>res.json()).then(console.log)

// //and Delete
// fetch("http://localhost:3000/travelers/2",{
// 	method: "DELETE",
// }).then(res=>res.json()).then(console.log)





function createElements(data){
	
	traveler = new Traveler(data);
	traveler.picture_url = "https://static.fashionbeans.com/wp-content/uploads/2015/03/dondm.jpg"
	traveler.name = "Don Draper"
	//debugger
	traveler.attachToDom();
	//debugger
	//return traveler.attachToDom();
}



//Event Delegation
function handleClick(e){
	//e.preventDefault();
	
	let submitbutton = e.target.id === "confirmterms"
	let journeytab = e.target.parentElement.className === "tab col s2"
	let createJourney = e.target.id === "createjourney"


	//debugger

	if(submitbutton){
		//debugger
		let name = document.querySelector("#name").value;
		let age = document.querySelector('#age').value;
		let picurl = document.querySelector('#picurl').value;


	fetch(TRAVELERS_URL,{
		method: "POST",
		headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           name: name,
           age: age,
		   picture_url : picurl
        })
	})


	location.reload();

		//debugger
	}//end of submit button


	if(journeytab){
		//debugger
		if(e.target.parentElement.id === "testtab"){
			blah = new Map({center: {lat: 15.8700, lng: 100.9925}});
			blah.attachToDom();
			traveler.journeys.forEach(function(journey){
				journey.render()
			})

		}else{
			let id = e.target.parentElement.id[4]
			//traveler.journeys[id-1].locations[0].coordinates
			//debugger
			blah = new Map({center: {lat: parseFloat(traveler.journeys[id-1].locations[0].coordinates.lat), lng: parseFloat(traveler.journeys[id-1].locations[0].coordinates.lng)}});
			blah.attachToDom();
			//l
			traveler.journeys[id-1].render()
		}
		//debugger
	}


	if(createJourney){
		let journeyname = document.querySelector("#journeyname").value;
		let journeydate = document.querySelector("#journeydate").value;
		let journeypicurl1 = document.querySelector("#journeypicurl1").value;
		let journeypicurl2 = document.querySelector("#journeypicurl2").value;
		let journeypicurl3 = document.querySelector("#journeypicurl3").value;
		let journeyoverview = document.querySelector("#journeyoverview").value;


		fetch(JOURNEYS_URL,{
			method: "POST",
			headers: {
		            'Accept': 'application/json',
		            "Content-Type": "application/json"
		        },

		        body: JSON.stringify({
		           name : journeyname,
		           pics :[journeypicurl1, journeypicurl2, journeypicurl3],
				   overview : journeyoverview,
				   date : journeydate,
				   traveler_id : 1
		        })
		})//end of fetch


		location.reload();
	}



	
	//window.alert("hello")
}