document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Add a click event listener to the button
    scrollToTopBtn.addEventListener("click", function () {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Use smooth scrolling behavior
        });
    });
});