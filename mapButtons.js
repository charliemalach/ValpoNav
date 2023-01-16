//home button
var customControl = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.innerHTML = "<button id='myButton'><i class='fa fa-home'></i></button>";
        container.onclick = function() {
            map.setView([41.4628, -87.0442], 16);
        }
        return container;
    }
});

//scale icon
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);

map.addControl(new customControl());

// Button for current location
var locateControl = L.control.locate({
    position: 'topright',
    flyTo: true,
    setView: 'once',
    keepCurrentZoomLevel: true,
    icon: 'fa fa-location-arrow'

    // for a custom icon
    // icon: 'images/myCustomImage.png'
}).addTo(map);