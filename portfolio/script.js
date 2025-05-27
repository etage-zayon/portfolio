document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-list a, .hero-section .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            const navList = document.getElementById('navList');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                document.getElementById('hamburger').classList.remove('open');
            }
        });
    });

    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Optional: Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navList.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});