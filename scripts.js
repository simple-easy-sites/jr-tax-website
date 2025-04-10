// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    
    // Initialize countdown timer
    initCountdown();
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the verification answer
            const verificationAnswer = document.getElementById('verification').value;
            
            // Check if the answer is correct (5 + 3 = 8)
            if (verificationAnswer !== '8') {
                alert('Please enter the correct answer to the verification question.');
                return;
            }
            
            // If we got here, the verification is correct
            // In a real implementation, you would send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add animations for elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.info-card, .service-locations li, .countdown-number, .map-container, .certification-badges, .process-card.premium-effect, .service-card-premium');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = element.classList.contains('map-container') ? 'translateY(0)' : 
                                               element.classList.contains('certification-badges') ? 'translateY(0)' : 
                                               element.classList.contains('process-card') || element.classList.contains('service-card-premium') ? 'translateY(0)' :
                                               'translateY(0)';
                }, element.classList.contains('service-card-premium') ? index * 150 : 0); // Stagger service cards animation
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.info-card, .service-locations li, .countdown-number, .map-container, .certification-badges, .process-card.premium-effect, .service-card-premium').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = element.classList.contains('map-container') ? 'translateY(30px)' : 
                                   element.classList.contains('certification-badges') ? 'translateX(' + (element.parentElement.children[0] === element ? '-20px' : '20px') + ')' : 
                                   element.classList.contains('process-card') || element.classList.contains('service-card-premium') ? 'translateY(40px)' :
                                   'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

// Initialize and update the countdown timer
function initCountdown() {
    // Set countdown date - for demo purposes, let's set it to April 15 of next year
    const currentDate = new Date();
    let targetYear = currentDate.getFullYear();
    
    // If current date is past April 15, target next year
    if (currentDate.getMonth() > 3 || (currentDate.getMonth() === 3 && currentDate.getDate() > 15)) {
        targetYear++;
    }
    
    const targetDate = new Date(targetYear, 3, 15); // April 15th of the target year
    
    // Update countdown initially and then every hour
    updateCountdown(targetDate);
    
    // For a more engaging experience, update every hour instead of every day
    setInterval(() => updateCountdown(targetDate), 3600000); // Update every hour (in milliseconds)
}

// Update the countdown display
function updateCountdown(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    
    // If the target date has passed, do nothing (this shouldn't happen with our logic above)
    if (timeDifference < 0) return;
    
    // Calculate days and weeks
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    
    // Update the display with animation effect
    updateCountdownElement('countdown-weeks', weeks);
    updateCountdownElement('countdown-days', days);
}

// Helper function to update countdown elements with a small animation
function updateCountdownElement(elementId, value) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const formattedValue = String(value).padStart(2, '0');
    
    // Only animate if the value has changed
    if (element.textContent !== formattedValue) {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            element.textContent = formattedValue;
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 150);
        }, 150);
    }
} 