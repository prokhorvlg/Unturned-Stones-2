$(document).ready(function() {
  // Capture window as a jQuery variable
  var $window = $(window);

  // Resizes the height of a parallax block according to it's width-height ratio
  var resizeTimer;
  resizeHeader('resizeHeader', 0.5625);
  $window.on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      resizeHeader('resizeHeader', 0.5625);    
    }, 30);
  });

  // Detects browser; only runs certain scripts on desktop browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // Mobile code
  } else {
    // Desktop code

    // Run parallax function on each object with parallax class
    $('.parallax').each(function() {
      parallax($(this), $(this).data('parallax-type'), $(this).data("parallax-speed"), $(this).data("parallax-offset"), $(this).data("parallax-object-type"));
    });

    // Run an initial scroll of the window.
    $window.scroll();
  }
});

// Parallax overhead function
// el:           jQuery object to be parallaxed
//               example: $(this)
// type:         "o" if the contents are parallaxed, "b" if the background is
//               example: "o"
// speed:        Speed factor for parallax. (Integer from -1 to 1)
//               example: -0.3
// offset:       xposition of parallax element. Percentage from "0%" to "100%"
//               example: "50%"
function parallax(el, type = "b", speed = 0.5, offset = "50%", objectType = "r") {
  var $window = $(window);
  // Check whether element is background or object type...
  if (type === "b") {
    // Run actual parallax function whenever window is scrolled.
    $window.on('scroll resize', function() {
      parallaxRunBackground($(el), speed, offset);
    });
    parallaxRunBackground($(el), speed, offset);
  } else if (type === "o") {
    $window.on('scroll resize', function() {
      parallaxRunObject($(el), speed, objectType);
    });
    parallaxRunObject($(el), speed, objectType);
  }
}

// Actual parallax function for background
function parallaxRunBackground(el, speed, offset) {
  var $window = $(window);
  var windowHeight = $window.height();
  var $el = $(el);
  var pos = $window.scrollTop();
  var top = $el.offset().top;
  var height = $el.outerHeight();

  // If the object is outside of view, ignore the object.
  if (top + height < pos || top > pos + windowHeight) {
    return;
  } else { // Otherwise, change its background offset property.
    $el.css('backgroundPosition', offset + " " + Math.round((top - pos) * speed) + "px");
  }
}

// Actual parallax function for object
function parallaxRunObject(el, speed, objectType) {
  var $window = $(window);
  var windowHeight = $window.height();
  var $el = $(el);
  var pos = $window.scrollTop();
  var top = $el.offset().top;
  var height = $el.outerHeight();

  // If the object is absolutely positioned, change its top attribute.
  if (objectType === "a") {
    $el.css('top', 0 - Math.round((top - pos) * speed) + "px");
  } else if (objectType === "r") { // If the object is relatively positioned, change its margin-top attribute.
    $el.css('margin-top', 0 - Math.round((top - pos) * speed) + "px");
  }  
}

// Resizes the height of a parallax block according to it's width-height ratio
function resizeHeader(elClass, fac){
  var $window = $(window);
  if ($window.width() < 992){
    $('.' + elClass).each(function () {
      $(this).css("height", (($window.width() * fac) + 65) + "px");
    });
  }
  else if ($window.width() > 992 && $window.width() < 1200) {
    $('.' + elClass).each(function () {
      $(this).css("height", (($window.width() * fac) + 85) + "px");
    });
  }
  else {
    $('.' + elClass).each(function () {
      $(this).css("height", ($window.width() * fac) + "px");
    });
  }
}