 document.addEventListener('DOMContentLoaded', function() {
        // Remove loader with simple fade
        setTimeout(() => {
            const loader = document.querySelector('.loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
        
        // Simple fade-in for sections
        const fadeInElements = document.querySelectorAll('.section');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeInElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            fadeInObserver.observe(element);
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        // document.getElementById('contactForm').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
            // Demo form submission
        //     const formElements = this.elements;
        //     let isValid = true;
            
        //     for (let i = 0; i < formElements.length; i++) {
        //         if (formElements[i].hasAttribute('required') && !formElements[i].value) {
        //             isValid = false;
        //             formElements[i].style.borderColor = 'red';
        //         } else {
        //             formElements[i].style.borderColor = '';
        //         }
        //     }
            
        //     if (isValid) {
        //         // Show success message
        //         const formSubmit = this.querySelector('.form-submit');
        //         const originalText = formSubmit.textContent;
                
        //         formSubmit.textContent = 'Message Sent!';
        //         formSubmit.style.background = 'linear-gradient(135deg, #00c853, #64dd17)';
                
        //         // Reset form
        //         this.reset();
                
        //         // Reset button after 3 seconds
        //         setTimeout(() => {
        //             formSubmit.textContent = originalText;
        //             formSubmit.style.background = '';
        //         }, 3000);
        //     }
        // });
        
        // Photo upload handlers
        document.querySelectorAll('.photo-upload').forEach(upload => {
            upload.addEventListener('click', function() {
                alert('In a real implementation, this would open a file upload dialog to add your photo.');
            });
        });
    });
