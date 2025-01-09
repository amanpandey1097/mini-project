

// Simple search button functionality
const searchButton = document.querySelector('header .search-bar button');
const searchInput = document.querySelector('header .search-bar input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query.trim() !== "") {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search term.");
    }
});
