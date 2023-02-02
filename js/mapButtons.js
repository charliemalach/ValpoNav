//scale icon
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);

map.addControl(new customControl());

// Button for current location
// var locateControl = L.control.locate({
//     position: 'topright',
//     flyTo: true,
//     setView: 'once',
//     keepCurrentZoomLevel: true,
//     icon: 'fa fa-location-arrow'

//     // for a custom icon
//     // icon: 'images/myCustomImage.png'
// }).addTo(map);