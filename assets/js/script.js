document.addEventListener('DOMContentLoaded', function() {
    // Language Selector Toggle
    const langSelectorBtn = document.getElementById('lang-selector-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langSelectorBtn && langDropdown) {
        langSelectorBtn.addEventListener('click', function() {
            langDropdown.classList.toggle('show');
        });
    
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!langSelectorBtn.contains(event.target) && !langDropdown.contains(event.target)) {
                langDropdown.classList.remove('show');
            }
        });
    
        // Language Selection
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                
                // Here you would implement language switching functionality
                // For demonstration, we just close the dropdown and update button text
                const langText = this.textContent;
                langSelectorBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText} <i class="fas fa-chevron-down"></i>`;
                langDropdown.classList.remove('show');
                
                // You would redirect or change content based on selected language
                console.log('Selected language:', selectedLang);
                
                // Example of setting a cookie for language preference
                document.cookie = `preferredLanguage=${selectedLang}; path=/; max-age=31536000`;
            });
        });
    }
    
    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Nationality Selection
    const nationalityItems = document.querySelectorAll('.nationality-item');
    
    if (nationalityItems.length > 0) {
        nationalityItems.forEach(item => {
            item.addEventListener('click', function() {
                const country = this.getAttribute('data-country');
                
                // Save nationality preference
                localStorage.setItem('selectedNationality', country);
                
                // For demonstration purposes, we'll log the selection
                console.log('Selected nationality:', country);
                
                // In a real application, you would redirect to country-specific content
                // or load different content based on the selection
                
                // Example: Redirect based on selection
                // window.location.href = `/${country}/services.html`;
                
                // Highlight selected nationality
                nationalityItems.forEach(item => item.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileNavToggle) {
                        const icon = mobileNavToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const nationality = document.getElementById('nationality').value;
            const message = document.getElementById('message').value;
            
            // For demonstration, log the form data
            console.log('Form submitted:', { name, email, nationality, message });
            
            // Here you would typically send the data to your server
            // For example:
            /*
            fetch('api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, nationality, message })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Show success message to user
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                // Show error message to user
                alert('There was an error sending your message. Please try again later.');
            });
            */
            
            // For now, just show a success message and reset the form
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}); 