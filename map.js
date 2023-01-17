var map = L.map('map').setView([41.4628, -87.0442], 16);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);


// Create an array of building objects that includes the building name and location
var buildings = [{
    name: 'Christopher Center',
    lat: 41.46268,
    lng: -87.04299,
    link: 'https://www.example1.com'
}, {
    name: 'Harre Union',
    lat: 41.46421,
    lng: -87.04226
}, {
    name: 'Weseman Hall',
    lat: 41.46154,
    lng: -87.05325,
    link: 'https://www.example1.com'
}, {
    name: 'Neils Science Center',
    lat: 41.46482,
    lng: -87.04059,
    link: 'https://www.example1.com'
}, {
    name: 'Dominos Pizza',
    lat: 41.46656,
    lng: -87.03962,
    link: 'https://www.dominos.com/en/'
}, {
    name: 'Panera Bread',
    lat: 41.46811,
    lng: -87.0275,
    link: 'https://www.panerabread.com/en-us/home.html'
}, {
    name: 'Hungry Howies',
    lat: 41.46856,
    lng: -87.0468,
    link: 'https://www.hungryhowies.com/'
}, {
    name: 'Jimmy Johns',
    lat: 41.46749,
    lng: -87.04097,
    link: 'https://www.jimmyjohns.com/'
}, {
    name: 'CVS Pharmacy',
    lat: 41.45974,
    lng: -87.06254,
    link: 'https://www.cvs.com/'
}];



// i think this stuff is all duplicate, we might not need ?
// Add a marker for each building
// var markers = {};
// for (var i = 0; i < buildings.length; i++) {
//     var building = buildings[i];
//     markers[building.name] = L.marker([building.lat, building.lng]).addTo(map);
// }

// // Define the function to center the map on a specific building
// function centerMap(buildingName) {
//     map.panTo(markers[buildingName].getLatLng());
// // }
// // Define the function to center the map on a specific building
// function centerMap(buildingName) {
//     map.panTo(markers[buildingName].getLatLng());
// }
//JJ was here
