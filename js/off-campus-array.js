var str = ''; // variable to store the options

var off_campus_buildings = [{

        name: 'CVS Pharmacy',
        lat: 41.45974,
        lng: -87.06254,
        link: './offcampus.html?buildingIndex=',
        desc: "CVS Pharmacy, Inc. is an American retail corporation. A subsidiary of CVS Health, it is headquartered in Woonsocket, Rhode Island. It was also known as, and originally named, the Consumer Value Store and was founded in Lowell, Massachusetts, in 1963. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a>",
        image: 'https://www.cvshealth.com/content/dam/enterprise/cvs-enterprise/images/ingestion/2021/cvs-health-cvs-health-announces-steps-to-accelerate-omnichannel-health-strategy-1-16x9.jpg'
    },
    {
        name: 'Dominos Pizza',
        lat: 41.46656,
        lng: -87.03962,
        link: './offcampus.html?buildingIndex=',
        desc: "Domino’s came from humble beginnings in 1960, with just one store. Now, as the largest pizza company in the world, Domino’s proudly continues its legacy of delivering great-tasting pizza to customers’ doors. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue> here</a>",
        image: 'https://content-service.sodexomyway.com/media/pizza-pepperoni_tcm1156-25618.jpg?url=https://dining.wm.edu/'
    },
    {
        name: 'Hungry Howies',
        lat: 41.46856,
        lng: -87.0468,
        link: './offcampus.html?buildingIndex=',
        desc: "Hungry Howie's Pizza & Subs, Inc., also known as Hungry Howie's Pizza, is a franchise and the 11th largest pizza chain in the United States, with over 550 locations. Hungry Howie's products include pizza, calzone-style subs, chicken wings and tenders, bread, salads, and cookies.<br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a>",
        image: 'https://img.franchising.com/art/articles/6479_plate.jpg'
    },
    {
        name: 'Jimmy Johns',
        lat: 41.46749,
        lng: -87.04097,
        link: './offcampus.html?buildingIndex=',
        desc: "Jimmy John's is an American sandwich chain headquartered in Champaign, Illinois. The business was founded by Jimmy John Liautaud in 1983. After Liautaud graduated from high school, his father gave him a choice to either join the military or start a business. Liautaud, choosing the latter, initially decided to start a hot dog business, but changed to opening a sandwich business due to costs. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Ignite%20Completes%20Jimmy%20Johns%20acquisition.jpg?itok=Ak229Q17'
    },
    {
        name: 'Panera Bread',
        lat: 41.46811,
        lng: -87.0275,
        link: './offcampus.html?buildingIndex=',
        desc: "Panera Bread is an American chain store of bakery-café fast casual restaurants with over 2,000 locations, all of which are in the United States and Canada. Its headquarters are in Sunset Hills, Missouri. The company operates as Saint Louis Bread Company in the Greater St. Louis area, where it has over 100 locations.[6] Offerings include bakery items, pasta, salads, sandwiches, soups, and specialty drinks. As of 2020, the menu also includes flatbread pizzas.<br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://image.cnbcfm.com/api/v1/image/106972691-1636466150088-gettyimages-1280324270-1006_32_fl200924107.jpeg?v=1661775251'
    },
    {
        name: 'Qdoba',
        lat: 41.46811, 
        lng: -87.02787,
        link: './offcampus.html?buildingIndex=',
        desc: "Qdoba is a chain of fast casual restaurants in the United States and Canada serving Mexican-style cuisine. After spending 15 years as a wholly owned subsidiary of Jack in the Box, the company was sold to a consortium of funds led by Apollo Global Management in March 2018. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://content-service.sodexomyway.com/media/qdoba%20%281%29_tcm1108-132029.jpg?url=https://lmudining.sodexomyway.com/'
    },
    {
        name: 'Quiznos',
        lat: 41.46763,  
        lng: -87.02895,
        link: './offcampus.html?buildingIndex=',
        desc: "Quiznos is known for toasted, build-your-own subs, this counter-serve chain also sells soups, salads & more. <br><br> Valparaiso University is excited to extend our OneCard program to off campus merchants.This enables us to partner with local businesses to allow students, faculty and staff to use their Beacon Bucks for payment at local business around the Valpo area! For more information, visit <a href=https://www.valpo.edu/it/onecard/beacon-bucks/off-campus-merchants/ style= color:blue target=_blank> here</a> ",
        image: 'https://cdn.winsightmedia.com/platform/files/public/2018-06/background/Quiznos-exterior_1528901830.jpg/'
    }
];

// loop to get the list of buildings 
for (var i = 0; i < off_campus_buildings.length; ++i) {
    str += '<option value="' + off_campus_buildings[i].name + '" >'; // Storing options in variable
}
var my_list = document.getElementById("off_campus_buildings");
my_list.innerHTML = str;