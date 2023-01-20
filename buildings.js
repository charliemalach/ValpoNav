
var str=''; // variable to store the options

// Create an array of building objects that includes the building name and location
var buildings = [
    {
        name: 'Center for the Arts',
        lat: 41.46397,
        lng: -87.04003,
        link: 'https://www.example1.com'
    }, {
        name: 'Center for the Sciences',
        lat: 41.46241,
        lng: -87.03952,
        link: 'https://www.example1.com'
    }, {
        name: 'Christopher Center',
        lat: 41.46268,
        lng: -87.04299,
        link: 'https://www.example1.com'
    }, {
        name: 'College of Arts and Sciences',
        lat: 41.46269,
        lng: -87.04386,
        link: 'https://www.example1.com'
    }, {
        name: 'Duesenberg Welcome Center',
        lat: 41.46123,
        lng: -87.04116,
        link: 'https://www.example1.com'
    }, {
        name: 'Fites Center',
        lat: 41.4623,
        lng: -87.03775,
        link: 'https://www.example1.com'
    }, {
        name: 'Gellersen Center',
        lat: 41.46271,
        lng: -87.03799,
        link: 'https://www.example1.com'
    }, { 
        name: 'Harre Union',
        lat: 41.46421,
        lng: -87.04226,
        link: 'https://www.example1.com'
    }, {
        name: 'Helge Center',
        lat: 41.46273,
        lng: -87.0419,
        link: 'https://www.example1.com'
    }, {
        name: 'Kallay Christopher Hall',
        lat: 41.46413,
        lng: -87.03859,
        link: 'https://www.example1.com'
    }, {
        name: 'Kretzmann Hall',
        lat: 41.46219,
        lng: -87.04027,
        link: 'https://www.example1.com'
    },{
        name: 'Meier Hall',
        lat: 41.4622,
        lng: -87.0387,
        link: 'https://www.example1.com'
    }, {
        name: 'Mueller Hall',
        lat: 41.46229,
        lng: -87.04493,
        link: 'https://www.example1.com'
    }, {
        name: 'Neils Science Center',
        lat: 41.46482,
        lng: -87.04059,
        link: 'https://www.example1.com'
    }, {
        name: 'Schnabel Hall',
        lat: 41.46387,
        lng: -87.03834,
        link: 'https://www.example1.com'
    },  {
        name: 'Urschel Hall',
        lat: 41.46411,
        lng: -87.0376,
        link: 'https://www.example1.com'
    },    {
        name: 'Weseman Hall',
        lat: 41.46154,
        lng: -87.05325,
        link: 'https://www.example1.com'
    }, {
        name: 'CVS Pharmacy',
        lat: 41.45974,
        lng: -87.06254,
        link: 'https://www.cvs.com/'
    },  {
        name: 'Dominos Pizza',
        lat: 41.46656,
        lng: -87.03962,
        link: 'https://www.dominos.com/en/'
    }, {
        name: 'Hungry Howies',
        lat: 41.46856,
        lng: -87.0468,
        link: 'https://www.hungryhowies.com/'
    }, {
        name: 'Jimmy Johns',
        lat: 41.46749,
        lng: -87.04097,
        link: 'https://www.jimmyjohns.com/'
    }, {
        name: 'Panera Bread',
        lat: 41.46811,
        lng: -87.0275,
        link: 'https://www.panerabread.com/en-us/home.html'
    } ]; 





// loop to get the list of buildings 
for (var i=0; i < buildings.length;++i){
    str += '<option value="'+buildings[i].name+'" />'; // Storing options in variable
}
var my_list=document.getElementById("buildings");
my_list.innerHTML = str;
