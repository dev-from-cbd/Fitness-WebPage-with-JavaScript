// document ready function
$(function () {
  // store jquery references to elements in const variables
  const headerNav = $("header nav");
  const hamburgerMenu = $("#burger-menu");
  const search = $("#search");
  const searchContainerHide = $("#search-container-hide");
  const searchContainer = $("#search-container");
  const youtubeButton = $(".youtube-button");
  const videoFrame = $("#video-frame");
  const videoFrameHide = $("#video-frame-hide");
  const embedVideo = $("#embed-video");

  // initialize hero slider
  $("#hero-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    cssEase: "linear",
  });

  $("#trainers-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  // initialize event handling
  hamburgerMenu.on("click", () => {
    headerNav.toggle();
  });

  search.on("click", () => {
    searchContainer.css({
      opacity: "1",
      visibility: "visible",
      "z-index": "100",
    });
  });

  searchContainerHide.on("click", () => {
    searchContainer.css({
      opacity: "0",
      visibility: "hidden",
      "z-index": "0",
    });
  });

  youtubeButton.on("click", () => {
    videoFrame.css({
      opacity: "1",
      visibility: "visible",
      "z-index": "100",
    });
  });

  videoFrameHide.on("click", () => {
    videoFrame.css({
      opacity: "0",
      visibility: "hidden",
      "z-index": "0",
    });

    embedVideo.prop("src", embedVideo.prop("src"));
  });
});
