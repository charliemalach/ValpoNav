var str = ''; // variable to store the options

var parking_lots = [{
    
        name: 'Lot 1',
        lat: 41.4615, 
        lng: -87.03923,
        permitted: "Faculty/Staff, Visitor",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://lh3.googleusercontent.com/blogger_img_proxy/AHs97-lC8y-V2Wbht2qUpQb8toeE2ZqzTrIcqoWJY-iwi9EH5MOBkdnGM3BfEsDR289xAiXxemf1L6yJg2HRu4sa9I3sejX8TDIZaiLWpMApF3jEENoui5by_BGqV4CvZZ-Lf9ceux5kVXb0kbzk35JxXGYr=s0-d'
    }, 
    {
    
        name: 'Lot 2',
        lat: 41.46148,  
        lng: -87.03776,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
    
        name: 'Lot 3',
        lat: 41.4631,  
        lng: -87.03703,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
    
        name: 'Lot 5',
        lat: 41.46417,  
        lng: -87.03714,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
    
        name: 'Lot 8',
        lat: 41.46601, 
        lng: -87.03981,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 13',
        lat: 41.46502, 
        lng: -87.04219,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 14',
        lat: 41.46482, 
        lng: -87.0441,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 15',
        lat: 41.46413,  
        lng: -87.04467,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 19',
        lat: 41.4613,   
        lng: -87.04156,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },

    {
        name: 'Lot 20',
        lat: 41.46125,  
        lng: -87.04342,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 21',
        lat: 41.46215,  
        lng:  -87.04441,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 22',
        lat: 41.46137,  
        lng: -87.04469,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },
    {
        name: 'Lot 30',
        lat: 41.46137,  
        lng: -87.04469,
        permitted: " ",
        desc: "Some parking areas are divided into specific permit zones. ",
        image: 'https://pbs.twimg.com/profile_images/1136384584239632386/3oMInKza_400x400.jpg'
    },    
];

// loop to get the list of buildings 
for (var i = 0; i < parking_lots.length; ++i) {
    str += '<option value="' + parking_lots[i].name + '" >'; // Storing options in variable
}
var my_list = document.getElementById("parking_lots");
my_list.innerHTML = str;