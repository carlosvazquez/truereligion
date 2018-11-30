$(function() {
    var win = $(window);
    TrueReligion = {
      _construct: function(){
        currency = $('script#app').data("currency");
      },
      formatMoney: function(price){
        var formatPrice = price /= 100;
        formatPrice = formatPrice.toFixed(2);
        formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return '$' + formatPrice + ' ' + currency;
      },
      init: function() {
        this._construct();
        console.log('aaaa');
      }
    }

    // Windows events chained
    win.on('scroll', function() {

    })
    .resize(function() {
    })
    .on("load", function () {
    });
    // Launch app
    TrueReligion.init();
    console.log(TrueReligion.formatMoney(210300));
  }
);
