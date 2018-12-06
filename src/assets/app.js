$(function() {
  var TrueReligion = (function(window, $){
    var header, currency;
    var _construct = function(){
      currency = $('script#app').data("currency");
      header = $('header.header');
      _initLocalStorage();
    }
    var init = function() {
      _construct();
      signInMenu();
    }
    var _initLocalStorage = function() {
      if(window.localStorage.getItem("newsletter_discount") == null) {
        window.localStorage.setItem('newsletter_discount', true);
      }
      if(window.localStorage.getItem("newsletter_succeed") == null) {
        window.localStorage.setItem('newsletter_succeed', false);
      }
    }
    var _disableNewsletterDiscountBanner = function() {
      window.localStorage.setItem('newsletter_discount', false);
      return true;
    }
    var _getHeaderheight = function() {
      return $('.discount-banner').outerHeight() < 10 ? 0 : $('.discount-banner').outerHeight();
    }
    var _setNavigationPadding = function() {
      $("nav.navigation").css({'top': _getHeaderheight()});
    }
    var _resetNavigationPadding = function() {
      $("nav.navigation").css({'top': ''});
    }
    // Set Navigation
    var setNavigationPosition = function() {
      var windowPos = $(window).scrollTop();
      if (windowPos > $("nav.navigation").outerHeight()) {
        $("nav.navigation").addClass("stick");
        if($('.discount-banner').length){
          _setNavigationPadding();
        }
      } else {
        $("nav.navigation").removeClass("stick");
        _resetNavigationPadding();
      }
    }
    var formatMoney = function(price){
      var formatPrice = price /= 100;
      formatPrice = formatPrice.toFixed(2);
      formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return '$' + formatPrice + ' ' + currency;
    }
    var signInMenu = function() {
      $( ".access" ).hover(function() {
        $( this ).find(".login-window").stop( true, false ).fadeIn();
      }, function() {
        $( this ).find(".login-window").stop( true, true ).fadeOut();
      });
    }
    // Newsletter Events
    var newsletterDiscount = function() {
      var _status = window.localStorage.getItem("newsletter_discount") == 'true' ? true : false ;
      var _succeed = window.localStorage.getItem("newsletter_succeed") == 'true' ? true : false ;
      if(_status && !_succeed ) {
        setTimeout(function(){
          header.addClass('hasNewsletterDiscount');
          $('.first-step').addClass('active');
          $('header.header.hasNewsletterDiscount').css({'padding-top': _getHeaderheight() });
        }, 1000);
      }
      if(_status && _succeed ) {
        setTimeout(function(){
          header.addClass('hasNewsletterDiscount');
          if(header.hasClass('hasNewsletterDiscount')){
            header.css({'padding-top': _getHeaderheight() });
          }
          $('.third-step').addClass('active');
        }, 3000);
      }
      var stopNewsletterDiscount = function() {
        $('.discount-banner').remove();
        $('header.header.hasNewsletterDiscount').css({'padding-top': 0 });
        _resetNavigationPadding();
        _disableNewsletterDiscountBanner();
      }
      var toggleStep = function() {
        $('.first-step').removeClass('active');
        $('.second-step').addClass('active');
        header.css({'padding-top': _getHeaderheight() });
      }

      $('.first-step .btn-get-discount').on('click', toggleStep);

      $('.discount-banner-js').on('click', stopNewsletterDiscount);

      $("form.newsletter_form").on('submit', function () {
          window.localStorage.setItem('newsletter_succeed', true);
     });
    }

    // Public methods
    return {
      init: init,
      win: $(window),
      formatMoney: formatMoney,
      newsletterDiscount: newsletterDiscount,
      setNavigationPosition: setNavigationPosition
    }
  })(window, jQuery);

  // Init App
  TrueReligion.init();
  TrueReligion.newsletterDiscount();

  // Windows events chained
  TrueReligion.win.on('scroll', function() {
    TrueReligion.setNavigationPosition();
    console.log('on scroll');
  })
  .resize(function() {
    // TODO resizeNavigation
    TrueReligion.setNavigationPosition();
    console.log('on resize');
  })
  .on("load", function () {
    console.log('on load');
  });
  console.log(TrueReligion.formatMoney(210300), TrueReligion.win, TrueReligion, TrueReligion.newsletterDiscount());
});
