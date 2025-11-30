// ------------------------
// SELECT SLIDES + DOTS
// ------------------------
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

let currentSlide = 0;
let slideIntervalId = null; // single global interval variable

// ------------------------
// SHOW A SPECIFIC SLIDE
// ------------------------
function showSlide(index) {
    // Remove active class from current slide + dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Loop forever 0 → 1 → 2 → 0 → 1 → 2 …
    currentSlide = (index + slides.length) % slides.length;

    // Add active class to the new slide + dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// ------------------------
// AUTO ROTATE
// ------------------------
function startAutoSlide() {
    slideIntervalId = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 10000); // every 10 seconds
}

function stopAutoSlide() {
    if (slideIntervalId) {
        clearInterval(slideIntervalId);
        slideIntervalId = null;
    }
}

// ------------------------
// DOT CLICK EVENTS
// ------------------------
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    });
});

// ------------------------
// START WHEN PAGE LOADS
// ------------------------
window.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add('active');
    dots[0].classList.add('active');
    startAutoSlide();
});

// ------------------------
// NAV ACTIVE LINK LOGIC
// ------------------------
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});








// COUNT-UP ANIMATION
const statNumbers = document.querySelectorAll(".stat-number");

function animateCount(el) {
    const target = +el.getAttribute("data-target");
    const duration = 3000;
    const startTime = performance.now();

    function update(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Trigger only when section is visible
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(num => animateCount(num));
                observer.disconnect(); // run once only
            }
        });
    },
    { threshold: 0.3 }
);

observer.observe(document.querySelector("#stats"));









//styles patient-testimonials
