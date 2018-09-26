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

var codelines = ["NUT BOOT 2999.ABP&",
"******************************",
"* THIS IS A SECURE SYSTEM. &nbsp;&nbsp;*",
"* ALL OPERATIONS ARE LOGGED. *",
"******************************",
"ANAL:     MUGUANG[character_not_found][character_not_found] 6777pn-",
"MAC:      00:22:16:44:90:10:PR",
"STOR:     512TB",
"CONTROL:  DG-98FEDS 9233333.990023.239BZ",
"DPLAY:    GOPSTOPP MUGUANGN",
"BATT:     SNND_INTRL; Note test reveal t56",
"HEFEI:    OPEN",
"&nbsp;",
"OPEN NETWORK",
"TYPE: HEFEI DIRECT 68",
"AUTOBOOT-ing in 5 seconds, wave <END> to end operation",
"&nbsp;",
"Running autoapp 67:AUTOUPDATE_MANDATED::3",
"::3 || Using opennet tunnel",
"::3 || Tunnel to default 322:422:&d",
"::3 || Pinging ...",
"::3 || Pinging ...",
"::3 || Update found! Running proprietary secure session update system",
"::3 || Bytes transferred from server ... 92,850,133,918 DONE",
"::3 || Extracting ... DONE",
"::3 || Scanning for malware ... DONE",
"::3 || Installing digital controller firmware: K782822S ... DONE",
"::3 || Restarting digital controller ... DONE",
"::3 || Verifying integrity of installation ... DONE",
"::3 || Exiting ... DON",
"&nbsp;",
"Data Size:    1161762 Bytes =  1.1 MB",
"Load Address: d0001000",
"Entry Point:  d0001000",
"&nbsp;",
"Verifying Checksum ... DONE",
"Uncompressing Kernel Image ... DONE",
"Console: colour dummy device 80x25",
"NET: Registered protocol family 16",
"Initializing random number generator... done.",
"&nbsp;",
"Starting sshd: OK",
"Starting NFS statd: done",
"Starting NFS services: done",
"Starting NFS daemon: done",
"Starting NFS mountd: done",
"&nbsp;",
"USER: krstno",
"ENTER PASSWORD: ***************************************************",
"RE-ENTER PASSWORD: ***************************************************",
"ENTER BIO1: ...DONE",
"ACCEPTED",
"//LOADING ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣ ...DONE",
"&nbsp;",
"*** WELCOME TO NUT 3.23 ***",
"LOADING ORGANIZATIONAL_MATRIX...",
"WARNING: TERMINAL UNSTABLE",
"//LOADING",
"//LOADING",
"&nbsp;",
"LOADING PREDEFINED SETTINGS",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/biological45.settings",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/errorcheck.settings",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/user.settings",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/bootorder.settings",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/biochipinterfacex12.settings",
"bootsys/bio/user2344hh2345bn63kb25l29110313n2bert329gy92/new/augcomp.settings",
"&nbsp;",
"",
"",
"",
"",
"&nbsp;",
"//RESTARTING SYSTEM",
"&nbsp;",
];

var generatedCodelines = [];

var numberOfLines = 0;
var lineNumber = 0;

var numberOfLinesSecond = 0;
var lineNumberSecond = 0;

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
    spinFloatRandomAnim('spin-float-1');
    spinFloatRandomAnim('spin-float-2');

    $spinContainer = $('.spinContainer').first();
    $spinBootupShuffle = $('.spinBootupShuffle');
    quoteShuffle($spinBootupShuffle.first(), $spinContainer);
    
    for (var i = 0; i < 100; i++) {
      var randomNumberOfLines = Math.floor(Math.random() * 6);
      var randomLogLine = "";
      for (var y = 0; y < randomNumberOfLines; y++) {
        randomLogLine = randomLogLine.concat(Math.random().toString(36).substring(3) + ";0 ");
      }
      if (randomLogLine !== "") {
        generatedCodelines.push(randomLogLine);
      } else {
        generatedCodelines.push("&nbsp;");
      }
    }
    quoteShuffleSecond($spinBootupShuffle.first().next(), $spinContainer);
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

function spinFloatRandomAnim(elClass) {
  $('.' + elClass).each(function () {
    console.log('here')
    var $el = $(this);
    setTimeout(function() {
      spinFloatRandomize($el);
    }, (Math.floor(Math.random() * 20)));
  });
}

function spinFloatRandomize(el) {
  var $spinContainer = $('.spinContainer').first();
  var randomTime = Math.floor(Math.random() * 5) + 1; // Time in milliseconds. Multiple is max
  var randomMarginTop = Math.floor(Math.random() * $spinContainer.outerHeight()); // Multiple is max
  var randomMarginLeft = Math.floor(Math.random() * $spinContainer.outerWidth()); // Multiple is max
  var randomDimension = Math.floor(Math.random() * 40) + 30; // Multiple is max
  $(el).css('margin-top', randomMarginTop + 'px');
  $(el).css('margin-left', randomMarginLeft + 'px');

  $(el).css('height', randomDimension + 'px');
  $(el).css('width', randomDimension + 'px');

  setTimeout(function() {
    spinFloatRandomize(el);
  }, (randomTime * 1000) );
}

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

function quoteShuffle(spinBootupShuffle, spinContainer) {
  if ($(spinBootupShuffle).outerHeight() > $(spinContainer).outerHeight() + 10) {
    $(spinBootupShuffle).find('div').first().remove();
  } else {
    numberOfLines++;
  }

  if (lineNumber >= codelines.length){
    lineNumber = 0;
  }

  $(spinBootupShuffle).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + codelines[lineNumber++] + '</div>');

  setTimeout(function() { 
    quoteShuffle($(spinBootupShuffle), $(spinContainer)); 
  }, Math.floor(Math.random() * 300));
}

function quoteShuffleSecond(spinBootupShuffle, spinContainer) {
  if ($(spinBootupShuffle).outerHeight() > $(spinContainer).outerHeight() + 10) {
    $(spinBootupShuffle).find('div').first().remove();
  } else {
    numberOfLinesSecond++;
  }

  if (lineNumberSecond >= generatedCodelines.length){
    lineNumberSecond = 0;
  }

  $(spinBootupShuffle).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + generatedCodelines[lineNumberSecond++] + '</div>');

  setTimeout(function() { 
    quoteShuffleSecond($(spinBootupShuffle), $(spinContainer)); 
  }, Math.floor(Math.random() * 300));
}

/* 
function quoteShuffleSecond(spinBootupShuffle, spinContainer) {
  if ($(spinBootupShuffle).outerHeight() > $(spinContainer).outerHeight() + 10) {
    $(spinBootupShuffle).find('div').first().remove();
  }

  var randomNumberOfLines = Math.floor(Math.random() * 4) + 1;
  var randomLogLine = "";
  for (var i = 0; i < randomNumberOfLines; i++) {
    randomLogLine = randomLogLine.concat(Math.random().toString(36).substring(3) + ";0 ");
  }
  $(spinBootupShuffle).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + randomLogLine + '</div>');

  setTimeout(function() { 
    quoteShuffleSecond($(spinBootupShuffle), $(spinContainer)); 
  }, Math.floor(Math.random() * 300));
}
*/

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