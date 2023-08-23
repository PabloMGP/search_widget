const searchBtn = document.querySelector('.btn');
const searchInput = document.querySelector('.input');

// Add a click event listener to the search button
searchBtn.addEventListener("click", () => {
    performSearch();
});

// Add a key press event listener to the search input
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

// Perform Google search function
function performSearch() {
    const query = searchInput.value;
    if (query) {
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchURL;
    }
}