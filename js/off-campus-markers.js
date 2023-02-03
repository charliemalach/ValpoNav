// var redIcon = new L.Icon({
//     iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
// });

// var markers = [];
// for (var i = 0; i < off_campus_buildings.length; i++) {
//     var off_building = off_campus_buildings[i];
//     var marker = L.marker([off_building.lat, off_building.lng], { icon: redIcon }).addTo(map);
//     marker.bindPopup(`<b>${off_building.name}</b><br>
//     <a href="${off_campus_buildings[i].link}" target="_blank">More Info</a>`);
//     marker.addEventListener("click", function(e) {
//         map.panTo(this.getLatLng());
//     });
//     markers.push(marker);
// }

// function showOffCampusMarker(name) {
//     // loop through the buildings array to find a match for the provided building name
//     for (var i = 0; i < off_campus_buildings.length; i++) {
//         if (off_campus_buildings[i].name === name) {
//             var latLng = [off_campus_buildings[i].lat, off_campus_buildings[i].lng];
//             // center the map to the location of that building
//             map.setView(latLng, 17);
//             map.flyTo(latLng);
//             markers[i].openPopup();
//             markers[i].setOpacity(1);
//             break;
//         }
//     }
// }

// function hideOffCampusMarker(name) {
//     // loop through the buildings array to find a match for the provided building name
//     for (var i = 0; i < off_campus_buildings.length; i++) {
//         if (off_campus_buildings[i].name === name) {
//             // center the map to the location of that building
//             markers[i].setOpacity(0);
//             break;
//         }
//     }
// }

// function showsOffCampusMarker(name) {
//     // loop through the buildings array to find a match for the provided building name
//     for (var i = 0; i < off_campus_buildings.length; i++) {
//         if (off_campus_buildings[i].name === name) {
//             // center the map to the location of that building
//             markers[i].setOpacity(1);
//             break;
//         }
//     }
// }