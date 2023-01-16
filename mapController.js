// Create the map
var map = L.map('map').setView([41.4646, -87.0448], 16);

var map = L.map('map').setView([41.4637, -87.0533], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
for (let building of buildings) {
    L.marker([building.lat, building.lng]).addTo(map)
}

// Define the showBuilding() function
function showBuilding(name) {
    console.log("Building is:" + name);
    // Iterate over the buildings array and find the building that matches the name passed in as an argument
    for (let building of buildings) {
        if (building.name === name) {
            // Pan the map to the location of the building
            map.panTo(new L.LatLng(building.lat, building.lng));
            break;
        }
    }
}

// Add an event listener to the form that listens for a submission event
document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    console.log("Search input:" + searchInput);
    // Iterate over the buildings array and check for a building name match
    for (let building of buildings) {
        if (building.name.toLowerCase() === searchInput.toLowerCase()) {
            console.log("Match found:" + building.name);
            // If a match is found, call the showBuilding() function with the matching building name as its argument
            showBuilding(building.name);
            break;
        }
    }
});


//home button
var customControl = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.style.backgroundColor = 'white';
        container.style.width = '45px';
        container.style.height = '30px';
        container.innerHTML = "<button id='myButton'><i class='fa fa-home'></i> Home</button>";
        container.onclick = function() {
            map.setView([41.4646, -87.0448], 16);;
        }
        return container;
    }
});

map.addControl(new customControl());

// Button for current location
var locateControl = L.control.locate({
    position: 'topright',
    flyTo: true,
    setView: 'once',
    keepCurrentZoomLevel: true,
    icon: 'fa fa-location-arrow'

    // for a custom icon
    // icon: 'images/myCustomImage.png'
}).addTo(map);


// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Function to create a marker for a building on the map
function createMarker(building) {
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(building.name);
}

// Add a marker for each building in the array
buildings.forEach(function(building) {
    createMarker(building);
});

// Add event listener to the search form to listen for submit event
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the search input value
    var searchValue = document.getElementById("search-input").value.toLowerCase();

    // loop through the buildings array to find a match for the search input value
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].name.toLowerCase() === searchValue) {
            //if a match is found, zoom the map to the location of that building and open the corresponding marker 's popup
            map.setView([buildings[i].lat, buildings[i].lng], 18);
            var marker = L.marker([buildings[i].lat, buildings[i].lng]).addTo(map);
            marker.bindPopup(buildings[i].name).openPopup();
            break;
        }
    }
});

function showBuilding(buildingName) {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]._popup._content == buildingName) {
            markers[i].openPopup();
        }
    }
}

var markers = [];
for (var i = 0; i < buildings.length; i++) {
    var building = buildings[i];
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(building.name);
    markers.push(marker)
}
