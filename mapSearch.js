//Search Input function
// Add an event listener to the form that listens for a submission event
document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    console.log("Search input:" + searchInput);
    // Iterate over the buildings array and check for a building name match
    for (let building of buildings) {
        if (building.name.toLowerCase() === searchInput.toLowerCase()) {
            console.log("Match found:" + building.name);
            // If a match is found, call the showBuilding() function with the matching building name as its argument
            showBuilding(building.name);
            break;
        }
    }
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
