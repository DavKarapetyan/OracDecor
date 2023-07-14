$(".tab").hover(
  function () {
    $(".tab__image").addClass("show");
  },
  function () {
    $(".tab__image").removeClass("show");
  }
);

$(function () {
  $("#height-range").slider({
    step: 0.1,
    range: true,
    min: 25.0,
    max: 100.0,
    values: [25.0, 100.0],
    slide: function (event, ui) {
      $("#min-height").val(ui.values[0]);
      $("#max-height").val(ui.values[1]);
    },
  });
  $("#heightRange").val(
    $("#height-range").slider("values", 0) +
      " - " +
      $("#height-range").slider("values", 1)
  );

  $("#width-range").slider({
    step: 0.1,
    range: true,
    min: 1.0,
    max: 4.0,
    values: [1.0, 4.0],
    slide: function (event, ui) {
      $("#min-width").val(ui.values[0]);
      $("#max-width").val(ui.values[1]);
    },
  });
  $("#widthRange").val(
    $("#width-range").slider("values", 0) +
      " - " +
      $("#width-range").slider("values", 1)
  );

  $("#price-range").slider({
    step: 1,
    range: true,
    min: 1274,
    max: 10846,
    values: [1274, 10846],
    slide: function (event, ui) {
      $("#min-price").val(ui.values[0]);
      $("#max-price").val(ui.values[1]);
    },
  });
  $("#priceRange").val(
    $("#price-range").slider("values", 0) +
      " - " +
      $("#price-range").slider("values", 1)
  );
});

$(".image__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: ".slider__nav",
});
$(".slider__nav").slick({
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: ".image__slider",
  centerMode: true,
  focusOnSelect: true,
});
