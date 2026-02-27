// Dynamic glow follow
/* Open the left side menu */
function openNav() {
    document.getElementById("sideMenu").style.width = "300px";
}

/* Close the side menu */
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

// Close menu if user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("sideMenu")) {
        closeNav();
    }
}
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
});

// Reveal cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.neon-card').forEach(card => {
    observer.observe(card);
});
