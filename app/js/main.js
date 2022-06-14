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
        slidesToShow: 2,
      },
    },
  ],
});
