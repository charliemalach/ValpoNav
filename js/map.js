var map = L.map('map', { zoomControl: false }).setView([41.4637, -87.0448], 16);

streetLayer.addTo(map);

L.control.navbar = function(options) {
    return new L.Control.NavBar(options);
}

L.control.navbar().addTo(map);