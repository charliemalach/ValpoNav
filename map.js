//initialize the map
var map = L.map('map').setView([41.4628, -87.0442], 16);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);




function toggleCategory(event) {
    var category = event.target.parentNode;
    var content = category.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    category.classList.toggle("active");
}