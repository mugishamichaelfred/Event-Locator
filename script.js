//Step 1: Structure Mock Data
const events = [
    // Music Events
    {
        id: 1,
        title: "Jazz Night",
        category: "Music",
        description: "Enjoy a night of smooth jazz with local artists.",
        date: "28th Feb 2025",
        time: "21:00",
        price: "10000 RwF",
        image: "images/music/event1.jpg"
    },
    {
        id: 2,
        title: "Rock Fest",
        category: "Music",
        description: "Join the best rock bands for an epic night.",
        date: "15th Mar 2025",
        time: "19:00",
        price: "15000 RwF",
        image: "images/music/event2.jpg"
    },

    // Sports Events
    {
        id: 3,
        title: "Football Championship",
        category: "Sports",
        description: "The biggest football match of the year.",
        date: "5th Apr 2025",
        time: "17:00",
        price: "3000 RwF",
        image: "images/sports/event1.jpg"
    },
    {
        id: 4,
        title: "Marathon Race",
        category: "Sports",
        description: "Test your limits in a thrilling marathon.",
        date: "22nd Apr 2025",
        time: "07:00",
        price: "5000 RwF",
        image: "images/sports/event2.jpg"
    },

    // Art Events
    {
        id: 5,
        title: "Modern Art Exhibit",
        category: "Art",
        description: "Explore the finest collection of modern art.",
        date: "10th Mar 2025",
        time: "09:00",
        price: "2000 RwF",
        image: "images/art/event1.jpg"
    },
    {
        id: 6,
        title: "Sculpture Workshop",
        category: "Art",
        description: "Learn the art of sculpture with a hands-on workshop.",
        date: "20th Mar 2025",
        time: "13:00",
        price: "3000 RwF",
        image: "images/art/event2.jpg"
    },

    // Theatre Events
    {
        id: 7,
        title: "Shakespeare in the Park",
        category: "Theatre",
        description: "A live outdoor performance of Shakespeare's best plays.",
        date: "25th Mar 2025",
        time: "18:30",
        price: "5000 RwF",
        image: "images/theatre/event1.jpg"
    },
    {
        id: 8,
        title: "Broadway Night",
        category: "Theatre",
        description: "Enjoy a selection of Broadway's best musical numbers.",
        date: "12th Apr 2025",
        time: "20:00",
        price: "12000 RwF",
        image: "images/theatre/event2.jpg"
    },

    // Dance Events
    {
        id: 9,
        title: "Salsa Dance Party",
        category: "Dance",
        description: "Join us for a lively salsa night!",
        date: "8th Mar 2025",
        time: "22:00",
        price: "7000 RwF",
        image: "images/dance/event1.jpg"
    },
    {
        id: 10,
        title: "Hip Hop Dance Battle",
        category: "Dance",
        description: "Witness the ultimate battle between the best hip-hop dancers.",
        date: "15th Apr 2025",
        time: "18:00",
        price: "8000 RwF",
        image: "images/dance/event2.jpg"
    },

    // Comedy Events
    {
        id: 11,
        title: "Stand-up Night",
        category: "Comedy",
        description: "A night filled with laughter from the top comedians.",
        date: "10th Apr 2025",
        time: "20:00",
        price: "3000 RwF",
        image: "images/comedy/event1.jpg"
    },
    {
        id: 12,
        title: "Improv Comedy Show",
        category: "Comedy",
        description: "Watch our talented comedians improvise their way through the night.",
        date: "23rd Apr 2025",
        time: "19:30",
        price: "4000 RwF",
        image: "images/comedy/event2.jpg"
    },

    // Fashion Events
    {
        id: 13,
        title: "Fashion Show 2025",
        category: "Fashion",
        description: "The latest trends straight from the runway.",
        date: "2nd Mar 2025",
        time: "18:00",
        price: "10000 RwF",
        image: "images/fashion/event1.jpg"
    },
    {
        id: 14,
        title: "Vintage Fashion Sale",
        category: "Fashion",
        description: "Shop vintage pieces and timeless styles.",
        date: "17th Mar 2025",
        time: "10:00",
        price: "2000 RwF",
        image: "images/fashion/event2.jpg"
    },

    // Food Events
    {
        id: 15,
        title: "Gourmet Food Festival",
        category: "Food",
        description: "Sample the finest cuisines from top chefs.",
        date: "12th Apr 2025",
        time: "11:00",
        price: "15000 RwF",
        image: "images/food/event1.jpg"
    },
    {
        id: 16,
        title: "Vegan Cooking Class",
        category: "Food",
        description: "Learn how to make delicious vegan dishes.",
        date: "20th Mar 2025",
        time: "15:00",
        price: "5000 RwF",
        image: "images/food/event2.jpg"
    },

    // Film Events
    {
        id: 17,
        title: "Outdoor Movie Night",
        category: "Film",
        description: "Watch the latest movies under the stars.",
        date: "6th Mar 2025",
        time: "20:00",
        price: "1000 RwF",
        image: "images/film/event1.jpg"
    },
    {
        id: 18,
        title: "Film Premier: Action Thriller",
        category: "Film",
        description: "Be the first to watch the latest action thriller.",
        date: "28th Mar 2025",
        time: "22:00",
        price: "12000 RwF",
        image: "images/film/event2.jpg"
    },

    // Literature Events
    {
        id: 19,
        title: "Poetry Reading Night",
        category: "Literature",
        description: "A cozy evening with poems and stories from local writers.",
        date: "4th Mar 2025",
        time: "19:00",
        price: "3000 RwF",
        image: "images/literature/event1.png"
    },
    {
        id: 20,
        title: "Book Club Meeting",
        category: "Literature",
        description: "Join us for a discussion on the latest bestsellers.",
        date: "18th Mar 2025",
        time: "16:00",
        price: "2000 RwF",
        image: "images/literature/event2.jpg"
    }
];




//Step 2: Render Events
document.addEventListener("DOMContentLoaded", function () {
    // Get the container where we will display the events
    const eventContainer = document.querySelector('.main');

    // Function to render events
    function renderEvents(events) {
        eventContainer.innerHTML = ''; // Clear previous events

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');

            // Create event content
            const eventHTML = `
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>Price: ${event.price} <span>${event.date} - </span><time datetime="${event.date}">${event.time}</time></p>
            `;

            eventCard.innerHTML = eventHTML;
            eventContainer.appendChild(eventCard);

            // Add click event to show more details on modal
            eventCard.addEventListener("click", () => showEventDetails(event));
        });
    }

    // Call the render function to display all events
    renderEvents(events);
});



//Step 3: Implement Event Details Modal
// Function to show event details in the modal
function showEventDetails(event) {
    const modal = document.getElementById('eventModal');
    document.getElementById('modalEventTitle').textContent = event.title;
    document.getElementById('modalEventImage').src = event.image;
    document.getElementById('modalEventDescription').textContent = event.description;
    document.getElementById('modalEventPrice').textContent = `Price: ${event.price}`;
    document.getElementById('modalEventDateTime').textContent = `${event.date} - ${event.time}`;

    modal.style.display = "block"; // Show the modal
}

// Close modal functionality
document.getElementById('closeModal').addEventListener("click", function () {
    document.getElementById('eventModal').style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//Step 4: Implement Filtering by Category

document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll('#cat-filtering ul li a');

    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = event.target.textContent;

            // Filter events by category
            const filteredEvents = events.filter(event => event.category === category || category === "All");
            renderEvents(filteredEvents);
        });
    });
});


//Step 5: Implement Search Functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Filter events by search term
        const searchedEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm)
        );

        renderEvents(searchedEvents); // Re-render filtered events
    });
});



