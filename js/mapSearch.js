var newArr = buildings.concat(off_campus_buildings).concat(parking_lots).concat(residential_halls);

// Add event listener to the search form to listen for submit event
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the search input value
    var searchValue = document.getElementById("search-input").value.toLowerCase();

    // loop through the buildings array to find a match for the search input value
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i].name.toLowerCase() === searchValue) {
            //if a match is found, zoom the map to the location of that building and open the corresponding marker 's popup
            map.setView([newArr[i].lat, newArr[i].lng], 18);
            var marker = L.marker([newArr[i].lat, newArr[i].lng], { icon: transparentIcon }).addTo(map);
            var latLng = [newArr[i].lat, newArr[i].lng];
            marker.bindPopup(`<b>${newArr[i].name}</b><br>
            <a href="building.html?buildingIndex=${newArr.indexOf(newArr[i])}" target="_blank">More Info</a>`).openPopup();
            map.flyTo(latLng);
            marker.openPopup();
            break;
        }
    }
});