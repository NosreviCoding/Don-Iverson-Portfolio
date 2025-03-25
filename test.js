function handleScroll(divClass) {
    const div = document.querySelector('.' + divClass);

    if (!div) {
        return; // Exit if div is not found
    }

    const divPosition = div.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the div has scrolled into view
    if (divPosition < windowHeight && divPosition > 0) {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

// Function to check divs on page load
function checkDivsOnLoad() {
    handleScroll('profile');
    handleScroll('about');
    handleScroll('journey');
    handleScroll('abilities');
}

// Run the check on page load
checkDivsOnLoad();

// Add scroll event listener
window.addEventListener('scroll', function() {
    checkDivsOnLoad(); // Re-check on scroll
});