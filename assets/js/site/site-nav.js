// Responsible for the functionality of the navigation sidebar visible on the left side of the website.

// Used to check if first time nav is opening.
var openedBefore = false;
// Used to check if nav is currently open.
var navIsOpen = false;

var navSections = { 
  "home": {
    "description": "Go home.",
    "color": "#fff"
  },
  "chronicle": {
    "description": "The chronicle.",
    "color": "#00ffff"
  },
  "codex": {
    "description": "Explore the world of Unturned Stones by scouring the codex, an organized repository of information.",
    "color": "#ff00ff"
  },
  "terminal": {
    "description": "A Network Utility Terminal hooked directly into... something? Enter commands to interact.",
    "color": "#00ff36"
  },
  "about": {
    "description": "The about.",
    "color": "#fff"
  }
}

var headings = {
  "geography": {
    "title": "Geography",
    "description": "", 
    "actions": "expand",
    "icon": "",
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
    "icon": "*",
    "link": "/cartouche",
    "subheadings": []
  },
  "places-by-system": {
    "title": "Locations",
    "description": "(Sorted by system)", 
    "actions": "direct",
    "icon": "",
    "link": "/system",
    "subheadings": []
  }
}

$(document).ready(function(){
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
      firstNavOpen();
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

  // navContainer.style.right = "50%";
  navContainer.style.left = "0";
  navContainer.style.minWidth = "700px";
  dimDiv.style.opacity = "0.5";
  menuBarContainer.style.borderRight = "1px solid rgba(255,255,255,0.3)";

  $('.menuBarArrowRight').addClass('fullRotation');
  $('.menuBarArrowLeft').addClass('fullOppositeRotation');

  setTimeout( function() { $('.navTerminalChild').removeClass('hidden'); }, 300);

  //$('.navSectionBarLine').addClass('navSectionBarLineUnrotated');
}

function firstNavOpen() {
  // load terminal
}

function closeNav() {
  var navContainer = document.getElementById('navContainer');
  var dimDiv = document.getElementById('dimDiv');
  var menuBarLabel = document.getElementById('menuBarLabel');
  var menuBarContainer = document.getElementById('menuBarContainer');

  $('.navTerminalChild').addClass('hidden');

  // navContainer.style.right = "100%";
  navContainer.style.left = "-700px";
  navContainer.style.minWidth = "650px";
  dimDiv.style.opacity = "0";
  menuBarContainer.style.borderRight = "1px solid white";

  $('.menuBarArrowRight').removeClass('fullRotation');
  $('.menuBarArrowLeft').removeClass('fullOppositeRotation');

  //$('.navSectionBarLine').removeClass('navSectionBarLineUnrotated');

}

function navClick(target) {
  var targetIcon = document.getElementById('nav_' + target);
  var sectionTitle = document.getElementById('nav_sectionTitle');
  var sectionDescription = document.getElementById('nav_sectionDescription');

  sectionTitle.innerHTML = target;
  sectionDescription.innerHTML = navSections[target]['description'];

  $('.nav_color_bg').css('background-color', navSections[target]['color']);
  $('.nav_color').css('color', navSections[target]['color']);

  $('.navTabCircle').css('border-color', '');
  $('#nav_' + target).css('border-color', navSections[target]['color']);

  // Update navigation structure

  var navScrollable = document.getElementById('navScrollable');
  var navTerminal = document.getElementById('navTerminal');
  if (target == 'terminal') {
    // navScrollable.style.display = 'none';
    navScrollable.style.height = '0px';
    navTerminal.style.height = '100%';
    navTerminal.style.flexGrow = '1';
    navScrollable.style.flexGrow = '0';
    navScrollable.style.marginTop = '0px';
  }
  else {
    // navScrollable.style.display = 'block';
    // navScrollable.style.height = '100%';
    navScrollable.style.flexGrow = '1';
    navTerminal.style.flexGrow = '0';
    navTerminal.style.height = '150px';
    navScrollable.style.marginTop = '30px';
    navScrollable.innerHTML = findNavItems(target);
  }
  
}

function findNavItems(heading) {

}

function compileNavObject(currentHeading, currentLeft) {
  var divStyles;

  if (headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class=''>";

    var compiledSubheadings = '';
    for (var i = 0; i < headings[currentHeading]['subheadings'].length; i++) {
      compiledSubheadings += compileNavObject(headings[currentHeading]['subheadings'][i], (currentLeft + 1));
    }

  }
  else if (headings[currentHeading]['actions'] == 'direct') {
    
  }

}