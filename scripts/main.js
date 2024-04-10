var App = App || {};



//---MAIN----
$(function () {
  App.Site.gettoggle();
  App.Site.semanticUI();
  App.Site.fancybox();
  App.Site.count_number();
  App.Site.set_height();
});

//--All site
App.Site = function () {

  
  var gettoggle = function () {
    $(".page-header .toggle-menu").click(function () {
      $(".page-header .main-menu").addClass("active");
    });
    $(".page-header .md-button").click(function () {
      $(".page-header .main-menu").removeClass("active");
    });
    $(".page-header .toggle-menu").click(function () {
      $(".bg-body").addClass("active-bg");
    });
    $(".page-header .md-button").click(function () {
      $(".bg-body").removeClass("active-bg");
    });
  }




  var semanticUI = function () {
    new WOW().init();
    $('.ui.checkbox').checkbox();
    $('#search-select').dropdown({ fullTextSearch: true });

  }
  var fancybox = function () {
    // $("#md-wheel-1").fancybox({}).trigger('click'); //trang vong-quay
    // $("#md-wheel-2").fancybox().trigger('click'); //trang vong-quay
    // $("#md-wheel-15").fancybox().trigger('click'); //trang vong-quay
    // $("#md-wheel-16").fancybox().trigger('click'); //trang vong-quay
    // $("#md-wheel-17").fancybox().trigger('click'); //trang vong-quay
    // $("#md-wheel-18").fancybox().trigger('click'); //trang vong-quay
    // $("#md-wheel-19").fancybox().trigger('click'); //trang vong-quay

    // $("#md-wheel-3").fancybox().trigger('click'); //trang câu hỏi
    // $("#md-wheel-4").fancybox().trigger('click'); //trang câu hỏi

    // $("#md-wheel-5").fancybox().trigger('click'); //trang form-bo-sung-thong-tin-1

    // $("#md-wheel-6").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-7").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-8").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-20").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-21").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-22").fancybox().trigger('click'); //trang vong-quay-2
    // $("#md-wheel-23").fancybox().trigger('click'); //trang vong-quay-2

    // $("#md-wheel-9").fancybox().trigger('click'); //trang-xac-nhan-sdt-2

    // $("#md-wheel-10").fancybox().trigger('click'); //trang xac-nhan-sdt-1

    // $("#md-wheel-11").fancybox().trigger('click'); //trang nhap-otp
    // $("#md-wheel-25").fancybox().trigger('click'); //trang nhap-otp
    
    // $("#md-wheel-12").fancybox().trigger('click'); //trang-quet-ma
    // $("#md-wheel-13").fancybox().trigger('click'); //trang-quet-ma
    // $("#md-wheel-14").fancybox().trigger('click'); //trang-quet-ma
    //  $("#md-wheel-24").fancybox().trigger('click'); //trang-quet-ma
  }

  
  var count_number = function(){
    setTimeout(function() {
      $('#counter-number').each(function () {
          // Lấy giá trị hiện tại và xác định độ dài chuỗi mong muốn
          var currentText = $(this).text();
          var desiredLength = currentText.length;

          $(this).prop('Counter',0).animate({
              Counter: currentText
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  // Định dạng lại giá trị 'now' để bao gồm số 0 ở đầu
                  var formattedNumber = Math.ceil(now).toString().padStart(desiredLength, '0');
                  $(this).text(formattedNumber);
              }
          });
      });
    }, 1000);
  }
   var set_height = function(){
   function set_min_height_blk_home(){
        var min_height=$(document).height()- $(".page-header").height();
        $(".page-setheight").css("max-height", min_height);
        $(".page-setheight").css("min-height", min_height);
    }
    set_min_height_blk_home();
     $(window).resize(function(){
      set_min_height_blk_home();
    });  
     window.addEventListener('resize', function(event) {
       set_min_height_blk_home();
    });
     function set_height_top_banner(){
         var max_height=$("html").height()- $(".page-header").height();
         $(".page-home .top-banner").css("height",max_height);
     }
      set_height_quetma();
       window.addEventListener('resize', function(event) {
          set_height_quetma();
      });
       function set_height_quetma(){
         var auto_height=$("html").height();
         $(".page-setheight-2").css("height",auto_height);
     }
      set_height_quetma();
       window.addEventListener('resize', function(event) {
          set_height_quetma();
      });
   }


  return {
    gettoggle: gettoggle,
    semanticUI: semanticUI,
    fancybox: fancybox,
    count_number: count_number,
    set_height: set_height,
  };

}();

  //--End All site




