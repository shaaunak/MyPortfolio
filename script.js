$(document).ready(function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

    // Navbar shrink function
    function navbarShrink() {
        const navbarCollapsible = $('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.removeClass('navbar-shrink');
        } else {
            navbarCollapsible.addClass('navbar-shrink');
        }
    }

    // Shrink the navbar when page is scrolled
    navbarShrink();
    $(document).scroll(navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    $('body').scrollspy({
        target: '#mainNav',
        offset: 74
    });

    // Smooth scroll for navigation
    $('.js-scroll-trigger').click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Close responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Show/hide back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').addClass('active');
        } else {
            $('.scroll-to-top').removeClass('active');
        }
    });

    // Resume download button functionality
    $('#resume-download').click(function(e) {
        e.preventDefault();
        alert("Resume not available currently. Check back later!");
    });

    // Form validation
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;
        
        $(this).find('[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
            // Here you would normally send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            $(this).trigger('reset');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Animate skill bars when they come into view
    const animateSkills = function() {
        $('.skill-progress').each(function() {
            const position = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height() - 100;
            
            if (position < scrollPosition) {
                $(this).find('.progress-bar').css('width', $(this).find('.progress-bar').attr('aria-valuenow') + '%');
            }
        });
    };
    
    // Initial check and on scroll
    animateSkills();
    $(window).scroll(animateSkills);

    // Fix for the scrollspy issue with Bootstrap 5
    const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
        bootstrap.ScrollSpy.getInstance(dataSpyEl)
            .refresh()
    });
});
