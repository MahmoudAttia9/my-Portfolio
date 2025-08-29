
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Animate On Scroll Initialization
     */
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    /**
     * Navbar shrink on scroll
     */
    const navbar = document.querySelector('#main-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    /**
     * Typed.js for hero section typing effect
     */
    const typed = document.querySelector('.typed');
    if (typed) {
        let typed_strings = "Web Developer, Full-Stack, Freelancer, UI/UX Designer, Problem Solver"; // Customize these strings
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    
    /**
     * Back to top button
     */
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        }
        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /**
     * Active nav link on scroll
     */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // This margin helps activate the link when the section is centered

    sections.forEach(section => {
        observer.observe(section);
    });

});
