var newArr = buildings.concat(off_campus_buildings).concat(parking_lots).concat(residential_halls).concat(recreational_buildings).concat(health_safety_buildings);

// Add event listener to the search form to listen for submit event
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the search input value
    var searchValue = document.getElementById("search-input").value.toLowerCase();

    // loop through the buildings array to find a match for the search input value
    for (var i = 0; i < newArr.length; i++) {
        var newVar = newArr[i];
        if (newArr[i].name.toLowerCase() === searchValue) {
            //if a match is found, zoom the map to the location of that building and open the corresponding marker 's popup
            map.setView([newArr[i].lat, newArr[i].lng], 18);
            var marker = L.marker([newArr[i].lat, newArr[i].lng], { icon: transparentIcon }).addTo(map);
            var latLng = [newArr[i].lat, newArr[i].lng];
            marker.bindPopup(`<b>${newArr[i].name}</b><br>
            <a href="search.html?buildingIndex=${newArr.indexOf(newVar)}" target="_blank">More Info</a>`).openPopup();
            map.flyTo(latLng);
            marker.openPopup();
            break;
        }
    }
});

function toggleNav() {
    var nav = document.getElementById("search-input");
    var other = document.getElementById("button");
    if (nav.style.width === "400px") {
        nav.style.width = "0";
        other.style.marginLeft = "0";
    } else {
        nav.style.width = -webkit-fill-available;
        // other.style.marginLeft = "400px";
    }
}