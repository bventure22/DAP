// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Horizontal Scroll with Mouse Wheel
const scrollContainer = document.querySelector(".scroll-wrapper");
scrollContainer.addEventListener("wheel", (evt) => {
    if (window.innerWidth > 768) { // Only for desktop
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    }
}, { passive: false });

// Tighter Navbar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.padding = window.scrollY > 50 ? '10px 8%' : '15px 8%';
    nav.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.7)';
});
