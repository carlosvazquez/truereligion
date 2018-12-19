(function($) {
  "use strict";

  var TrueReligion = {
    // All pages
    currency: $('script#app').data("currency"),
    $header: $('header.header'),
    formatMoney: function(price){
      var _formatPrice = price /= 100;
      _formatPrice = _formatPrice.toFixed(2);
      _formatPrice = _formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return '$' + _formatPrice + ' ' + this.currency;
    },
    getHeaderheight: function() {
      return $('.discount-banner').outerHeight() < 10 ? 0 : $('.discount-banner').outerHeight()+'px';
    },
    resetNavigationPadding: function() {
      $("nav.navigation").removeClass("stick");
      $("nav.navigation").css({'top': ''});
    },
    setMegaMenu: function() {
      var _w = $(window).width();
      $('.megamenu').css({ 'width': _w + 'px' });
    },
    common: {
      $menu_botton: $('.mobile_nav_btn'),
      init: function() {
        this.LocalStorage();
        this.signInMenu();
        this.setNavigation();
        this.newsletterDiscount();
        this.MobileMenu();
        this.setMegaMenu();
      },
      LocalStorage: function() {
        if(window.localStorage.getItem("newsletter_discount") == null) {
        window.localStorage.setItem('newsletter_discount', true);
        }
        if(window.localStorage.getItem("newsletter_succeed") == null) {
          window.localStorage.setItem('newsletter_succeed', false);
        }
      },
      setMegaMenu: function() {
        var _w = $(window).width();
        $('.megamenu').css({ 'width': _w + 'px' });
      },
      signInMenu: function() {
        $( ".access" ).hover(function() {
          $(this).find(".login-window").stop( true, false ).fadeIn();
        }, function() {
          $(this).find(".login-window").stop( true, true ).fadeOut();
        });
      },
      setNavigation() {
        window.clearInterval();
        $("nav.navigation").css({ 'top': 0 });
        var getHeaderheight = function() {
          return $('.discount-banner').outerHeight() < 10 ? 0 : $('.discount-banner').outerHeight()+'px';
        }
        var setNavigationPadding = function() {
          var _newHeight = getHeaderheight();
          $("nav.navigation").css({ 'top': _newHeight });
        }
        setTimeout(setNavigationPadding, 2000)
      },
      newsletterDiscount: function() {
        var _status = window.localStorage.getItem("newsletter_discount") == 'true' ? true : false;
        var _succeed = window.localStorage.getItem("newsletter_succeed") == 'true' ? true : false;
        var _header = $('header.header');

        var getHeaderheight = function() {
          return $('.discount-banner').outerHeight() < 10 ? 0 : $('.discount-banner').outerHeight()+'px';
        }

        if(_status && !_succeed ) {
          _header.addClass('hasNewsletterDiscount');
          $('.first-step').addClass('active');
          setTimeout(function() {
            var _newHeight = getHeaderheight();
            $('header.header.hasNewsletterDiscount').css({'padding-top': _newHeight });
          },600)
        }

        if(_status && _succeed ) {
          _header.addClass('hasNewsletterDiscount');
          $('.third-step').addClass('active');
          setTimeout(function(){
            var _newHeight = getHeaderheight();
            $('header.header.hasNewsletterDiscount').css({'padding-top': _newHeight });
          }, 1000);
        }
        var stopNewsletterDiscount = function() {
          $('.discount-banner').remove();
          $('header.header.hasNewsletterDiscount').css({'padding-top': 0 });
          $("nav.navigation").removeClass("stick");
          $("nav.navigation").css({'top': ''});
          window.localStorage.setItem('newsletter_discount', false);
        }
        var toggleStep = function() {
          $('.first-step').removeClass('active');
          $('.second-step').addClass('active');
          var getHeaderheight = function() {
            return $('.discount-banner').outerHeight() < 10 ? 0 : $('.discount-banner').outerHeight()+'px';
          }
          $('header.header').css({'padding-top': getHeaderheight() });
        }

        $('.first-step .btn-get-discount').on('click', toggleStep);

        $('.discount-banner-js').on('click', stopNewsletterDiscount);

        $("form.newsletter_form").on('submit', function () {
          window.localStorage.setItem('newsletter_succeed', true);
        });
      },
      MobileMenu: function() {
        $('.navigation__link-toggle').on('click', function(){
          $(this).next('.subnav').slideToggle('fast');
        });
        $('.navigation__link-toggle').on('click', function(){
          $(this).toggleClass('on');
        });
        this.$menu_botton.on('click', function(e){
          e.stopPropagation();
          $('body').toggleClass('has-mobile-menu');
        });
        $('.overlay').on('click', function(e){
          e.preventDefault();
          $('body.has-mobile-menu').removeClass('has-mobile-menu');
        });
      }
    },
    // On Resize Events
    resizeEvents: function() {
      console.log('Fire resize events');
      this.setMegaMenu();
    },
    // On Load Events
    onLoadEvents: function() {
      console.log('Fire on load events');
    },
    onScrollEvents: function() {
      var windowPos = $(window).scrollTop();
      var newHeight = this.getHeaderheight();
      var navigation = $("nav.navigation");
      var discountBanner = $('.discount-banner');
      var setNavigationPadding = function() {
        navigation.css({ 'top': newHeight });
      }
      if (windowPos >= 200) {
        navigation.addClass("stick");
        if(discountBanner.length){
          $(this.$header).css({'padding-top': newHeight });
          this.getHeaderheight();
          setNavigationPadding();
        }
      } else {
        navigation.removeClass("stick");
        this.resetNavigationPadding();
      }
    },
    // Home page
    home_page: {
      init: function() {
        console.log('estas en el home');
        this.collection_slider();
      },
      collection_slider: function() {
        $('.home-collection-slider .slider').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          autoplay: false
        });
      }
    },
    product_page: {
      init: function() {
      }
    },
    products_page: {
      init: function() {
      }
    },
    simple_page: {
      init: function() {
      }
    },
    collection_page: {
      init: function() {
      }
    },
    collections_page: {
      init: function() {
      }
    },
    category: {
      init: function() {
      }
    }
  };

  var STORE = {
    fire: function(func, funcname, args) {
      var namespace = TrueReligion;
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      STORE.fire('common');
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
        STORE.fire(classnm);
      });
    }
  };

  $(function() {
    var currentTime;
    // Init App
    console.log('on ready');
    STORE.loadEvents();

    // Windows events chained
    $(window).on('scroll', function() {
      console.log('on scroll');
      TrueReligion.onScrollEvents()
    })
    .on("resize", function() {
      // console.log('on resize');
      clearTimeout(currentTime);
      currentTime = setTimeout(TrueReligion.resizeEvents(), 100);
    })
    .on("load", function () {
      console.log('on load');
      TrueReligion.onLoadEvents()
    });
  });
})(jQuery);



