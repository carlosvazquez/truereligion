/* Custom Scripts */
/** Menu **/
  fx_menu = {

    _construct: function(){
      $html       = $('html');
      $body       = $('.body-container, footer, .main-menu-shoperti');
      $open_menu  = $('.mobile a');
      $nav        = $('.main-menu-shoperti nav');
    },

    _actions: function(event){
      this._construct();

      //--

      if(event){
        event.preventDefault();
        event.stopPropagation();
      }

      $open_menu
      .stop()
      .toggleClass('active');

      $body
      .stop()
      .toggleClass('active');

      $nav
      .stop()
      .toggleClass('active');

    },

    make: function(){
      this._construct();

      //--

      $open_menu
      .on('click', function(event){
        fx_menu._actions(event);
      });

      $nav
      .on('click', function(event){
        event.stopPropagation();
      });

      $html
      .on('click', function(event){
        if($nav.hasClass('active')){
          fx_menu._actions();
        }
      });
    }
  }
/** Inputs **/

  fx_inputs = {

    _construct: function(){
      $fields       = $('input, select, textarea');
      $textarea     = $('textarea');
    },

    _validateActions: function($input_field){
      //-- active
      if($input_field.val()){
        $input_field.addClass('active');
      }
      else{
        $input_field.removeClass('active');
      }
      //--
    },

    validate: function(){
      this._construct();

      //--

      $fields.each(function(index){
        fx_inputs._validateActions($(this));
      });

      $fields.on('change', function(event){
        fx_inputs._validateActions($(this));
      });
    }
  }

$(document).ready(function(){
  fx_menu.make();
  fx_inputs.validate();
});
