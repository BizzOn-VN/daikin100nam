var App = App || {};



//---MAIN----
$(function () {
  App.Site.gettoggle();
  App.Site.semanticUI();
  App.Site.fancybox();
  App.Site.attachSpinEvent();

});

//--All site
App.Site = function () {

  const wheel = document.querySelector('.img-wheel');
  const spinButton = document.querySelector('.img-quay');
  let isSpinning = false;
  let currentAngle = 0;
  let rafId;

  // Function to start the spin
  function startSpinning() {
    // Đặt lại vị trí của vòng quay
    wheel.style.position = 'absolute';

    wheel.style.left = '4.5%';
    wheel.style.transform = `translate(-50%, -50%) rotate(-30deg)`;
    wheel.style.transformOrigin = 'center center';

    // Bắt đầu quay
    isSpinning = true;
    spinSpeed = 0.1; // Tốc độ quay ban đầu, có thể điều chỉnh
    spinStartTime = Date.now();
    rafId = requestAnimationFrame(spin);
  }

  // Spin the wheel
  function spin() {
    if (!isSpinning) {
      return;
    }

    const currentTime = Date.now();
    const elapsedTime = (currentTime - spinStartTime) / 1000;

    // Tăng tốc độ quay dựa trên thời gian đã trôi qua, bạn có thể điều chỉnh các số này
    if (spinSpeed < 7) { // Tăng tốc độ tối đa nếu cần
      spinSpeed += elapsedTime * 0.1; // Tăng tốc nhanh hơn
    } else {
      spinSpeed = 7; // Tốc độ tối đa lớn hơn
    }

    // Cập nhật góc hiện tại của bánh xe
    currentAngle += spinSpeed;
    currentAngle %= 360; // Giữ góc nằm trong phạm vi 0-359
    wheel.style.transform = `rotate(${currentAngle}deg)`;

    // Tiếp tục quay
    rafId = requestAnimationFrame(spin);
  }

  // Function to stop the spin
  function stop(segment) {
    isSpinning = false;
    cancelAnimationFrame(rafId); // Hủy vòng lặp hiện tại nếu có

    const segmentAngle = 360 / 6; // Góc của mỗi phân đoạn
    // Tính góc bắt đầu của phân đoạn mà ta muốn dừng
    let segmentStart = (segment - 1) * segmentAngle - 30;
    // Giả sử ta muốn kim dừng trong khoảng 1/3 giữa của mỗi phân đoạn để tránh việc dừng ở ranh giới
    let safeZoneStart = segmentStart + segmentAngle / 3;
    let safeZoneEnd = segmentStart + segmentAngle * 2 / 3;
    // Chọn một điểm dừng ngẫu nhiên trong 'khoảng an toàn'
    let stopAngleWithinSafeZone = Math.random() * (safeZoneEnd - safeZoneStart) + safeZoneStart;

    // Tính toán góc cuối cùng để dừng
    let finalAngle = currentAngle % 360;
    let additionalRotation = stopAngleWithinSafeZone - finalAngle;

    if (additionalRotation < 0) {
      additionalRotation += 360;
    }
    // Điều chỉnh để không dừng ở giữa hai phần thưởng
    finalAngle = currentAngle + additionalRotation;
    // Thêm ít nhất 5 vòng để tạo hiệu ứng quay mượt
    finalAngle += 360 * 5;

    // Tiến hành giảm tốc
    const duration = 5000; // Thời gian giảm tốc
    const start = Date.now();

    (function decelerate() {
      const now = Date.now();
      const elapsed = now - start;
      const fraction = elapsed / duration;

      if (fraction < 1) {
        const easeOutFraction = 1 - Math.pow(1 - fraction, 3);
        const angle = currentAngle + (finalAngle - currentAngle) * easeOutFraction;
        wheel.style.transform = `rotate(${angle}deg)`;
        rafId = requestAnimationFrame(decelerate);
      } else {
        // Dừng vòng quay và căn chỉnh lại góc cuối cùng
        wheel.style.transform = `rotate(${finalAngle % 360}deg)`;
        currentAngle = finalAngle % 360; // Cập nhật góc hiện tại sau khi dừng để giữ trong phạm vi 0-359 độ
        cancelAnimationFrame(rafId);
      }
    })();
  }

  // Event listener for the spin button
  function attachSpinEvent() {
    spinButton.addEventListener('click', function () {
      if (!isSpinning) {
        startSpinning();
      }
    });
  }


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
    $("#md-wheel-1").fancybox().trigger('click');
    $("#md-wheel-2").fancybox().trigger('click');
    $("#md-wheel-3").fancybox().trigger('click');
    $("#md-wheel-4").fancybox().trigger('click');
    $("#md-wheel-5").fancybox().trigger('click');
    $("#md-wheel-6").fancybox().trigger('click');
    $("#md-wheel-7").fancybox().trigger('click');
    $("#md-wheel-8").fancybox().trigger('click');
    $("#md-wheel-9").fancybox().trigger('click');
    $("#md-wheel-10").fancybox().trigger('click');
    $("#md-wheel-11").fancybox().trigger('click');
    $("#md-wheel-12").fancybox().trigger('click');
    $("#md-wheel-13").fancybox().trigger('click');
    $("#md-wheel-14").fancybox().trigger('click');
  }



  return {
    gettoggle: gettoggle,
    semanticUI: semanticUI,
    fancybox: fancybox,
    attachSpinEvent: attachSpinEvent,
    stop: stop,

  };

}();

  //--End All site







