// List of phrases to cycle through for header spin texts.
var phrases = ["reinitializing model", 
  "deploying cloud solution", 
  "running operation counter kaizen", 
  "redistributing pattern recognition assets",
  "recalculating yomi",
  "finding cultural disposition",
  "locating weaklink",
  "planting deep agent",
  "infiltrating rival network",
  "optimizing infrastructure algorithm",
  "defragmenting remote host server",
  "training deep neural network",
  "mapping new location into neural map",
  "resolving proxy conflicts",
  "optimizing lightspeed thought",
  "running malware scan",
  "deploying operations team",
  "annoying grine_",
  "admiring caba",
];

var $spinText = $('.spinText');
$spinText.each(function() {
  randomizeEcho(this);
});

function randomizeEcho(element, multi = 3000) {
  $(element).text(phrases[Math.floor(Math.random()*phrases.length)]);
  setTimeout(function() { randomizeEcho( element, multi); }, Math.floor(Math.random() * multi));
}

$(document).ready( function() {

  // Initiate home page spinner banner animations
  TweenMax.to('.spinRightBig', 200, {rotation:"360", ease:Linear.easeNone, repeat:-1, transformOrigin:'50% 50%'}, {timeScale:0}
  );

  TweenMax.to('.spinLeftBig', 200, {rotation:"-360", ease:Linear.easeNone, repeat:-1, transformOrigin:'50% 50%'}, {timeScale:0}
  );

  // Initiate scroll listeners for triggering animations
  $(window).scroll(function() {
    var $scrollCheck = $('.scrollCheck');
    $scrollCheck.each( function() {
      if ( checkInView(document.getElementById('body'), this, 1000) ){

        if ($(this).hasClass('homeContentFade')) {
          this.style.opacity = '1';
        }
        else if ($(this).hasClass('fadeInCodeParas')) {
          animateCodeIn(this);
        }

      }
    });
  });
  $(window).scroll();

  $('.hcdCodelinePara').each(function() {
    hcdCodelinePara(this);
  });

  streakerSwap($('.streaker_sp1 img'), '/assets/images/streaker/sp1_1.png', '/assets/images/streaker/sp1_2.png');

  streakerSwap($('.streaker_sp2 img'), '/assets/images/streaker/sp2_1.png', '/assets/images/streaker/sp2_2.png');

  streakerSwap($('.streaker_sp3 img'), '/assets/images/streaker/sp3_1.png', '/assets/images/streaker/sp3_2.png');

  streakerSwap($('.streaker_sp4 img'), '/assets/images/streaker/sp4_1.png', '/assets/images/streaker/sp4_2.png');

  streakerSwap($('.streaker_sp5 img'), '/assets/images/streaker/sp5_1.png', '/assets/images/streaker/sp5_2.png');

  streakerSwap($('.streaker_sp6 img'), '/assets/images/streaker/sp6_1.png', '/assets/images/streaker/sp6_2.png');

  setTimeout(function() {
    streakerRandomAnim('streaker-left-to-right', 'streaker_sp');
    streakerRandomAnim('streaker-right-to-left', 'streaker_spr');
  }, 20);

  $('.hcdIcon_interactive').click(function() {
    var $target = $('.' + $(this).data('hcd'));
    var $header = $target.find('.hcdHeader');
    var $body = $target.find('.hcdBody');
    var $replace = $target.find('.hcdReplace');
    var $replaceChild = $replace.find('.hcdReplaceContent');

    var height = $body.height() + $header.height();

    $body.hide();
    $header.hide();

    var timeStretch = 50;
    var scaleStretch = 50;
    setTimeout(function() {
      $replace.css('display','flex');
      $replace.css('border','2px solid white');
      $target.css('height', height + 'px');

      $replace.css('margin', (scaleStretch * 1) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 1)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 1));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 2) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 2)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 2));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 3) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 3)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 3));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 4) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 4)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 4));

    setTimeout(function() {
      $replace.css('border','none');
      $replace.css('margin', '0px');
      $replaceChild.css('opacity', '1');
    }, (timeStretch * 5));
    
  }).on("keydown", function(event) {
    if (event.which == 13) {
      $(this).trigger( "click" );
    }
  });
  
});

function streakerRandomAnim(animation = 'streaker-left-to-right', elClass) {
  $('.' + elClass).each(function () {
    var $el = $(this);
    setTimeout(function() {
      streakerGenerateRandomAnim($el, animation);
    }, (Math.floor(Math.random() * 200)));
  });
}

function streakerGenerateRandomAnim(el, animation) {
  $(el).css('display','block');
  var randomTime = Math.floor(Math.random() * 70) + 20; // Time in milliseconds. Multiple is max
  var randomMargin = Math.floor(Math.random() * $('.homeContentContainer').outerHeight()); // Multiple is max
  $(el).css('margin-top', randomMargin + 'px');

  $(el).children('.hcdStreakerMover').css('transition', '0s');

  if (animation == 'streaker-left-to-right') {
    $(el).children('.hcdStreakerMover').css('margin-left', '-10vw');

    setTimeout(function() {
      $(el).children('.hcdStreakerMover').css('transition', randomTime + 's linear');
      $(el).children('.hcdStreakerMover').css('margin-left', '110vw');
    }, 10);
  } else if (animation == 'streaker-right-to-left') {
    $(el).children('.hcdStreakerMover').css('margin-right', '-10vw');

    setTimeout(function() {
      $(el).children('.hcdStreakerMover').css('transition', randomTime + 's linear');
      $(el).children('.hcdStreakerMover').css('margin-right', '110vw');
    }, 10);
  }

  setTimeout(function() {
    streakerGenerateRandomAnim(el, animation);
  }, ((randomTime*1000)+100));
}

function streakerSwap(el, first, second) {
  if ($(el).attr('src') == first) {
    $(el).attr('src', second);
  } else {
    $(el).attr('src', first);
  }
  setTimeout(function() {
    streakerSwap(el, first, second);
  }, 500);
}

function hcdCodelinePara(o, multi = 300){
  $(o).html(Math.random().toString(36).substring(2));
  setTimeout(function() { 
    hcdCodelinePara($(o), multi);
  }, Math.floor(Math.random() * multi));
}

function animateCodeIn(o) {
  recursiveCodeIn($(o).children('p').first());
}

function recursiveCodeIn(o, multi = 300) {
  $(o).css('opacity', '1');
  setTimeout(function() { 
    recursiveCodeIn($(o).next(), multi);
  }, Math.floor(Math.random() * multi));
}

function checkInView(container, element, partial) {

    //Get container properties
    let cTop = container.scrollTop;
    let cBottom = cTop + container.clientHeight;

    //Get element properties
    let eTop = element.offsetTop + 300;
    let eBottom = eTop + element.clientHeight;

    //Check if in view    
    let isTotal = (eTop >= cTop && eBottom <= cBottom);
    let isPartial = partial && (
      (eTop < cTop && eBottom > cTop) ||
      (eBottom > cBottom && eTop < cBottom)
    );

    //Return outcome
    return  (isTotal  || isPartial);
}