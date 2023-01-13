var map = L.map('map').setView([41.4638, -87.0444], 16);

//home button
var customControl = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');



        container.innerHTML = "<button id='myButton'><i class='fa fa-home'></i></button>";
        container.onclick = function() {
            map.setView([41.4646, -87.0448], 16);;
        }
        return container;
    }
});

//scale icon
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);

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
}];

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

var markers = [];
for (var i = 0; i < buildings.length; i++) {
    var building = buildings[i];
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(`<b>${building.name}</b><br>
                <a href="https://example.com" target="_blank">View inside</a>`);
    markers.push(marker);
}

function showBuildingMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].name === name) {
            //if a match is found, zoom the map to the location of that building and open the corresponding marker 's popup
            map.setView([buildings[i].lat, buildings[i].lng], 16);
            var marker = L.marker([buildings[i].lat, buildings[i].lng]).addTo(map);
            marker.bindPopup(`<b>${buildings[i].name}</b><br>
            <a href="${buildings[i].link}" target="_blank">View inside</a>`);
            markers.push(marker);
            marker.openPopup();
            break;
        }
    }
}


// this is for checking and unchecking boxes and providing link and name after
var checkboxes = document.querySelectorAll("input[type=checkbox]");


checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedBuildings = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Clear all markers from the map
        map.eachLayer(function(layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Loop through the buildings array and add a marker for each selected building
        buildings.forEach(function(building) {
            if (selectedBuildings.includes(building.name)) {
                var marker = L.marker([building.lat, building.lng]).addTo(map).bindPopup(building.name);
                marker.bindPopup("<a href='https://example.com" + building.link + "'>" + building.name + "</a>");
            }
        });
    });
});