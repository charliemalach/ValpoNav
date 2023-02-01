
var str=''; // variable to store the options

// Create an array of building objects that includes the building name and location
var buildings = [
    {
        name: 'Center for the Arts',
        lat: 41.46397,
        lng: -87.04003,
        link: 'https://www.valpo.edu/center-for-the-arts/',
        desc: "The Valparaiso University Center for the Arts is a vibrant space for artists and arts-lovers.The Valparaiso University Center for the Arts showcases Valpo’s resources for theatre, music, and art — including the Brauer Museum of Art and the Bach Institute. The space is a home for creativity, expression, and arts appreciation.",
        image: 'https://www.valpo.edu/center-for-the-arts/files/2015/03/20130428-Campus-Scenes-024web3.jpg'
    }, {
        name: 'Center for the Sciences',
        lat: 41.46241,
        lng: -87.03952,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Christopher Center',
        lat: 41.46268,
        lng: -87.04299,
        link: 'https://library.valpo.edu/',
        desc: "The Christopher Center Library is where people and information meet to bring about discovery and build knowledge with integrity. In an effort to enhance student learning and information literacy, we aim to create an inclusive environment where the campus community can ask hard questions, engage in scholarly conversations, and contribute to society with critical thought and compassion.",
        image: 'https://library.valpo.edu/pics/cropped-Library_Top-Header_Exterior.jpg',
    }, {
        name: 'College of Arts and Sciences',
        lat: 41.46269,
        lng: -87.04386,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Duesenberg Welcome Center',
        lat: 41.46123,
        lng: -87.04116,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Fites Center',
        lat: 41.4623,
        lng: -87.03775,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Gellersen Center',
        lat: 41.46271,
        lng: -87.03799,
        link: './building.html?buildingIndex=',
    }, { 
        name: 'Harre Union',
        lat: 41.46421,
        lng: -87.04226,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Helge Center',
        lat: 41.46273,
        lng: -87.0419,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Kallay Christopher Hall',
        lat: 41.46413,
        lng: -87.03859,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Kretzmann Hall',
        lat: 41.46219,
        lng: -87.04027,
        link: './building.html?buildingIndex=',
    },{
        name: 'Meier Hall',
        lat: 41.4622,
        lng: -87.0387,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Mueller Hall',
        lat: 41.46229,
        lng: -87.04493,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Neils Science Center',
        lat: 41.46482,
        lng: -87.04059,
        link: './building.html?buildingIndex=',
    }, {
        name: 'Schnabel Hall',
        lat: 41.46387,
        lng: -87.03834,
        link: './building.html?buildingIndex=',
    },  {
        name: 'Urschel Hall',
        lat: 41.46411,
        lng: -87.0376,
        link: './building.html?buildingIndex=',
    },    {
        name: 'Weseman Hall',
        lat: 41.46154,
        lng: -87.05325,
        link: './building.html?buildingIndex=',
    }, {
        name: 'CVS Pharmacy',
        lat: 41.45974,
        lng: -87.06254,
        link: './building.html?buildingIndex=',
        desc: "CVS Pharmacy, Inc. is an American retail corporation. A subsidiary of CVS Health, it is headquartered in Woonsocket, Rhode Island. It was also known as, and originally named, the Consumer Value Store and was founded in Lowell, Massachusetts, in 1963. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a>",
        image: 'https://www.cvshealth.com/content/dam/enterprise/cvs-enterprise/images/ingestion/2021/cvs-health-cvs-health-announces-steps-to-accelerate-omnichannel-health-strategy-1-16x9.jpg'
    },  {
        name: 'Dominos Pizza',
        lat: 41.46656,
        lng: -87.03962,
        link: './building.html?buildingIndex=',
        desc: "Domino’s came from humble beginnings in 1960, with just one store. Now, as the largest pizza company in the world, Domino’s proudly continues its legacy of delivering great-tasting pizza to customers’ doors. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue> here</a>",
        image: 'https://content-service.sodexomyway.com/media/pizza-pepperoni_tcm1156-25618.jpg?url=https://dining.wm.edu/'
    }, {
        name: 'Hungry Howies',
        lat: 41.46856,
        lng: -87.0468,
        link: './building.html?buildingIndex=',
        desc: "Hungry Howie's Pizza & Subs, Inc., also known as Hungry Howie's Pizza, is a franchise and the 11th largest pizza chain in the United States, with over 550 locations. Hungry Howie's products include pizza, calzone-style subs, chicken wings and tenders, bread, salads, and cookies.<br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a>",
        image: 'https://img.franchising.com/art/articles/6479_plate.jpg'
    }, {
        name: 'Jimmy Johns',
        lat: 41.46749,
        lng: -87.04097,
        link: './building.html?buildingIndex=',
        desc: "Jimmy John's is an American sandwich chain headquartered in Champaign, Illinois. The business was founded by Jimmy John Liautaud in 1983. After Liautaud graduated from high school, his father gave him a choice to either join the military or start a business. Liautaud, choosing the latter, initially decided to start a hot dog business, but changed to opening a sandwich business due to costs. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Ignite%20Completes%20Jimmy%20Johns%20acquisition.jpg?itok=Ak229Q17'
    }, {
        name: 'Panera Bread',
        lat: 41.46811,
        lng: -87.0275,
        link: './building.html?buildingIndex=',
        desc: "Panera Bread is an American chain store of bakery-café fast casual restaurants with over 2,000 locations, all of which are in the United States and Canada. Its headquarters are in Sunset Hills, Missouri. The company operates as Saint Louis Bread Company in the Greater St. Louis area, where it has over 100 locations.[6] Offerings include bakery items, pasta, salads, sandwiches, soups, and specialty drinks. As of 2020, the menu also includes flatbread pizzas.<br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://image.cnbcfm.com/api/v1/image/106972691-1636466150088-gettyimages-1280324270-1006_32_fl200924107.jpeg?v=1661775251'
    } ]; 
    
    function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
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
                  if (!val) { return false;}
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
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
            }

            autocomplete(document.getElementById("search-input"), building_names);





// loop to get the list of buildings 
for (var i=0; i < buildings.length;++i){
    str += '<option value="'+buildings[i].name+'" />'; // Storing options in variable
}
var my_list=document.getElementById("buildings");
my_list.innerHTML = str;

