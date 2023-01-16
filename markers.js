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
            var latLng = [buildings[i].lat, buildings[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            var marker = L.marker(latLng).addTo(map);
            var popupContent = `<div class='building-name'>${buildings[i].name}</div>
            <a href="${buildings[i].link}" target="_blank" class='building-link'>View inside</a>`;
            marker.bindPopup(popupContent);
            markers.push(marker);
            marker.openPopup();
            break;
        }
    }
}

// marker variables for each location
var Christopher = L.marker([41.46268, -87.04299])
var Harre = L.marker([41.46421, -87.04226])
var Weseman = L.marker([41.46154, -87.05325])
var Neils = L.marker([41.46482, -87.04059])

// Define the function to center the map on a specific location
function centerMap(locationId) {
    switch (locationId) {
        case 'Christopher Center':
            map.panTo(Christopher.getLatLng());
            break;
        case 'Harre Union':
            map.panTo(Harre.getLatLng());
            break;
        case 'Neils Science Center':
            map.panTo(Neils.getLatLng());
            break;
        case 'Weseman Hall':
            map.panTo(Weseman.getLatLng());
            break;
        default:
            break;
    }
}