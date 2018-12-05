$(function() {
  var TrueReligion = (function(window, $){
    var _construct = function(){
      if(window.localStorage.getItem("newsletter_discount") == null) {
        window.localStorage.setItem('newsletter_discount', true);
      }
      currency = $('script#app').data("currency");
    }
    var init = function() {
      _construct();
      signInMenu();
    }
    var formatMoney = function(price){
      var formatPrice = price /= 100;
      formatPrice = formatPrice.toFixed(2);
      formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return '$' + formatPrice + ' ' + currency;
    }
    var signInMenu = function() {
      $( ".access" ).hover(function() {
        $( this ).find( ".login-window" ).stop( true, false ).fadeIn();
      }, function() {
        $( this ).find( ".login-window" ).stop( true, true ).fadeOut();
      });
    }
    var newsletterDiscount = function() {
      var _status = window.localStorage.getItem("newsletter_discount") == 'true' ? true : false ;
      if(_status) {
        setTimeout(function(){
          $('.first-step').addClass('active');
        }, 4000);
      }
      var stopNewsletterDiscount = function() {
        $('.discount-banner').remove();
        window.localStorage.setItem('newsletter_discount', false);
      }
      var toggleStep = function() {
        $('.first-step').removeClass('active');
        $('.second-step').addClass('active');
      }
      $('.first-step .btn-get-discount').on('click', toggleStep);
      $('.discount-banner-js').on('click', stopNewsletterDiscount);
    }
    var alertMe = function() {
      alert();
    }
    // Public methods
    return {
      init: init,
      win: $(window),
      formatMoney: formatMoney,
      alertMe: alertMe,
      newsletterDiscount: newsletterDiscount
    }
  })(window, jQuery);

  // Init App
  TrueReligion.init();
  TrueReligion.newsletterDiscount();

  // Windows events chained
  TrueReligion.win.on('scroll', function() {
    console.log('on scroll');
  })
  .resize(function() {
    console.log('on resize');
  })
  .on("load", function () {
    console.log('on load');
  });
  //console.log(TrueReligion.formatMoney(210300), TrueReligion.win, TrueReligion, TrueReligion.newsletterDiscount());
});
