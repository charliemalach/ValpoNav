L.Control.NavBar = L.Control.extend({
    options: {
        position: 'topright',
        zoomInTitle: "Zoom in",
        zoomOutTitle: "Zoom out",
        geolocationTitle: "Go to current location",
        homeTitle: "Go to home map view"
    },

    onAdd: function(map) {
        var controlName = 'leaflet-control-navbar',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar');

        this._zoomInButton = this._createButton(this.options.zoomInTitle, controlName + '-zoom-in', container, this._zoomIn);
        this._zoomOutButton = this._createButton(this.options.zoomOutTitle, controlName + '-zoom-out', container, this._zoomOut);
        this._geolocationButton = this._createButton(this.options.geolocationTitle, controlName + '-geolocation', container, this._goGeolocation);
        this._homeButton = this._createButton(this.options.homeTitle, controlName + '-home', container, this._goHome);

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

        L.DomEvent
            .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);

        return link;
    },

    _updateHistory: function(e) {
        var newView = { center: this._map.getCenter(), zoom: this._map.getZoom() };
        var insertIndex = this._curIndx + 1;
        this._viewHistory.splice(insertIndex, this._viewHistory.length - insertIndex, newView);
        this._curIndx = insertIndex;
    },

    _createButton: function(title, className, container, fn) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        var icon = L.DomUtil.create('i', 'fas fa-fw', link);

        if (className === 'leaflet-control-navbar-zoom-in') {
            icon.classList.add('fa-search-plus');
        } else if (className === 'leaflet-control-navbar-zoom-out') {
            icon.classList.add('fa-search-minus');
        } else if (className === 'leaflet-control-navbar-geolocation') {
            icon.classList.add('fa-map-marker-alt');
        } else if (className === 'leaflet-control-navbar-home') {
            icon.classList.add('fa-home');
        }

        L.DomEvent
            .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);

        return link;
    }
});