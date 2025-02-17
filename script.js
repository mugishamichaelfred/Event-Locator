// script.js

// Event search functionality
document.getElementById("searchBar").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    let searchTerm = document.getElementById("search").value.toLowerCase();  // Get the user's search input
    let eventCards = document.querySelectorAll(".event-card");  // Get all event cards

    eventCards.forEach(function(card) {
        let eventTitle = card.querySelector("h3").textContent.toLowerCase();  // Get the event title
        
        // If the title matches the search term, display the event, otherwise hide it
        if (eventTitle.includes(searchTerm)) {
            card.style.display = "block";  // Show event card
        } else {
            card.style.display = "none";  // Hide event card
        }
    });
});

// Category filter functionality
let categoryLinks = document.querySelectorAll("#cat-filtering ul li a");

categoryLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the default anchor link behavior
        
        let category = link.getAttribute("href").split("/")[1].split(".")[0].toLowerCase();  // Get category from the link
        let eventCards = document.querySelectorAll(".event-card");  // Get all event cards

        eventCards.forEach(function(card) {
            let categoryText = card.querySelector("h3").textContent.toLowerCase();  // Get event title text
            
            // If the event belongs to the clicked category, show it
            if (categoryText.includes(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";  // Hide other categories
            }
        });
    });
});
