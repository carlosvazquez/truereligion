$(function() {
  var TrueReligion = (function(window, $){
    var _construct = function(){
      currency = $('script#app').data("currency");
    }
    var init = function() {
      _construct();
    }
    var formatMoney = function(price){
      var formatPrice = price /= 100;
      formatPrice = formatPrice.toFixed(2);
      formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return '$' + formatPrice + ' ' + currency;
    }
    var alertMe = function() {
      alert();
    }
    // Public methods
    return {
      init: init,
      win: $(window),
      formatMoney: formatMoney,
      alertMe: alertMe
    }
  })(window, jQuery);

  // Init App
  TrueReligion.init();

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
  console.log(TrueReligion.formatMoney(210300), TrueReligion.win, TrueReligion);
});
