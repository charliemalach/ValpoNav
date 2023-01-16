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
            var popupContent = `<div class='building-name'>${buildings[i].name}</div>
            <a href="${buildings[i].link}" target="_blank" class='building-link'>View inside</a>`;
            marker.bindPopup(popupContent);
            markers.push(marker);
            marker.openPopup();
            break;
        }
    }
}