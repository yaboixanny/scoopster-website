// ===========================
// Prevent Flash of Unstyled Content (FOUC)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ===========================
// Pricing Calculator
// ===========================
function calculatePrice() {
    const numDogs = parseInt(document.getElementById('numDogs').value);
    const yardSize = document.getElementById('yardSize').value;
    const frequency = document.getElementById('frequency').value;

    // Base pricing logic
    let basePrice = 0;

    // Dog count pricing
    if (numDogs === 1) {
        basePrice = 15;
    } else if (numDogs === 2) {
        basePrice = 22;
    } else if (numDogs === 3) {
        basePrice = 28;
    } else {
        basePrice = 35;
    }

    // Yard size multiplier
    let sizeMultiplier = 1;
    if (yardSize === 'small') {
        sizeMultiplier = 1;
    } else if (yardSize === 'medium') {
        sizeMultiplier = 1.3;
    } else if (yardSize === 'large') {
        sizeMultiplier = 1.6;
    }

    // Frequency adjustment
    let frequencyMultiplier = 1;
    let frequencyText = 'per week';

    if (frequency === 'weekly') {
        frequencyMultiplier = 1;
        frequencyText = 'per week';
    } else if (frequency === 'biweekly') {
        frequencyMultiplier = 1.4;
        frequencyText = 'per visit (bi-weekly)';
    } else if (frequency === 'onetime') {
        frequencyMultiplier = 3;
        frequencyText = 'one-time service';
    }

    // Calculate final price
    const finalPrice = Math.round(basePrice * sizeMultiplier * frequencyMultiplier);

    // Display result
    document.getElementById('priceAmount').textContent = `$${finalPrice}`;
    document.getElementById('priceFrequency').textContent = frequencyText;

    // Add animation
    const resultCard = document.querySelector('.result-card');
    resultCard.style.transform = 'scale(1.05)';
    setTimeout(() => {
        resultCard.style.transform = 'scale(1)';
    }, 200);
}

// Initialize calculator with default values
document.addEventListener('DOMContentLoaded', () => {
    calculatePrice();

    // Update price when selections change
    const calculatorInputs = ['numDogs', 'yardSize', 'frequency'];
    calculatorInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', calculatePrice);
        }
    });
});

// ===========================
// Contact Form Validation & Submission
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const dogs = document.getElementById('dogs').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        // Validation
        let isValid = true;
        let errorMessage = '';

        // Name validation
        if (name.length < 2) {
            isValid = false;
            errorMessage += 'Please enter a valid name.\n';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
        if (!phoneRegex.test(phone) || phone.length < 10) {
            isValid = false;
            errorMessage += 'Please enter a valid phone number.\n';
        }

        // Address validation
        if (address.length < 5) {
            isValid = false;
            errorMessage += 'Please enter a valid address.\n';
        }

        // Dogs validation
        if (!dogs) {
            isValid = false;
            errorMessage += 'Please select the number of dogs.\n';
        }

        // Service validation
        if (!service) {
            isValid = false;
            errorMessage += 'Please select a service type.\n';
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // Create form data object
        const formData = {
            name,
            email,
            phone,
            address,
            dogs,
            service,
            message,
            timestamp: new Date().toISOString()
        };

        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted:', formData);

        // Show success message
        showSuccessMessage();

        // Reset form
        contactForm.reset();
    });
}

function showSuccessMessage() {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;

    const successBox = document.createElement('div');
    successBox.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 24px;
        text-align: center;
        max-width: 480px;
        margin: 0 1rem;
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    `;

    successBox.innerHTML = `
        <div style="font-size: 3.5rem; margin-bottom: 1.25rem;">✅</div>
        <h2 style="color: #0f172a; margin-bottom: 0.75rem; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800;">Quote Request Sent!</h2>
        <p style="color: #64748b; margin-bottom: 2rem; line-height: 1.7; font-size: 0.95rem;">
            Thank you for contacting Scoopster! We'll review your information and
            send you a personalized quote within 24 hours.
        </p>
        <button onclick="this.parentElement.parentElement.remove()"
                style="background: linear-gradient(135deg, #16a34a, #15803d); color: white; padding: 0.875rem 2rem;
                       border: none; border-radius: 100px; font-size: 0.95rem;
                       font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25);
                       font-family: 'Inter', sans-serif;">
            Close
        </button>
    `;

    overlay.appendChild(successBox);
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    // Auto-close after 5 seconds
    setTimeout(() => {
        if (overlay.parentElement) {
            overlay.remove();
        }
    }, 5000);
}

// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Don't prevent default for hash-only links (like #privacy, #terms)
        if (href.length <= 1) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Phone Number Formatting
// ===========================
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        if (value.length >= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length >= 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }

        e.target.value = value;
    });
}

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .why-item, .price-card, .stat-item, .area-item, .step, .related-card, .faq-item, .included-item, .related-post-card'
    );

    animatedElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(i % 6) * 0.06}s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(i % 6) * 0.06}s`;
        observer.observe(el);
    });
});

// ===========================
// Performance: Lazy Loading
// ===========================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===========================
// Header Scroll Effect (Glassmorphism)
// ===========================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// FAQ Toggle Function
// ===========================
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer) {
            otherAnswer.style.maxHeight = '0';
            const otherIcon = otherAnswer.parentElement.querySelector('.faq-icon');
            if (otherIcon) {
                otherIcon.textContent = '+';
                otherIcon.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Toggle current FAQ
    if (isOpen) {
        answer.style.maxHeight = '0';
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    }
}

// ===========================
// Service Area Map Enhancement (Optional)
// ===========================
// If you want to integrate Google Maps or Leaflet.js, add the code here
// For now, we're using a styled placeholder

// Example for future Google Maps integration:
/*
function initMap() {
    const hamilton = { lat: 43.2557, lng: -79.8711 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: hamilton,
        styles: [ ... custom styles ... ]
    });

    const marker = new google.maps.Marker({
        position: hamilton,
        map: map,
        title: 'Scoopster - Hamilton'
    });
}
*/