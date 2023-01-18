var markers = [];
for (var i = 0; i < buildings.length; i++) {
    var building = buildings[i];
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(`<b>${building.name}</b><br>
    <a href="${buildings[i].link}" target="_blank">View inside</a>`);
    marker.addEventListener("click", function (e) {
        map.panTo(this.getLatLng());
    })
    markers.push(marker);   
}

function showBuildingMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].name === name) {
            var latLng = [buildings[i].lat, buildings[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            markers[i].openPopup();
            markers[i].setOpacity(1);
            break;
        }
    }
}

function hideBuildingMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].name === name) {
            // center the map to the location of that building
            markers[i].setOpacity(0);
            break;
        }
    }
}

function showMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].name === name) {
            // center the map to the location of that building
            markers[i].setOpacity(1);
            break;
        }
    }
}

