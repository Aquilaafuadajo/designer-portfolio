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
          if(id !== 'carouselExampleIndicators') {
            if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -80
            }, 1000);
            return false;
          }
          }
        }
      });
    });

    // BOOTSTRAP CAROUSEL
    $('#carouselExampleIndicators').carousel({
      interval: 2000
    });

      // AOS 
      AOS.init({
        duration: 1000,
        once: true
      });