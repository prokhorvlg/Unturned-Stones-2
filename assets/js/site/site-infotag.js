$(document).ready( function() {
  $('.infoTag').click(function() {
    var tags = {
      'caravansarai': {
        name: 'Caravansarai',
        body: "<p class='text-justify'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-justify'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
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
      'exotic-matter': {
        name: 'Exotic Matter',
        body: "<p class='text-justify'>A rare form of matter that enables faster-than-light travel.</p> \
          <p class='text-justify'>Sagar-Chang Type 1, widely referred to simply as 'exotic matter', runs the modern world. It's most well known for facilitating SLIP faster-than-light travel, but the incredible nature of the substance makes it useful in nearly any technological application.</p>",
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
    };
    var target = $(this).data('info');

    $('.infoTagTitle').html(tags[target].name);

    if ('imageType' in tags[target]) {
      if ('centerImageParent' in tags[target]) {
        if (tags[target].centerImageParent == true) {
          $('.infoTagImage').css('text-align', 'center');
        }
      } else {
        $('.infoTagImage').css('text-align', 'none');
      }
      if (tags[target].imageType == 'img') {
        $('.infoTagImage').html("<img id='infoTagModalImage' src='" + window.svgRef[tags[target].image] + "' />");
        for (var i = 0; i < tags[target].styles.length; i++) {
          document.getElementById('infoTagModalImage').style[tags[target].styles[i][0]] = tags[target].styles[i][1];
        }
      } else if (tags[target].imageType == 'svg') {
        $('.infoTagImage').html(window.svgRef[tags[target].image]);
        for (var i = 0; i < tags[target].styles.length; i++) {
          document.getElementById('infoTagModalImageSVG').style[tags[target].styles[i][0]] = tags[target].styles[i][1];
        }
      } 
    } else {
      $('.infoTagImage').html('');
    }

    $('.infoTagBody').html(tags[target].body);

    if ('link' in tags[target]) {
      $('.infoTagFooter').html("<a id='infoTagModalLearnMore' href='" + tags[target].link + "' class='commonButton font-code-l'>Learn More</a>");
      if ('color' in tags[target]) {
        document.getElementById('infoTagModalLearnMore').style.color = tags[target].color;
        document.getElementById('infoTagModalLearnMore').style.borderColor = tags[target].color;
      }
    } else {
      $('.infoTagFooter').html('');
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
  if ($('.modal-dialog').first().height() < window.innerHeight) {
    $('.modal-flex').css('display', 'flex');
  } else {
    $('.modal-flex').css('display', 'block');
  }
  $('.modalInfoTag').css('padding-left', '0');
}

