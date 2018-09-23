$(document).ready( function() {
  var $infoTag = $('.infoTag');
  var $infoTagTitle = $('.infoTagTitle');
  var $infoTagImage = $('.infoTagImage');
  var $infoTagBody = $('.infoTagBody');
  var $infoTagFooter = $('.infoTagFooter');

  $infoTag.click(function() {
    var tags = {
      'attrition': {
        name: 'The Attrition',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        color: '#e62823',
        imageType: 'img',
        image: 'exoticMatterIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'covert-firearms': {
        name: 'Covert Firearms',
        body: "<p class='text-left'>It shouldn't be surprising that covert firearms are those used by spies and operatives - valuing concealability and deception above all else. These are the sorts of weapons that induce heart attacks and disassamble into neat misdirecting components, or are built to be disguised as inconspicious or miniature objects.</p>",
        color: '#3a8841',
        imageType: 'img',
        image: 'covert-firearms',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/gear/firearms/covert-firearms/',
      },
      'bogatyr': {
        name: 'Bogatyr Contractors',
        body: "<p class='text-left'>A notoriously ruthless private military corporation founded by former Imperial military elements; known as КОРПУС БОГАТЫРЕЙ in Imperial Russian.</p>",
        color: '#28e36a',
        imageType: 'img',
        image: 'bogatyrIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'caravansarai': {
        name: 'Caravansarai',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        imageType: 'svg',
        image: 'infoSVG',
        styles: [
          [ 'fill', 'white' ],
          [ 'float', 'left' ],
          [ 'margin', '10px' ],
          [ 'marginRight', '20px' ],
        ],
        link: '',
      },
      'computers-uts': {
        name: 'Computers',
        body: "<p class='text-left'>These are the computer paradigms of Unturned Stones. It’s hard to say that it’s the most important aspect of the world - since everything is interlinked through and though - but if there was one thing one could point to that has somehow impacted everything, it would be these innocent electronic devices.</p>",
        color: '#c165d8',
        imageType: 'img',
        image: 'computersIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        link: '/codex/technology/compsci/computers/',
      },
      'exotic-matter': {
        name: 'Exotic Matter',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        color: '#e62823',
        imageType: 'img',
        image: 'exoticMatterIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'powered-firearms': {
        name: 'Powered Firearms',
        body: "<p class='text-left'>Powered firearms are somewhat analagous to power tools in Unturned Stones. These weapons are specialized (besides destructive power, they feature advantageous side effects) and have extreme situational potential - but they must be plugged into the wall to remain operable...</p>",
        color: '#b5343d',
        imageType: 'img',
        image: 'powered-firearms',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/gear/firearms/powered-firearms/',
      },
      'pravo-powers': {
        name: 'Pravo Powers',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        color: '#e62823',
        imageType: 'img',
        image: 'exoticMatterIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'slip-ftl': {
        name: 'SLIP Faster Than Light',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        color: '#e62823',
        imageType: 'img',
        image: 'exoticMatterIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'standard-firearms': {
        name: 'Standard Firearms',
        body: "<p class='text-left'>Standard does not mean 'familiar' or 'contemporary'. Standard firearms are called as such since they are issued as standard equipment to army units, as opposed to covert weapons which are typically employed by spies, and powered weapons which are - much like power tools - used by operation specialists.</p>",
        color: '#9e6a4e',
        imageType: 'img',
        image: 'standard-firearms',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/gear/firearms/standard-firearms/',
      },
      'vision-muguang': {
        name: 'Vision/Muguang Zaibatsu',
        body: "<p class='text-left'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-left'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
        color: '#e62823',
        imageType: 'img',
        image: 'exoticMatterIMG',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
      'test': {
        name: 'Test',
        body: 'This is test.',
      },
      'personal-transport': {
        name: 'Personal Transport',
        body: "<p class='text-left'>Personal transporters fill a particular kind of niche that often overlaps with local commute systems - used for travelling within neighborhoods, and sometimes between them. They are more common in some places than others, particularly in more 'ubiquitously urban' areas such as space bases - where a charging station can be found anywhere, and public transportation systems replace privately owned commute vehicles.</p>",
        color: '#3de3ae',
        imageType: 'img',
        image: 'personal-transport',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/infrastructure/transportation/personal-transport/',
      },
      'local-commute': {
        name: 'Local Commute',
        body: "<p class='text-left'>Local commute vehicles are a class of transportation devices that you're likely very familiar with. It's hard to strictly define as they encompass anything from trams to cars to rockets, essentially anything that operates in a range that is a bit out of reach for walking but not quite enough to be considered a 'journey'.</p>",
        color: '#6e7fd2',
        imageType: 'img',
        image: 'local-commute',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/infrastructure/transportation/local-commute/',
      },
      'distant-travel': {
        name: 'Distant Travel',
        body: "<p class='text-left'>At the largest scale of terrestrial transportation, there is the distant travel category. Pretty simple - these take you to distant places using devices like trains, airplanes, ships, rockets. In Unturned Stones, these are highly regional. Each planet and region features a unique challenge that must be overcome with a completely unique transportation solution.</p>",
        color: '#edb829',
        imageType: 'img',
        image: 'distant-travel',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '/codex/technology/infrastructure/transportation/distant-travel/',
      },

      'prosthetic-soul': {
        name: 'Prosthetic Soul',
        body: "<p class='text-left'>An old technique which involves cutting out the morality center of the brain, and replacing it with a cybernetic device which replaces the target's personal morality.</p> \
          <p class='text-left'>However... it doesn't quite work as one would expect.</p>",
        color: '#00ffff',
        imageType: 'source',
        image: '/assets/images/centerpiece/prosthetic-soul.png',
        styles: [
          [ 'margin', '10px' ],
          [ 'marginBottom', '20px' ],
        ],
        centerImageParent: true,
        link: '',
      },
    };
    var target = $(this).data('info');

    $infoTagTitle.html(tags[target].name);

    if ('imageType' in tags[target]) {
      if ('centerImageParent' in tags[target]) {
        if (tags[target].centerImageParent == true) {
          $infoTagImage.css('text-align', 'center');
        }
      } else {
        $infoTagImage.css('text-align', 'none');
      }
      if (tags[target].imageType == 'img') {
        $infoTagImage.html("<img id='infoTagModalImage' src='" + window.svgRef[tags[target].image] + "' />");
        for (var i = 0; i < tags[target].styles.length; i++) {
          document.getElementById('infoTagModalImage').style[tags[target].styles[i][0]] = tags[target].styles[i][1];
        }
      } else if (tags[target].imageType == 'svg') {
        $infoTagImage.html(window.svgRef[tags[target].image]);
        for (var i = 0; i < tags[target].styles.length; i++) {
          document.getElementById('infoTagModalImageSVG').style[tags[target].styles[i][0]] = tags[target].styles[i][1];
        }
      } else if (tags[target].imageType == 'source') {
        $infoTagImage.html("<img id='infoTagModalImage' src='" + tags[target].image + "' />");
        for (var i = 0; i < tags[target].styles.length; i++) {
          document.getElementById('infoTagModalImage').style[tags[target].styles[i][0]] = tags[target].styles[i][1];
        }
      } 
    } else {
      $infoTagImage.html('');
    }

    $infoTagBody.html(tags[target].body);

    if ('link' in tags[target]) {
      $infoTagFooter.html("<a id='infoTagModalLearnMore' href='" + tags[target].link + "' class='commonButton font-code-l'>Learn More</a>");
      if ('color' in tags[target]) {
        document.getElementById('infoTagModalLearnMore').style.color = tags[target].color;
        document.getElementById('infoTagModalLearnMore').style.borderColor = tags[target].color;
      }
    } else {
      $infoTagFooter.html('');
    }

    setTimeout(function() {

      resolveModal();
              
    }, 300);
  });

  var resizeTimer;

  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      resolveModal();
              
    }, 300);
  });
});

function resolveModal(){
  var $modalDialog = $('.modal-dialog');
  var $modalFlex = $('.modal-flex');
  var $modalInfoTag = $('.modalInfoTag');

  if ($modalDialog.first().height() < window.innerHeight) {
    $modalFlex.css('display', 'flex');
  } else {
    $modalFlex.css('display', 'block');
  }
  $modalInfoTag.css('padding-left', '0');
}

