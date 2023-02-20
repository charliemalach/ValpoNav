var str = ''; // variable to store the options

// Create an array of building objects that includes the building name and location
var buildings = [{
    name: 'Center for the Arts',
    lat: 41.46397,
    lng: -87.04003,
    link: './oncampus.html?buildingIndex=',
    desc: "The Valparaiso University Center for the Arts is a vibrant space for artists and arts-lovers.The Valparaiso University Center for the Arts showcases Valpo’s resources for theatre, music, and art — including the Brauer Museum of Art and the Bach Institute. The space is a home for creativity, expression, and arts appreciation.",
    image: 'https://www.valpo.edu/center-for-the-arts/files/2015/03/20130428-Campus-Scenes-024web3.jpg'
}, 
{
    name: 'Center for Diaconal Ministry',
    lat: 41.46645, 
    lng:-87.04471,
    link: './oncampus.html?buildingIndex=',
    desc: "The LDA is a multi-Lutheran organization forming women and men for lives of Christian service.",
    image: 'https://thelda.org/wp-content/uploads/2018/02/Center-for-Diaconal-Ministry-1-825x410.jpg',
}, 
{
    name: 'Center for the Sciences',
    lat: 41.46241,
    lng: -87.03952,
    link: './oncampus.html?buildingIndex=',
    desc: "The accommodation of relocation of Chemistry and some Biology laboratories into the new building also allowed for the renovation of vacated space in the existing Neils Science Center for other programs such as Anatomy and Physics teaching laboratories and faculty/student research laboratories.",
    image: 'https://img.medicalexpo.com/images_me/projects/images-og/center-sciences-chemistry-biochemistry-building-valparaiso-university-valparaiso-ind-25236-12895307.jpg',
}, 
{
    name: 'Chapel of the Resurrection',
    lat: 41.46312, 
    lng: -87.04174,
    link: './oncampus.html?buildingIndex=',
    desc: "Centered in Christ, the Ministry of the Chapel of the Resurrection proclaims God’s love and serves students, faculty, and staff by building an inclusive community. The Chapel of the Resurrection is open to the public 8 a.m. to 6 p.m. seven days a week. Limited handicapped parking available in the Chapel turnaround. ",
    image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/chapel/files/2016/11/20151006-JLH-Chapel-004.jpg',
}, 

{
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
    desc: "The College of Arts and Sciences is the heart of Valpo. It’s where you can pursue the dreams you’ve had since childhood—or find a new passion that will last a lifetime. Here, you’ll do more than prepare for a job after graduation (although you’ll do that, too!). You’ll follow in the powerful tradition of liberal arts education, by pursuing an arts and science degree, learning the critical thinking, problem-solving, and communication skills to understand the world and your place in it.",
    image: 'https://mcshaneconstruction.com/wp-content/uploads/2018/06/valpo-arts_6-1200x900.jpg',
}, {
    name: 'Duesenberg Welcome Center',
    lat: 41.46123,
    lng: -87.04116,
    link: './oncampus.html?buildingIndex=',
    desc: "Valparaiso University's goal for the Phyllis & Richard Duesenberg Welcome Center was to create a new campus gateway and welcoming experience for prospective students and their families, returning alumni and guests. The Welcome Center now serves as a truly welcoming venue for both the University and the greater Valparaiso community. The design was referred to as 'aspirational' by University President Mark Heckler.",
    image: 'https://www.shive-hattery.com/application/files/1915/5258/8693/7100550_N3_1200X650_projectslider_master.jpg',
}, {
    name: 'Fites Center',
    lat: 41.4623,
    lng: -87.03775,
    link: './oncampus.html?buildingIndex=',
    desc: "The nearly $13 million addition to the south of the Gellersen Engineering and Mathematics Center covers 13,470 square feet and is made up primarily of laboratory and learning space for undergraduate engineering students. This facility – designed to meet LEED Platinum certification standards – opened at the start of the 2011 academic year and was formally dedicated on Oct. 29, 2011.",
    image: 'https://www.shive-hattery.com/application/files/5215/5258/7377/7050140_N15_1200X650_projectslider_master.jpg',
}, {
    name: 'Gellersen Center',
    lat: 41.46271,
    lng: -87.03799,
    link: './oncampus.html?buildingIndex=',
    desc: "Valparaiso University's Computing and Information Sciences department is housed in the Gellersen Engineering and Mathematics Center.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Gellersen_Hall-Valparaiso_University_-_panoramio.jpg',
}, {
    name: 'Harre Union',
    lat: 41.46421,
    lng: -87.04226,
    link: './oncampus.html?buildingIndex=',
    desc: "The Harre Union is at the center of Valparaiso University and aims to be the heart of the campus experience. Home to many different offices, dining locations, and just overall the place where the community can gather, get involved, and make connections! We look forward to seeing you in the Harre Union and being part of your time at Valparaiso University!",
    image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/union/files/2016/10/Harre-Union-800x799.jpg',
}, {
    name: 'Helge Center',
    lat: 41.46273,
    lng: -87.0419,
    link: './oncampus.html?buildingIndex=',
    desc: "The Helge Center establishes a home for the University’s outreach ministries. Its design preserves the predominance of the historic Chapel of the Resurrection by fitting into the downward slope of a meadow and expresses the Center’s unique role in campus and community life through its strong geometry.",
    image: 'https://www.snh-a.com/wp-content/uploads/helge-center-01-642x300.jpg',
}, 
{
    name: 'Heritage Hall',
    lat: 41.46205, 
    lng: -87.05412,
    link: './oncampus.html?buildingIndex=',
    desc: "Heritage Hall is the oldest building on the campus of Valparaiso University in the U.S. state of Indiana. Built in 1875 by John Flint, it was used as a residence hall for men. Today, Heritage Hall is part of the Valparaiso University School of Law and houses the Valparaiso University Law Clinic, which provides free legal services to qualifying members of the community.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Heritage_Hall_%28rebulit%29_P7240036.JPG',
}, 
{
    name: 'Kallay Christopher Hall',
    lat: 41.46413,
    lng: -87.03859,
    link: './oncampus.html?buildingIndex=',
    desc: "The Geography & Meteorology department’s home is in Kallay-Christopher Hall, an award-winning facility that signals its connection to the weather and the world around it with its strikingly angled wall of windows. It is connected by a glass walkway to Schnabel Hall, which houses a geographic applications lab as well as television and digital media studios used by students exploring a career in broadcast meteorology.",
    image: 'http://architizer-prod.imgix.net/mediadata/projects/412010/bd5257eb.jpg?auto=format,compress&w=1680&cs=strip&q=60',
}, {
    name: 'Kretzmann Hall',
    lat: 41.46219,
    lng: -87.04027,
    link: './oncampus.html?buildingIndex=',
    desc: "The Office of Human Resource Services is committed and dedicated to providing all of its customers, both external and internal, the highest degree of quality services. These services include: Job application process, Hiring process, Benefit administration, Safety administration, HR policies and procedures, Training and development, Performance management. The Office of Human Resource Services works with the colleges, academic departments, and administration of Valparaiso University to ensure that the relationship between Valparaiso University and its employees is respectful, fair, and consistently supportive.",
    image: 'https://www.valpo.edu/human-resources/files/2020/11/20161104-WEW-Campus-Scenes-092-e1605634432938.jpg',
},
{
    name: 'LeBien Hall',
    lat: 41.46661, 
    lng: -87.04709,
    link: './oncampus.html?buildingIndex=',
    desc: "LeBien Hall (College of Nursing and Health Professions)",
    image: '',
},
{
    name: 'LeBien Hall Annex B',
    lat: 41.46642, 
    lng: -87.04789,
    link: './oncampus.html?buildingIndex=',
    desc: "LeBien Hall Annex B as the Physician Assistant Building.",
    image: '',
},
{
    name: 'Linwood House',
    lat: 41.46112, 
    lng: -87.04435,
    link: './oncampus.html?buildingIndex=',
    desc: "Linwood House is an university building in Indiana. Linwood House is situated nearby to Christopher Center and Athletics–Recreation Center.",
    image: '',
},
{
    name: 'Meier Hall',
    lat: 41.4622,
    lng: -87.0387,
    link: './oncampus.html?buildingIndex=',
    desc: "",
    image: '',
}, {
    name: 'Mueller Hall',
    lat: 41.46229,
    lng: -87.04493,
    link: './oncampus.html?buildingIndex=',
    desc: "Mueller Hall was designed by architect Herman H. Bouman of New Jersey. Bouman’s instructions were to design a building “on the model of a British college which would provide a setting for learning on a very personal scale, contrary to the prevailing practice at many large universities where mass and impersonal education has given rise to a great deal of student dissatisfaction.”",
    image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/christ-college/wp-content/uploads/sites/67/nggallery/mueller-hall/44.JPG',
}, {
    name: 'Neils Science Center',
    lat: 41.46482,
    lng: -87.04059,
    link: './oncampus.html?buildingIndex=',
    desc: "Neils Science Center is an university building in Indiana. Neils Science Center is situated nearby to Christopher Center and Brown Field.",
    image: 'http://www.aplf-planetariums.org/images/planetariums/valparaiso_university_in.jpg',
}, {
    name: 'Schnabel Hall',
    lat: 41.46387,
    lng: -87.03834,
    link: './oncampus.html?buildingIndex=',
    desc: "Schnabel Hall is an university building in Indiana. Schnabel Hall is situated nearby to Christopher Center and Brown Field.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Schnabel_Hall_%28Communications%29_P2040010.jpg/2560px-Schnabel_Hall_%28Communications%29_P2040010.jpg',
}, {
    name: 'Urschel Hall',
    lat: 41.46411,
    lng: -87.0376,
    link: './oncampus.html?buildingIndex=',
    desc: "No matter where you are in your career, Valparaiso University’s College of Business has a program that will prepare you to achieve at a higher level. The College offers two undergraduate degree programs with eight undergraduate majors and Valpo’s flexible MBA program, which offers courses online and in person, on a part-time and full-time basis, with six start dates, and six different concentrations.",
    image: 'https://www.valpo.edu/wp-content/uploads/2022/10/20190611-JLH-Urschel-Hall-0061-2200x943.webp',
}, {
    name: 'Weseman Hall',
    lat: 41.46154,
    lng: -87.05325,
    link: './oncampus.html?buildingIndex=',
    desc: "Wesemann Hall is a building in Indiana. Wesemann Hall is situated nearby to the building Heritage Hall and the university building Kade-Duesenberg German House and Cultural Center.",
    image: 'https://berglund-craftcms-assets.s3.amazonaws.com/projects/VU-Wesemann-Hall/_1200x630_crop_center-center_82_none/1959_5377.jpg?mtime=1526672169',

}];

function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}
//add any new array to the end of this (makes a big new array with all the arrays)
var search =buildings.concat(off_campus_buildings).concat(parking_lots).concat(residential_halls).concat(recreational_buildings).concat(health_safety_buildings);

var building_names = getFields(search, "name"); // returns [ 1, 3, 5 ]

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