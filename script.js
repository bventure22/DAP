// Dynamic glow follow
/* Open the left side menu */
let menuOpen = false;

function toggleNav() {
    const drawer = document.getElementById("sideDrawer");
    const bars = document.querySelectorAll(".bar");

    if (!menuOpen) {
        drawer.style.width = "350px";
        // Animate hamburger to X (optional fun detail)
        bars[0].style.transform = "rotate(-45deg) translate(-9px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-8px, -6px)";
        menuOpen = true;
    } else {
        drawer.style.width = "0";
        // Reset hamburger
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
        menuOpen = false;
    }
}
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
