var str = ''; // variable to store the options

// Create an array of building objects that includes the building name and location
var buildings = [{
    name: 'Center for the Arts',
    lat: 41.46397,
    lng: -87.04003,
    link: './oncampus.html?buildingIndex=',
    desc: "The Valparaiso University Center for the Arts is a vibrant space for artists and arts-lovers.The Valparaiso University Center for the Arts showcases Valpo’s resources for theatre, music, and art — including the Brauer Museum of Art and the Bach Institute. The space is a home for creativity, expression, and arts appreciation.",
    image: 'https://www.valpo.edu/center-for-the-arts/files/2015/03/20130428-Campus-Scenes-024web3.jpg'
}, {
    name: 'Center for the Sciences',
    lat: 41.46241,
    lng: -87.03952,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Christopher Center',
    lat: 41.46268,
    lng: -87.04299,
    link: './oncampus.html?buildingIndex=',
    desc: "The Christopher Center Library is where people and information meet to bring about discovery and build knowledge with integrity. In an effort to enhance student learning and information literacy, we aim to create an inclusive environment where the campus community can ask hard questions, engage in scholarly conversations, and contribute to society with critical thought and compassion.",
    image: 'https://library.valpo.edu/pics/cropped-Library_Top-Header_Exterior.jpg',
}, {
    name: 'College of Arts and Sciences',
    lat: 41.46269,
    lng: -87.04386,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Duesenberg Welcome Center',
    lat: 41.46123,
    lng: -87.04116,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Fites Center',
    lat: 41.4623,
    lng: -87.03775,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Gellersen Center',
    lat: 41.46271,
    lng: -87.03799,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Harre Union',
    lat: 41.46421,
    lng: -87.04226,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Helge Center',
    lat: 41.46273,
    lng: -87.0419,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Kallay Christopher Hall',
    lat: 41.46413,
    lng: -87.03859,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Kretzmann Hall',
    lat: 41.46219,
    lng: -87.04027,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Meier Hall',
    lat: 41.4622,
    lng: -87.0387,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Mueller Hall',
    lat: 41.46229,
    lng: -87.04493,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Neils Science Center',
    lat: 41.46482,
    lng: -87.04059,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Schnabel Hall',
    lat: 41.46387,
    lng: -87.03834,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Urschel Hall',
    lat: 41.46411,
    lng: -87.0376,
    link: './oncampus.html?buildingIndex=',
}, {
    name: 'Weseman Hall',
    lat: 41.46154,
    lng: -87.05325,
    link: './oncampus.html?buildingIndex=',

}];

function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

var building_names = getFields(buildings, "name"); // returns [ 1, 3, 5 ]

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("search-input"), building_names);





// loop to get the list of buildings 
for (var i = 0; i < buildings.length; ++i) {
    str += '<option value="' + buildings[i].name + '" />'; // Storing options in variable
}
var my_list = document.getElementById("buildings");
my_list.innerHTML = str;