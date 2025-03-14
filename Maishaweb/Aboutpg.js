document.getElementById("about-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
