// Responsible for the functionality of the navigation sidebar visible on the left side of the website.

// Used to check if first time nav is opening.
var openedBefore = false;
// Used to check if nav is currently open.
var navIsOpen = false;

// Stores data regarding the nav tabs in the sidebar.
var navSections = { 
  "home": {
    "description": "Go home.",
    "color": "#fff"
  },
  "chronicle": {
    "description": "Experience an introduction to the world of Unturned Stones by following the chronicle, a journey touching upon all aspects of life in this cyberpunk world.",
    "color": "#00ffff"
  },
  "codex": {
    "description": "Explore the world of Unturned Stones by scouring the codex, an organized repository of information; much like a wiki.",
    "color": "#ff00ff"
  },
  "terminal": {
    "description": "An old Network Utility Terminal hooked directly into... something. Enter commands into the terminal and push enter to interact with it.",
    "color": "#00ff36"
  },
  "about": {
    "description": "Learn more about the project, what it’s about, why I started it, and how it came to be.",
    "color": "#fff"
  }
}

// Stores data regarding each navigation item in the sidebar navigation system.
// Items here reference other objects within headings that are its children, within the subheadings array.
var headings = {
  "geography": {
    "title": "Geography",
    "description": "", 
    "details": "Five suns. Three brown dwarfs. Dozens of rogues. All orbiting a massive black hole meandering through space.<br><br>Find out more through the interactive cartouche, a map of the known universe.",
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "cartouche",
      "places-by-system",
      "places-by-alphabet"
    ]
  },
  "cartouche": {
    "title": "Cartouche",
    "description": "An interactive map of the world", 
    "actions": "direct",
    "icon": ">",
    "link": "/cartouche",
    "subheadings": []
  },
  "places-by-system": {
    "title": "List of Locations",
    "description": "(Sorted by system)", 
    "details": "A full list of locations in Unturned Stones, ordered on a what-orbits-what basis.",
    "actions": "expand",
    "icon": "═",
    "link": "/system",
    "subheadings": [ "bahamut" ]
  },
  "bahamut": {
    "title": "Bahamut Black Hole",
    "description": "Center of the world", 
    "actions": "direct",
    "icon": ">",
    "link": "/system/bahamut",
    "subheadings": []
  },
  "places-by-alphabet": {
    "title": "List of Locations",
    "description": "(Sorted by alphabet)", 
    "actions": "direct",
    "icon": "═",
    "link": "/system",
    "subheadings": []
  },
  "technology": {
    "title": "Technology",
    "details": "Ubiquitous cybertechnology and superluminal starships reign in a society dominated by artificial intelligence in every aspect, where man operates in union with the machine but in turn has arguably lost free will. <br><br>Meanwhile, mechatronics and energy technology wane in a world where those concepts haven't even been considered as viable; where an advanced understanding of human psychology and the prevalence of centralized fusion have rendered those ideas virtually useless to study.",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "technology-page",
      "spacecraft"
    ]
  },
  "technology-page": {
    "title": "Technology: Overview",
    "description": "Starships and computers.", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology",
    "subheadings": []
  },
  "spacecraft": {
    "title": "Spacecraft",
    "description": "Interstellar Torchships", 
    "actions": "expand",
    "icon": "═",
    "link": "/technology/spacecraft",
    "subheadings": [
      "starscrapers",
      "boring-rocket",
      "loxley",
      "metavaski-minke",
      "nedry",
      "petra-wayward",
      "shenlong",
    ],
  },
  "starscrapers": {
    "title": "Starscrapers",
    "description": "A briefing on spacecraft", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/spacecraft/starscrapers",
    "subheadings": []
  },
  "metavaski-minke": {
    "title": "Metavaski Minke",
    "description": "Data Hauler", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/metavaski-minke",
    "subheadings": []
  },
  "boring-rocket": {
    "title": "Boring Rocket",
    "description": "Mining vessel", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/boring-rocket",
    "subheadings": []
  },
  "nedry": {
    "title": "BOS Nedry",
    "description": "Warships without guns", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/nedry",
    "subheadings": []
  },
  "loxley": {
    "title": "Lord of Loxley",
    "description": "Merry men", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/loxley",
    "subheadings": []
  },
  "shenlong": {
    "title": "COEK Shenlong",
    "description": "Emperor's Spirit Dragon", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/shenlong",
    "subheadings": []
  },
  "petra-wayward": {
    "title": "Petra-Wayward Startower",
    "description": "Center of Commerce", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/spacecraft/petra-wayward",
    "subheadings": []
  },
}

// The HTML generated from the above object is stored here.
var generatedNavButtons = {};
var generatedNavPages = {};

var activeSection = 'home';

$(document).ready(function(){
  generateNav();
  navClick('home');
});

function manipNav() {
  if (navIsOpen) {
    closeNav();
    navIsOpen = false;
  }
  else {
    openNav();
    if (!openedBefore) {
      // firstNavOpen();
      openedBefore = true;
    }
    navIsOpen = true;
  }
}

function outsideClick() {
  if (navIsOpen) {
    closeNav();
    navIsOpen = false;
  }
}

function openNav() {
  var navContainer = document.getElementById('navContainer');
  var dimDiv = document.getElementById('dimDiv');
  var menuBarLabel = document.getElementById('menuBarLabel');
  var menuBarContainer = document.getElementById('menuBarContainer');

  if (isMobile()) {
    
  }
  else {
    navContainer.style.left = "0";
    dimDiv.style.display = 'block';
    setTimeout(function() { dimDiv.style.opacity = "0.5"; }, 5);
    menuBarContainer.style.borderRight = "1px solid rgba(255,255,255,0.3)";
    $('.navElement').removeClass('navSlideToLeft');
  }

  $('.menuBarArrowRight').addClass('fullRotation');
  $('.menuBarArrowLeft').addClass('fullOppositeRotation');

  setTimeout( function() { $('.navTerminalChild').removeClass('hidden'); }, 300);
}

function closeNav() {
  var navContainer = document.getElementById('navContainer');
  var dimDiv = document.getElementById('dimDiv');
  var menuBarLabel = document.getElementById('menuBarLabel');
  var menuBarContainer = document.getElementById('menuBarContainer');

  $('.navTerminalChild').addClass('hidden');

  if (isMobile()) {
    
  }
  else {
    navContainer.style.left = "-750px";
    menuBarContainer.style.borderRight = "1px solid white";
    dimDiv.style.opacity = "0";
    $('.navElement').addClass('navSlideToLeft');
    setTimeout(function() { 
      dimDiv.style.display = 'none';
      $('.navElement').remove();
    }, 300);
  }
  
  $('.menuBarArrowRight').removeClass('fullRotation');
  $('.menuBarArrowLeft').removeClass('fullOppositeRotation');
}

function navClick(target) {
  var targetIcon = document.getElementById('nav_' + target);
  var sectionTitle = document.getElementById('nav_sectionTitle');
  var sectionDescription = document.getElementById('nav_sectionDescription');

  sectionTitle.innerHTML = target;
  sectionDescription.innerHTML = navSections[target]['description'];

  // Update navigation structure

  var navScrollable = document.getElementById('navScrollable');
  var navTerminal = document.getElementById('navTerminal');
  if (target == 'terminal') {
    navScrollable.style.height = '0px';
    navTerminal.style.flexGrow = '1';
    navScrollable.style.flexGrow = '0';
    navScrollable.style.marginTop = '0px';
    $('.navTerminal').addClass('displayMe');
  }
  else {
    navScrollable.style.flexGrow = '1';
    navTerminal.style.flexGrow = '0';
    navTerminal.style.height = '150px';
    navScrollable.style.marginTop = '30px';
    navScrollable.innerHTML = generatedNavButtons[target];
    setTimeout( function() { $('.navTerminal').removeClass('displayMe'); }, 200);
  }

  $('.nav_color_bg').css('background-color', navSections[target]['color']);
  $('.nav_color').css('color', navSections[target]['color']);
  activeSection = target;

  $('.navTabImage').removeClass('navHoveredImage');
  $('#nav_' + target).children().addClass('navHoveredImage');
}

// Overhead function for generating the entire contents of the nav.
function generateNav() {
  generatedNavButtons['home'] = findNavItems('home');
  generatedNavButtons['chronicle'] = findNavItems('chronicle');
  generatedNavButtons['codex'] = findNavItems('codex');
  generatedNavButtons['terminal'] = findNavItems('terminal');
  generatedNavButtons['about'] = findNavItems('about');
}

// Triggers all of the overheads for nav generation.
function findNavItems(target) {
  var currentHeadingObject = '';
  if (target == 'codex') {
    compileObjectOverhead('geography');
    compileObjectOverhead('technology');
    currentHeadingObject += generatedNavButtons['geography'];
    currentHeadingObject += generatedNavButtons['technology'];
  }
  return currentHeadingObject;
}

// Overhead function; takes care of all HTML generation for an inputted nav object.
function compileObjectOverhead(currentHeading) {
  // Begin by compiling the button for the object.
  compileNavObjectButton(currentHeading);

  // Cycle through object children (if any), and run this function on them.
  for (var i = 0; i < headings[currentHeading]['subheadings'].length; i++) {
    compileObjectOverhead(headings[currentHeading]['subheadings'][i]);
  }

  // Proceed to compile the slideout for the object if it has children. - NEEDS CHILDREN BUTTONS
  if (headings[currentHeading]['actions'] == 'expand') {
    compileNavObjectSlideout(currentHeading);
  }
  // The object is now created.  
}

// Compiles a button for the input object.
function compileNavObjectButton(currentHeading) {
  if (headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='" + headings[currentHeading]['title'] + "' onclick=\"openNavObject('" + currentHeading + "')\" >";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color' id=\"navHeadingItemDown_" + currentHeading + "\">";
    currentHeadingObject += "+";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    generatedNavButtons[currentHeading] = currentHeadingObject;
  }
  else if (headings[currentHeading]['actions'] == 'direct') {
    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='nav_" + currentHeading + "' onclick=\"navigateNavObject('" + currentHeading + "')\" >";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color'>";
    currentHeadingObject += "⤷";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    generatedNavButtons[currentHeading] = currentHeadingObject;
  }
}

function compileNavObjectSlideout(currentHeading) {

  var buttonsInThisNav = '';
  for (var i = 0; i < headings[currentHeading]['subheadings'].length; i++) {
    buttonsInThisNav += generatedNavButtons[headings[currentHeading]['subheadings'][i]];
  }

  generatedNavPages[currentHeading] = "<div class='navElement' id='child_"+ currentHeading + "'>\
      <div class='navBackButton' onclick='closeNavObject(\""+ currentHeading + "\")'>\
        <p class='font-code nav_color'><< BACK</p>\
      </div>\
      <h1 class='navTitle allCaps'>"+ headings[currentHeading]['title'] + "</h1>\
      <p class='navHeadingDetails'>" + headings[currentHeading]['details'] + "</p>\
      <div class='navChild navScrollable utsScrollBar'>\
        " + buttonsInThisNav + "\
      </div>\
    </div>";
}

function openNavObject(currentHeading) {
  var navObject = generatedNavPages[currentHeading];
  if (!$("#child_" + currentHeading).length) {
    $('.siteContainer').append( navObject );
    
    var child = document.getElementById('child_' + currentHeading);
    setTimeout( function() { 
      child.style.left = "0";
      $('.nav_color').css('color', navSections[activeSection]['color']);
     }, 5);
    
  }
}

function closeNavObject(currentHeading) {
  if ($("#child_" + currentHeading).length) {
    var child = document.getElementById('child_' + currentHeading);
    child.style.left = "-750px";

    setTimeout( function() { $("#child_" + currentHeading).remove(); }, 300);
  }
}

// Navigates to the selected page.
function navigateNavObject(currentHeading) {
  console.log('navigating to', headings[currentHeading]['link']);
  window.location.href = headings[currentHeading]['link'];
}

// Resets the animation of the spinning dorito upon mouseleave of the nav bar.
function resetSpin() {
  var logo = document.getElementById('menuBarLogo');
  logo.style.animation = 'none';
  setTimeout(function() {
    logo.style.animation = '';
    logo.style.backgroundImage = 'url(../images/spinning_logo/d13.png)';
  }, 10);
}

// Checks if device is mobile.
// returns bool
function isMobile(){
  if ($(window).width() <= 640) {
    return true;
  }
  else {
    return false;
  }
}