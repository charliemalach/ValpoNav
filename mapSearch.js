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
            var latLng = [buildings[i].lat, buildings[i].lng];
            marker.bindPopup(`<b>${buildings[i].name}</b><br>
                <a href="${buildings[i].link}" target="_blank">View inside</a>`).openPopup();
            map.flyTo(latLng);
            marker.openPopup();
            break;
        }
    }
});