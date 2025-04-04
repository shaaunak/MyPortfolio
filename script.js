
// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  });

  // Navigation bar color change on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  });

  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
      scrollButton.classList.add('active');
    } else {
      scrollButton.classList.remove('active');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.js-scroll-trigger').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        
        if (targetElement) {
          const navHeight = document.querySelector('#mainNav').offsetHeight;
          
          window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        }
      }
    });
  });

  // Form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // You would normally handle form submission with AJAX here
      const formFields = this.querySelectorAll('input, textarea');
      let valid = true;
      
      // Simple validation
      formFields.forEach(field => {
        if (field.hasAttribute('required') && !field.value.trim()) {
          field.style.borderColor = '#dc3545';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (valid) {
        alert('Message sent successfully! (Demo only)');
        this.reset();
      } else {
        alert('Please fill all required fields.');
      }
    });
  }

  // Resume download handler
  const resumeBtn = document.getElementById('resume-download');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Resume download would start here. (Demo only)');
    });
  }
  
  // Add active class to nav items when scrolling
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY + document.querySelector('#mainNav').offsetHeight + 50;
    
    document.querySelectorAll('section[id]').forEach(section => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        const id = section.getAttribute('id');
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
