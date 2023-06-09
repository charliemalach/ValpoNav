
//on campus markers
var yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var markers = [];
for (var i = 0; i < buildings.length; i++) {
    var building = buildings[i];
    var marker = L.marker([building.lat, building.lng], { icon: yellowIcon }).addTo(map);
    marker.bindPopup(`<b>${building.name}</b><br>
    <a href="oncampus.html?buildingIndex=${buildings.indexOf(building)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    markers.push(marker);
}

function showBuildingMarker(name) {
    closeNav();
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

//off campus markers
var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var offCampusmarkers = [];
for (var i = 0; i < off_campus_buildings.length; i++) {
    var off_building = off_campus_buildings[i];
    var marker = L.marker([off_building.lat, off_building.lng], { icon: redIcon }).addTo(map);
    marker.bindPopup(`<b>${off_building.name}</b><br>
    <a href="offcampus.html?buildingIndex=${off_campus_buildings.indexOf(off_building)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    offCampusmarkers.push(marker);
}

function showOffCampusMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    closeNav();
    for (var i = 0; i < off_campus_buildings.length; i++) {
        if (off_campus_buildings[i].name === name) {
            var latLng = [off_campus_buildings[i].lat, off_campus_buildings[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            offCampusmarkers[i].openPopup();
            offCampusmarkers[i].setOpacity(1);
            
            break;
        }
    }
}

function hideOffCampusMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < off_campus_buildings.length; i++) {
        if (off_campus_buildings[i].name === name) {
            // center the map to the location of that building
            offCampusmarkers[i].setOpacity(0);
            break;
        }
    }
}

function showsOffCampusMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < off_campus_buildings.length; i++) {
        if (off_campus_buildings[i].name === name) {
            // center the map to the location of that building
            offCampusmarkers[i].setOpacity(1);
            break;
        }
    }
}


//residential hall markers
var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var residentialMarkers = [];
for (var i = 0; i < residential_halls.length; i++) {
    var residential_hall = residential_halls[i];
    var marker = L.marker([residential_hall.lat, residential_hall.lng], { icon: greenIcon }).addTo(map);
    marker.bindPopup(`<b>${residential_hall.name}</b><br>
    <a href="residencehalls.html?buildingIndex=${residential_halls.indexOf(residential_hall)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    residentialMarkers.push(marker);
}

function showResHallsMarker(name) {
    closeNav();

    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < residential_halls.length; i++) {
        if (residential_halls[i].name === name) {
            var latLng = [residential_halls[i].lat, residential_halls[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            residentialMarkers[i].openPopup();
            residentialMarkers[i].setOpacity(1);
            break;
        }
    }
}

function hideResHallMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < residential_halls.length; i++) {
        if (residential_halls[i].name === name) {
            // center the map to the location of that building
            residentialMarkers[i].setOpacity(0);
            break;
        }
    }
}

function showsResHallMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < residential_halls.length; i++) {
        if (residential_halls[i].name === name) {
            // center the map to the location of that building
            residentialMarkers[i].setOpacity(1);
            break;
        }
    }
}


//parking lots markers 
var blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var parkingLotmarkers = [];
for (var i = 0; i < parking_lots.length; i++) {
    var parking_lot = parking_lots[i];
    var marker = L.marker([parking_lot.lat, parking_lot.lng], { icon: blueIcon }).addTo(map);
    marker.bindPopup(`<b>${parking_lot.name}</b><br>
    <a href="parking.html?buildingIndex=${parking_lots.indexOf(parking_lot)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    parkingLotmarkers.push(marker);
}

function showParkingLotsMarker(name) {
    closeNav();

    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < parking_lots.length; i++) {
        if (parking_lots[i].name === name) {
            var latLng = [parking_lots[i].lat, parking_lots[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            parkingLotmarkers[i].openPopup();
            parkingLotmarkers[i].setOpacity(1);
            break;
        }
    }
}

function hideParkingLotMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < parking_lots.length; i++) {
        if (parking_lots[i].name === name) {
            // center the map to the location of that building
            parkingLotmarkers[i].setOpacity(0);
            break;
        }
    }
}

function showsParkingLotMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < parking_lots.length; i++) {
        if (parking_lots[i].name === name) {
            // center the map to the location of that building
            parkingLotmarkers[i].setOpacity(1);
            break;
        }
    }
}

//search var
var transparentIcon = new L.Icon({
    iconUrl: 'https://example.com/transparent-marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [0, 0],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//Health & Safety markers 
var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var health_safety_markers = [];
for (var i = 0; i < health_safety_buildings.length; i++) {
    var health_safe = health_safety_buildings[i];
    var marker = L.marker([health_safe.lat, health_safe.lng], { icon: violetIcon }).addTo(map);
    marker.bindPopup(`<b>${health_safe.name}</b><br>
        <a href="healthsafety.html?buildingIndex=${health_safety_buildings.indexOf(health_safe)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    health_safety_markers.push(marker);
}

function showHealthSafetyMarker(name) {
    closeNav();

    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < health_safety_buildings.length; i++) {
        if (health_safety_buildings[i].name === name) {
            var latLng = [health_safety_buildings[i].lat, health_safety_buildings[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            health_safety_markers[i].openPopup();
            health_safety_markers[i].setOpacity(1);
            break;
        }
    }
}

function hideHealthSafetyMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < health_safety_buildings.length; i++) {
        if (health_safety_buildings[i].name === name) {
            // center the map to the location of that building
            health_safety_markers[i].setOpacity(0);
            break;
        }
    }
}

function showsHealthSafetyMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < health_safety_buildings.length; i++) {
        if (health_safety_buildings[i].name === name) {
            // center the map to the location of that building
            health_safety_markers[i].setOpacity(1);
            break;
        }
    }
}

//recreational markers 
var OrangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var recreational_markers = [];
for (var i = 0; i < recreational_buildings.length; i++) {
    var recreational = recreational_buildings[i];
    var marker = L.marker([recreational.lat, recreational.lng], { icon: OrangeIcon }).addTo(map);
    marker.bindPopup(`<b>${recreational.name}</b><br>
        <a href="recreational.html?buildingIndex=${recreational_buildings.indexOf(recreational)}" target="_blank">More Info</a>`);
    marker.addEventListener("click", function(e) {
        map.panTo(this.getLatLng());
    });
    recreational_markers.push(marker);
}

function showRecreationalMarker(name) {
    closeNav();

    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < recreational_buildings.length; i++) {
        if (recreational_buildings[i].name === name) {
            var latLng = [recreational_buildings[i].lat, recreational_buildings[i].lng];
            // center the map to the location of that building
            map.setView(latLng, 17);
            map.flyTo(latLng);
            recreational_markers[i].openPopup();
            recreational_markers[i].setOpacity(1);
            break;
        }
    }
}

function hideRecreationalMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < recreational_buildings.length; i++) {
        if (recreational_buildings[i].name === name) {
            // center the map to the location of that building
            recreational_markers[i].setOpacity(0);
            break;
        }
    }
}

function showsRecreationalMarker(name) {
    // loop through the buildings array to find a match for the provided building name
    for (var i = 0; i < recreational_buildings.length; i++) {
        if (recreational_buildings[i].name === name) {
            // center the map to the location of that building
            recreational_markers[i].setOpacity(1);
            break;
        }
    }
}