var map = L.map('map').setView([41.4628, -87.0442], 16);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);






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
