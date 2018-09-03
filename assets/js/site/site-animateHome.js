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
  "deploying operations team"
];

$( '.spinText' ).each(function() {
  
  randomizeEcho(this);

});

function randomizeEcho( element, multi = 3000) {

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

  var soulSVG = Snap( '#soulSVG' );
  animateHomeSoul(soulSVG);

  $( "#contentContainer" ).scroll(function() {
    $('.scrollCheck').each( function() {
      if ( checkInView(document.getElementById('body'), this, 500) ){
        // console.log(this, 'in view');
        if ($(this).hasClass('homeContentFade')) {
          this.style.opacity = '1';
        }
      }
    });
  });

});

function animateHomeSoul(soulSVG){
  // big
  soulSVG.select("#soulBlueFlame").animate( { transform: 's0.95' }, 1000, mina.easeinout );

  // small
  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").animate( { transform: 's0.4' }, 1000, mina.easeinout );
  }, 1000);

  setTimeout( function() { animateHomeSoul(soulSVG) }, 2000);
}

/*

function animateHomeSoul(soulSVG){
  soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.95' }, 120, mina.easeinout);

  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.3' }, 180, mina.easeinout);
  }, 120);

  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.27' }, 30, mina.easeinout);
  }, 300);

  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.35' }, 150, mina.easeinout);
  }, 330);

  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.33' }, 20, mina.easeinout);
  }, 480);

  setTimeout( function() { 
    soulSVG.select("#soulBlueFlame").stop().animate(
    { transform: 's0.48' }, 90, mina.easeinout);
  }, 500);

  setTimeout( function() { animateHomeSoul(soulSVG) }, 590);
}

function animateHomeRepeaters(){
  s.select("#soulBlueFlame").stop().animate(
    { d: "M376.029,341.000 L393.000,304.029 L409.970,341.000 L393.000,357.970 L376.029,341.000 Z" }, 500, mina.easeinout);
  s.select("#soulFaintCircle").stop().animate(
    { strokeWidth: '60px' }, 500, mina.easeinout);

  setTimeout( function() { 
    s.select("#soulBlueFlame").stop().animate(
    { d: "M376.029,341.000 L393.000,324.029 L409.970,341.000 L393.000,357.970 L376.029,341.000 Z" }, 300, mina.easeinout);
    s.select("#soulFaintCircle").stop().animate(
    { strokeWidth: '30px' }, 300, mina.easeinout);
  }, 500);

  setTimeout( function() { animateHomeRepeaters() }, 800);
}*/

function checkInView(container, element, partial) {

    //Get container properties
    let cTop = container.scrollTop;
    let cBottom = cTop + container.clientHeight;

    //Get element properties
    let eTop = element.offsetTop;
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