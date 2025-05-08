// Enhanced Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('href');
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        document.querySelector(targetPage).classList.add('active');
        
        // Update active navigation
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Advanced Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]');
    const experience = form.querySelector('textarea');
    
    if (!validateEmail(email.value)) {
        showError(email, 'Please use a professional email address');
        return;
    }
    
    if (experience.value.length < 50) {
        showError(experience, 'Please describe your experience in detail (min 50 characters)');
        return;
    }
    
    // Simulate form submission
    form.reset();
    showSuccess('Your consultation request has been received! Our team will contact you within 24 hours.');
});

function validateEmail(email) {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
}

function showError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#fc8181';
    field.parentNode.appendChild(errorElement);
    
    setTimeout(() => {
        errorElement.remove();
    }, 5000);
}

function showSuccess(message) {
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;
    successElement.style.cssText = 'background: #48bb78; color: white; padding: 1rem; border-radius: 5px; margin: 1rem 0;';
    document.querySelector('#contact').prepend(successElement);
    
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

// Initialize first page
window.onload = () => {
    document.querySelector('#home').classList.add('active');
};