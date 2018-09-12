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
//var cors_api_url = 'https://cors-anywhere.herokuapp.com/';


let blah = new Map({center: {lat: 15.8700, lng: 100.9925}});
 
blah.attachToDom();
//blah.createMarker({position: {lat: 15.8700, lng: 100.9925}, title: "BLAH"})

fetch(TRAVELERS_URL).then(resp => resp.json()).then(data => createElements(data[0]));


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
	//debugger
	//window.alert("hello")
}