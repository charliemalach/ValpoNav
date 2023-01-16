var checkboxes = document.querySelectorAll("input[type=checkbox]");

            // Listen for changes on the checkboxes
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener("change", function() {
                    // Retrieve the selected buildings
                    var selectedBuildings = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

                    // Clear all markers from the map
                    map.eachLayer(function(layer) {
                        if (layer instanceof L.Marker) {
                            map.removeLayer(layer);
                        }
                    });

                    // Loop through the buildings array and add a marker for each selected building
                    buildings.forEach(function(building) {
                        if (selectedBuildings.includes(building.name)) {
                            var marker = L.marker([building.lat, building.lng]).addTo(map);
                            var popupContent = "<h4 class='building-name'>" + building.name + "</h4>" + "<a href='" + building.link + "' class='building-link' target='_blank'>View Inside</a>";
                            marker.bindPopup(popupContent);
                        }
                    });
                });
            });


            //this is the first form (on-campus)

            var selectAllForm1 = document.getElementById("selectAllForm1");
            var deselectAllForm1 = document.getElementById("deselectAllForm1");
            var form1Checkboxes = document.querySelectorAll(".form1Checkbox");

            selectAllForm1.addEventListener("change", function() {
                if (this.checked) {
                    deselectAllForm1.checked = false;
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = true;
                    });
                    // trigger change event on checkboxes to update markers
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                    });
                }
            });

            deselectAllForm1.addEventListener("change", function() {
                if (this.checked) {
                    selectAllForm1.checked = false;
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = false;
                    });
                    // trigger change event on checkboxes to update markers
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                    });
                }
            });


            //this is the second form (off-campus)

            var selectAllForm2 = document.getElementById("selectAllForm2");
            var deselectAllForm2 = document.getElementById("deselectAllForm2");
            var form2Checkboxes = document.querySelectorAll(".form2Checkbox");

            selectAllForm2.addEventListener("change", function() {
                if (this.checked) {
                    deselectAllForm2.checked = false;
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = true;
                    });
                    // trigger change event on checkboxes to update markers
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                    });
                }
            });

            deselectAllForm2.addEventListener("change", function() {
                if (this.checked) {
                    selectAllForm2.checked = false;
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = false;
                    });
                    // trigger change event on checkboxes to update markers
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                    });
                }
            });