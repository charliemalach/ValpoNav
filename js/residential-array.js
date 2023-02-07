var str = ''; // variable to store the options

var residential_halls = [{

        name: 'Alumni Hall',
        lat: 41.4661, 
        lng: -87.04077,
        link: 'https://www.valpo.edu/reslife/residence-halls/alumni-hall/',
        desc: "Alumni hall is a co-ed residence hall that has a capacity for 348 students. Alumni is a traditional style hall that houses students in double rooms that include bolster beds, wall closets, desks with chairs, bookshelves and dressers.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2022/05/20210709-JLH-Alumni-Hall-001-600x400.jpg'
    },
    {
        name: 'Beacon Hall',
        lat: 41.46636, 
        lng: -87.04345,
        link: 'https://www.valpo.edu/reslife/residence-halls/beacon-hall/',
        desc: "Beacon hall is a co-ed residence hall that has the capacity for 290 students. Beacon is a suite style hall that houses upper-class students in four, six, or eight person suites.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2020/02/20140718-JLH-Beacon-Hall-004-600x400.jpg'
    },
    {
        name: 'Brandt Hall',
        lat: 41.46534, 
        lng: -87.03931,
        link: 'https://www.valpo.edu/reslife/residence-halls/brandt-hall/',
        desc: "Brandt hall is a co-ed residence hall that has a capacity for 332 students. Brandt is a traditional style hall that houses students in double rooms that include movable beds, closets, desks with chairs, bookshelves and dressers.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2020/03/Brandt-Building-3-600x400.jpg'
    },
    {
        name: 'Guild/Memorial Hall',
        lat: 41.46297, 
        lng: -87.04602,
        link: 'https://www.valpo.edu/reslife/residence-halls/guildmemorial-hall/',
        desc: "Guild and Memorial Halls were the first residence halls on Valparaiso University’s campus, and in 1999 they were joined to make our current Guild/Memorial Hall. “GM” is a co-ed hall that has the capacity for 294 students, with 137 upper-class women living on the Guild side and 157 upper-class men living on the Memorial side.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2020/03/20111007-Guild-Hall_0007-600x400.jpg'
    },
    {
        name: 'Kade-Duesenberg German House',
        lat: 41.4616, 
        lng: -87.04975,
        link: 'https://www.valpo.edu/reslife/residence-halls/kadeduesenberg-german-house/',
        desc: "Kade-Dusenberg German House is a co-ed residence hall that has a capacity for 13 students. Residents of Kade study German language and culture through a partnership between Foreign Languages and Residential Life. This hall is unique in that the German language must be spoken at all times in the public areas of the facility, such as the kitchen and lounges, in order to promote immersion and learning.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2020/12/20140430-JLH-Campus-Scenes-013-600x400.jpg'
    },
    {
        name: 'Lankenau Hall',
        lat: 41.46594,  
        lng: -87.04204,
        link: 'https://www.valpo.edu/reslife/residence-halls/lankenau-hall/',
        desc: "Lankeanu hall is a co-ed residence hall that has a capacity for 332 students. Lankenau is a traditional style hall that houses predominately freshman students in double rooms that include bolster beds, closets, desks with chairs, bookshelves and dressers.",
        image: 'https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/reslife/files/2016/04/20160620-JLH-Lankenau-Hall-001.jpg'
    },
    {
        name: 'Promenade Apartments',
        lat: 41.46722,  
        lng: -87.04322,
        link: 'https://www.valpo.edu/reslife/residence-halls/promenade/',
        desc: "The Promenade Apartments are two co-ed apartment facilities that each have a capacity for 56 students. The Promenade Apartments are offered to students who have resided on-campus for at least four semesters. Each apartment is a two-story unit with four people living in each unit. The apartments include a common area living room, full kitchen, two bedrooms, and two and a half bathrooms.",
        image: 'https://www.valpo.edu/reslife/files/2020/12/20140710-JLH-Campus-Construction-004-600x400.jpg'
    },  
    {
        name: 'Wehrenberg Hall',
        lat: 41.4653,   
        lng: -87.03851,
        link: 'https://www.valpo.edu/reslife/residence-halls/wehrenberg-hall/',
        desc: "Wehrenberg Hall is a co-ed residence hall with a capacity for 269 students. Wehrenberg is a traditional style hall that houses upper-class students in double rooms that include movable beds, desks with chairs, built in wall closets, bookshelves, and dressers.",
        image: 'https://www.valpo.edu/reslife/files/2020/12/20110825-Wehrenberg-Hall_0001-600x400.jpg'
    },


];

// loop to get the list of buildings 
for (var i = 0; i < residential_halls.length; ++i) {
    str += '<option value="' + residential_halls[i].name + '" >'; // Storing options in variable
}
var my_list = document.getElementById("residential_halls");
my_list.innerHTML = str;