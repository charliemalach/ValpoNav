var OnCampusMarkers = [];
for (var i = 0; i < OnCampus.length; i++) {
    var building = OnCampus[i];
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(`<b>${building.name}</b><br>
                <a href="https://example.com" target="_blank">View inside</a>`);
    OnCampusMarkers.push(marker);
}

function showCampusBuildingMarker(name) {
    // loop through the OnCampus array to find a match for the provided building name
    for (var i = 0; i < OnCampus.length; i++) {
        if (OnCampus[i].name === name) {
            var latLng = [OnCampus[i].lat, OnCampus[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            OnCampusMarkers[i].openPopup();
            OnCampusMarkers[i].setOpacity(1);
            break;
        }
    }
}

function hideCampusMarker() {
    for (var i = 0; i < OnCampus.length; i++) {
        OnCampusMarkers[i].setOpacity(0);
    }
}

function showCampusMarker() {
    for (var i = 0; i < OnCampusMarkers.length; i++) {
        OnCampusMarkers[i].setOpacity(1);
    }
}


var OffCampusMarkers = [];
for (var i = 0; i < OffCampus.length; i++) {
    var building = OffCampus[i];
    var marker = L.marker([building.lat, building.lng]).addTo(map);
    marker.bindPopup(`<b>${building.name}</b><br>
                <a href="https://example.com" target="_blank">View inside</a>`);
    OffCampusMarkers.push(marker);
}

function showBuildingMarker(name) {
    // loop through the OnCampus array to find a match for the provided building name
    for (var i = 0; i < OffCampus.length; i++) {
        if (OffCampus[i].name === name) {
            var latLng = [OffCampus[i].lat, OffCampus[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            OffCampusMarkers[i].openPopup();
            OffCampusMarkers[i].setOpacity(1);
            break;
        }
    }
}

function hideMarker() {
    for (var i = 0; i < OffCampus.length; i++) {
        OffCampusMarkers[i].setOpacity(0);
    }
}

function showMarker() {
    for (var i = 0; i < OffCampusMarkers.length; i++) {
        OffCampusMarkers[i].setOpacity(1);
    }
}