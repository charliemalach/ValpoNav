var checkboxes = document.querySelectorAll("input[type=checkbox]");

// Listen for changes on the checkboxes
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedBuildings = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Loop through the buildings array and add a marker for each selected building
        buildings.forEach(function(building) {
            if (selectedBuildings.includes(building.name)) {
                showMarker(building.name);
            } else {
                hideBuildingMarker(building.name);
                map.closePopup();
            }
        });
    });
});

// Listen for changes on the checkboxes
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedOffCampusBuildings = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Loop through the buildings array and add a marker for each selected building
        off_campus_buildings.forEach(function(off_campus_building) {
            if (selectedOffCampusBuildings.includes(off_campus_building.name)) {
                showsOffCampusMarker(off_campus_building.name);
            } else {
                hideOffCampusMarker(off_campus_building.name);
                map.closePopup();
            }
        });
    });
});

// Listen for changes on the checkboxes
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedOffResidentialHalls = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Loop through the buildings array and add a marker for each selected building
        residential_halls.forEach(function(residential_hall) {
            if (selectedOffResidentialHalls.includes(residential_hall.name)) {
                showsResHallMarker(residential_hall.name);
            } else {
                hideResHallMarker(residential_hall.name);
                map.closePopup();
            }
        });
    });
});

// Listen for changes on the checkboxes
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedParkingLots = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Loop through the buildings array and add a marker for each selected building
        parking_lots.forEach(function(parking_lot) {
            if (selectedParkingLots.includes(parking_lot.name)) {
                showsParkingLotMarker(parking_lot.name);
            } else {
                hideParkingLotMarker(parking_lot.name);
                map.closePopup();
            }
        });
    });
});

// Listen for changes on the checkboxes
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Retrieve the selected buildings
        var selectedHealthSafety = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        // Loop through the buildings array and add a marker for each selected building
        health_safety_buildings.forEach(function(healthsafety) {
            if (selectedHealthSafety.includes(healthsafety.name)) {
                showsHealthSafetyMarker(healthsafety.name);
            } else {
                hideHealthSafetyMarker(healthsafety.name);
                map.closePopup();
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


//this is the third form (res-halls)
var selectAllForm3 = document.getElementById("selectAllForm3");
var deselectAllForm3 = document.getElementById("deselectAllForm3");
var form3Checkboxes = document.querySelectorAll(".form3Checkbox");

selectAllForm3.addEventListener("change", function() {
    if (this.checked) {
        deselectAllForm3.checked = false;
        form3Checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        // trigger change event on checkboxes to update markers
        form3Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});

deselectAllForm3.addEventListener("change", function() {
    if (this.checked) {
        selectAllForm3.checked = false;
        form3Checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        // trigger change event on checkboxes to update markers
        form3Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});

//this is the fourth form (health & safety)
var selectAllForm4 = document.getElementById("selectAllForm4");
var deselectAllForm4 = document.getElementById("deselectAllForm4");
var form4Checkboxes = document.querySelectorAll(".form4Checkbox");

selectAllForm4.addEventListener("change", function() {
    if (this.checked) {
        deselectAllForm4.checked = false;
        form4Checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        // trigger change event on checkboxes to update markers
        form4Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});

deselectAllForm4.addEventListener("change", function() {
    if (this.checked) {
        selectAllForm4.checked = false;
        form4Checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        // trigger change event on checkboxes to update markers
        form4Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});

//this is the fifth form (parking lots)
var selectAllForm5 = document.getElementById("selectAllForm5");
var deselectAllForm5 = document.getElementById("deselectAllForm5");
var form5Checkboxes = document.querySelectorAll(".form5Checkbox");

selectAllForm5.addEventListener("change", function() {
    if (this.checked) {
        deselectAllForm5.checked = false;
        form5Checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        // trigger change event on checkboxes to update markers
        form5Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});

deselectAllForm5.addEventListener("change", function() {
    if (this.checked) {
        selectAllForm5.checked = false;
        form5Checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        // trigger change event on checkboxes to update markers
        form5Checkboxes.forEach(function(checkbox) {
            checkbox.dispatchEvent(new Event('change'));
        });
    }
});


// ********************************************************************

// This is the function for the search icon

const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});