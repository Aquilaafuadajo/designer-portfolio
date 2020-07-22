window.sr = ScrollReveal();
        sr.reveal('.brown-container', {
          duration: 3000,
          origin:'bottom'
        });
    // SMOOTH SCROLLING LOGIC

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          const id = Array.from(target)[0].id
          if(id !== 'carouselExampleControls') {
            if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -60
            }, 1000);
            return false;
          }
          }
        }
      });
    });

    // HAMBURGER ANIMATION
    $(document).ready(function () {

      $('.first-button').on('click', function () {
  
        $('.animated-icon1').toggleClass('open');
      });
      });

      // AOS 
      AOS.init({
        duration: 1000,
        once: true
      });