var App = App || {};



//---MAIN----
$(function () {
  App.Site.gettoggle();
  App.Site.semanticUI();
  App.Site.fancybox();

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
    $('.ui.dropdown')
      .dropdown()
      ;
    new WOW().init();
    $('.ui.checkbox').checkbox();
    $('#search-select')
      .dropdown()
      ;
  }
  var fancybox = function () {
    $("#md-wheel-1").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-2").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-15").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-16").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-17").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-18").fancybox().trigger('click'); //trang vong-quay
    $("#md-wheel-19").fancybox().trigger('click'); //trang vong-quay

    $("#md-wheel-3").fancybox().trigger('click'); //trang câu hỏi
    $("#md-wheel-4").fancybox().trigger('click'); //trang câu hỏi

    $("#md-wheel-5").fancybox().trigger('click'); //trang form-bo-sung-thong-tin-1

    $("#md-wheel-6").fancybox().trigger('click'); //trang vong-quay-2
    $("#md-wheel-7").fancybox().trigger('click'); //trang vong-quay-2
    $("#md-wheel-8").fancybox().trigger('click'); //trang vong-quay-2

    $("#md-wheel-9").fancybox().trigger('click'); //trang-xac-nhan-sdt-2

    $("#md-wheel-10").fancybox().trigger('click'); //trang xac-nhan-sdt-1

    $("#md-wheel-11").fancybox().trigger('click'); //trang nhap-otp
    
    $("#md-wheel-12").fancybox().trigger('click'); //trang-quet-ma
    $("#md-wheel-13").fancybox().trigger('click'); //trang-quet-ma
    $("#md-wheel-14").fancybox().trigger('click'); //trang-quet-ma
  }



  return {
    gettoggle: gettoggle,
    semanticUI: semanticUI,
    fancybox: fancybox,


  };

}();

  //--End All site







