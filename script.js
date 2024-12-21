// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Add sticky navigation
// const nav = document.querySelector('nav');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
    
//     if (currentScroll <= 0) {
//         nav.classList.remove('scroll-up');
//         return;
//     }
    
//     if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
//         nav.classList.remove('scroll-up');
//         nav.classList.add('scroll-down');
//     } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
//         nav.classList.remove('scroll-down');
//         nav.classList.add('scroll-up');
//     }
//     lastScroll = currentScroll;
// });

// Add lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');
const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

// Handle scroll
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < 30) {
        navbar.style.transform = 'translateY(0)';
    } else {
        if (currentScrollY > lastScrollY) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollY = currentScrollY;
});


mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.mobile-menu') && 
        !event.target.closest('.mobile-menu-btn') && 
        mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
});