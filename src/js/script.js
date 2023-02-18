
import * as bootstrap from "bootstrap";
import $ from "jquery";
$(document).ready(function () {
  $("#slider .owl-carousel").owlCarousel({
    loop: true, // khong lap lai slide
    margin: 10,
    // nav:true,
    nav: false, // tat mui ten chuyen slide
    dots: false, // tat nut chuyen slide
    autoplayHoverPause: true, // re chuot slide dung animation
    autoplay: true,
    autoplayTimeout: 1000,
    items: 5,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// $('#slider .owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     // navText: ["<img src='prev.png'>","<img src='next.png'>"],
//     items: 1
// })
const myModal = new bootstrap.Modal("#staticBackdrop", {
  keyboard: false
})
myModal.show();