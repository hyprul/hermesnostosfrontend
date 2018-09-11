const BASE_URL = "http://localhost:3000";
const TRAVELERS_URL = `${BASE_URL}/travelers`;
const JOURNEYS_URL = `${BASE_URL}/journeys`;
const LOCATIONS_URL = `${BASE_URL}/locations`;


//DOM Elements
const home = document.getElementById('home');



//Event Listener for Delegation
home.addEventListener('click', handleClick);



//Instantiate Traveler



//Create Journeys for Traveler




//Create Locations for Journey




//Fetch Everything
fetch(TRAVELERS_URL).then(resp => resp.json()).then(data => createElements(data[0]));


function createElements(data){
	
	traveler = new Traveler(data);
	traveler.attachToDom();
	debugger
	//return traveler.attachToDom();
}




//Event Delegation
function handleClick(e){
	//debugger
	//window.alert("hello")
}