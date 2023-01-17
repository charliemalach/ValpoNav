            var checkboxes = document.querySelectorAll("input[type=checkbox]");

            // Listen for changes on the checkboxes
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener("change", function() {
                    // Retrieve the selected buildings
                    var selectedBuildings = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

                    // // Clear all markers from the map
                    // map.eachLayer(function(layer) {
                    //     if (layer instanceof L.Marker) {
                    //         map.removeLayer(layer);
                    //     }
                    // });

                    // Loop through the buildings array and add a marker for each selected building
              
                });
            });

            // this is the first form (on-cam1pus)
            var selectAllForm1 = document.getElementById("selectAllForm1");
            var deselectAllForm1 = document.getElementById("deselectAllForm1");
            var form1Checkboxes = document.querySelectorAll(".form1Checkbox");

            selectAllForm1.addEventListener("change", function() {
                if (this.checked) {
                    deselectAllForm1.checked = false;
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = true;
                        showCampusMarker();
                    });
                    // trigger change event on checkboxes to update markers
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                        showCampusMarker();
                    });
                }
            });

            deselectAllForm1.addEventListener("change", function() {
                if (this.checked) {
                    selectAllForm1.checked = false;
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = false;
                        hideCampusMarker();
                        
                    });
                    // trigger change event on checkboxes to update markers
                    form1Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                        hideCampusMarker();
                    });
                }
            });


            // this is the second form (off-campus)
            var selectAllForm2 = document.getElementById("selectAllForm2");
            var deselectAllForm2 = document.getElementById("deselectAllForm2");
            var form2Checkboxes = document.querySelectorAll(".form2Checkbox");

            selectAllForm2.addEventListener("change", function() {
                if (this.checked) {
                    deselectAllForm2.checked = false;
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = true;
                        showMarker();
                    });
                    // trigger change event on checkboxes to update markers
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                        showMarker();
                    });
                }
            });

            deselectAllForm2.addEventListener("change", function() {
                if (this.checked) {
                    selectAllForm2.checked = false;
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.checked = false;
                        hideMarker();
                    });
                    // trigger change event on checkboxes to update markers
                    form2Checkboxes.forEach(function(checkbox) {
                        checkbox.dispatchEvent(new Event('change'));
                        
                    });
                }
            });