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
            map.flyTo(latLng);
            markers[i].openPopup();
            markers[i].setOpacity(1);
            break;
        }
    }
}



// // marker variables for each location on-campus
// var Christopher = L.marker([41.46268, -87.04299])
// var Harre = L.marker([41.46421, -87.04226])
// var Weseman = L.marker([41.46154, -87.05325])
// var Neils = L.marker([41.46482, -87.04059])


// // maker variables for each location off-campus
// var Dominos = L.marker([41.46656, -87.03962])
// var Panera = L.marker([41.46811, -87.0275])
// var HungryHow = L.marker([41.46856,-87.0468])
// var JimmyJohns = L.marker([41.46749, -87.04097])
// var CVS = L.marker([41.45974, -87.06254])

// // Define the function to center the map on a specific location
// function centerMap(locationId) {
//     switch (locationId) {
//         case 'Christopher Center':
//             map.panTo(Christopher.getLatLng());
//             break;
//         case 'Harre Union':
//             map.panTo(Harre.getLatLng());
//             break;
//         case 'Neils Science Center':
//             map.panTo(Neils.getLatLng());
//             break;
//         case 'Weseman Hall':
//             map.panTo(Weseman.getLatLng());
//             break;
//         case 'Dominos Pizza':
//             map.panTo(Dominos.getLatLng());
//             break;
//         case 'Panera Bread':
//             map.panTo(Panera.getLatLng());
//             break;
//         case 'Hungry Howies':
//             map.panTo(HungryHow.getLatLng());
//             break;
//         case 'Jimmy Johns':
//             map.panTo(JimmyJohns.getLatLng());
//             break;
//         case 'CVS Pharmacy':
//             map.panTo(CVS.getLatLng());
//             break;
//         default:
//             break;
//     }
// }