var newArr = buildings.concat(off_campus_buildings).concat(parking_lots).concat(residential_halls).concat(recreational_buildings).concat(health_safety_buildings);

// Add event listener to the search form to listen for submit event
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the search input value
    var searchValue = document.getElementById("search-input").value.toLowerCase();

    // loop through the buildings array to find a match for the search input value
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i].name.toLowerCase() === searchValue) {
            //if a match is found, select the corresponding marker and animate the map to it
            var latLng = [newArr[i].lat, newArr[i].lng];
            var marker = null;
            map.eachLayer(function(layer) {
                if (layer instanceof L.Marker && layer.getLatLng().equals(latLng)) {
                    marker = layer;
                }
            });
            if (marker) {
                marker.fire('click');
                map.flyTo(latLng, 18, {
                    animate: true,
                    duration: 2
                });
            }
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
        nav.style.width = -webkit - fill - available;
        // other.style.marginLeft = "400px";
    }
}