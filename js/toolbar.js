L.Control.NavBar = L.Control.extend({
    options: {
        position: 'topright',
        zoomInTitle: "Zoom in",
        zoomOutTitle: "Zoom out",
        geolocationTitle: "Go to current location",
        homeTitle: "Go to home map view",
        streetLayerTitle: "Map View",
        satelliteLayerTitle: "Satellite View"
    },

    onAdd: function(map) {
        var controlName = 'leaflet-control-navbar',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar');

        this._zoomInButton = this._createButton(this.options.zoomInTitle, controlName + '-zoom-in', container, this._zoomIn, 'fa fa-plus');
        this._zoomOutButton = this._createButton(this.options.zoomOutTitle, controlName + '-zoom-out', container, this._zoomOut, 'fa fa-minus');
        this._homeButton = this._createButton(this.options.homeTitle, controlName + '-home', container, this._goHome, 'fa fa-home');
        this._streetLayerButton = this._createButton(this.options.streetLayerTitle, controlName + '-street-layer', container, function() {
            map.removeLayer(satelliteLayer);
            streetLayer.addTo(map);
        }, 'fa fa-map');
        this._satelliteLayerButton = this._createButton(this.options.satelliteLayerTitle, controlName + '-satellite-layer', container, function() {
            map.removeLayer(streetLayer);
            satelliteLayer.addTo(map);
        }, 'fa fa-globe');
        this._geolocationButton = this._createButton(this.options.geolocationTitle, controlName + '-geolocation', container, this._goGeolocation, 'fa fa-map-marker');



        this._viewHistory = [{ center: map.getCenter(), zoom: map.getZoom() }];
        this._curIndx = 0;
        map.once('moveend', function() { map.on('moveend', this._updateHistory, this); }, this);
        map.setView(map.getCenter(), map.getZoom());

        return container;
    },

    onRemove: function(map) {
        map.off('moveend', this._updateHistory, this);
    },

    _zoomIn: function() {
        this._map.zoomIn();
    },

    _zoomOut: function() {
        this._map.zoomOut();
    },

    _goGeolocation: function() {
        var map = this._map;
        var marker = null;
        var self = this;
        map.locate({
            setView: false,
            watch: true,
            maxZoom: 24,
            enableHighAccuracy: true
        }).on('locationfound', function(e) {
            if (marker) {
                marker.setLatLng(e.latlng);
            } else {
                marker = L.marker(e.latlng, {
                    icon: L.divIcon({
                        className: '',
                        html: '<i class="fa fa-user" style="font-size:24px; background-color: transparent; width: 24px; height: 24px;"></i>',
                        iconAnchor: [12, 12]
                    })
                }).addTo(map);
            }
            map.flyTo(e.latlng, 16, {
                animate: true
            });
        });
    },


    _goHome: function() {
        var view = this._viewHistory[0];
        this._map.setView(view.center, view.zoom);
    },

    _createButton: function(title, className, container, fn) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        var icon = L.DomUtil.create('i', 'icon', link);
        return L.DomEvent.on(link, 'click', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.preventDefault)
            .on(link, 'click', fn, this)
            .on(link, 'dblclick', L.DomEvent.stopPropagation)
            .on(link, 'dblclick', L.DomEvent.preventDefault)
            .on(link, 'dblclick', fn, this);
    },


    _updateHistory: function() {
        var view = { center: this._map.getCenter(), zoom: this._map.getZoom() };
        if (view.center.distanceTo(this._viewHistory[this._curIndx].center) > 100 ||
            Math.abs(view.zoom - this._viewHistory[this._curIndx].zoom) > 1) {
            this._viewHistory.splice(this._curIndx + 1);
            this._viewHistory.push(view);
            this._curIndx++;
        }
    }
});

var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
});

var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.arcgis.com/">Esri</a>',
    maxZoom: 19
});