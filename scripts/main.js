jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.semanticUI();
      App.Site.fancybox();
  });

  //--All site
    App.Site = function(){

        var gettoggle = function(){
            $(".page-header .toggle-menu").click(function(){
                $(".page-header .main-menu").addClass("active");
            });
            $(".page-header .md-button").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
            $(".page-header .toggle-menu").click(function(){
                $(".bg-body").addClass("active-bg");
            });
            $(".page-header .md-button").click(function(){
                 $(".bg-body").removeClass("active-bg");
            });
        }




        var semanticUI = function(){
            $('.ui.dropdown')
              .dropdown()
            ;
            new WOW().init();

        }
        var fancybox = function(){
            // $("#md-wheel-1").fancybox().trigger('click');
            // $("#md-wheel-2").fancybox().trigger('click');
            // $("#md-wheel-3").fancybox().trigger('click');
            // $("#md-wheel-4").fancybox().trigger('click');
            // $("#md-wheel-5").fancybox().trigger('click');
        }

        return{
            gettoggle:gettoggle,
            semanticUI:semanticUI,
            fancybox:fancybox,
        };

    }(); 

  //--End All site


    
   
});    


$('.ui.checkbox').checkbox();