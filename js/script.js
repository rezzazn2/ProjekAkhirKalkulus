// Select the navbar element
const navbar = document.querySelector('nav');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Check if scroll position is greater than 0
    if (window.scrollY > 0) {
        // Add a class to change the navbar style
        console.log("oke");
        navbar.classList.add('scrolled');
    } else {
        // Remove the class when at the top
        navbar.classList.remove('scrolled');
    }
});
