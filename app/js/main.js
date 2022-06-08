$(".center").slick({
  // centerMode: true,
  centerPadding: "60px",
  slidesToShow: 1,
  Infinity: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 500,
      setting: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
});

$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
