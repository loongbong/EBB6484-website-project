// Contact Form Submission Simulation
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Check if the form and message elements exist on the current page (contact.html)
if (contactForm && successMessage) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();

        // Show the success message
        successMessage.style.display = 'block';

        // Optional: Clear the form fields after a short delay
        setTimeout(() => {
            contactForm.reset();
            // Optional: Hide the success message again after a few seconds
            // setTimeout(() => {
            //     successMessage.style.display = 'none';
            // }, 5000); // Hide after 5 seconds
        }, 500); // Delay clearing form slightly
    });
}

// Simple active state handling for navigation (applies to all pages)
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current page filename (e.g., 'about.html' or 'index.html')
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to index.html if path is '/'

    // Find the navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html'; // Also default href '/' or '' to index.html

        // Remove active class from all links first
        link.classList.remove('active');

        // Add active class if the link's href matches the current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Accordion Functionality for Services Page
const accordions = document.querySelectorAll('.accordion-trigger');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        // Toggle the 'active' class on the button
        this.classList.toggle('active');

        // Get the panel associated with this button
        const panel = this.nextElementSibling; // Assumes panel is directly after button

        // Toggle the 'open' class for styling purposes (like border-top)
         panel.classList.toggle('open');

        // Toggle the max-height for expand/collapse
        if (panel.style.maxHeight) {
            // If panel is open, close it
            panel.style.maxHeight = null;
        } else {
            // If panel is closed, open it - set max-height to its scroll height
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});