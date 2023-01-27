function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleNav() {
    var nav = document.getElementById("mySidebar");
    var other = document.getElementById("main");
    if (nav.style.width === "400px") {
        nav.style.width = "0";
        other.style.marginLeft = "0";
    } else {
        nav.style.width = "400px";
        other.style.marginLeft = "400px";
    }
}