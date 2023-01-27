function toggleCategory(event) {
    var category = event.target.parentNode;
    var content = category.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    category.classList.toggle("active");
}