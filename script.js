/**
 * Dar Es Salaam Printmaker 
 * Classic Scroll Reveal Animation
 */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: Remove if you want animation to play only once
            // reveals[i].classList.remove("active"); 
        }
    }
}

// Initial check when page loads
window.addEventListener("load", reveal);

// Check when user scrolls
window.addEventListener("scroll", reveal);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
