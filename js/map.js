//initialize the map
var map = L.map('map').setView([41.4628, -87.0442], 16);

new L.Control.NavBar().addTo(map);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);