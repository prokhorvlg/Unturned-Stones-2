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
    "details": "Five suns. Three brown dwarfs. Dozens of rogues. All orbiting a massive black hole meandering through space. Find out more through the interactive cartouche, a map of the known universe.",
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
      "metavaski-minke",
      "boring-rocket"
    ]
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
    "title": "The Metavaski Minke",
    "description": "Data Hauler", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/spacecraft/metavaski-minke",
    "subheadings": []
  },
  "boring-rocket": {
    "title": "The Boring Rocket",
    "description": "Mining vessel", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/spacecraft/boring-rocket",
    "subheadings": []
  }
}

// The HTML generated from the above object is stored here.
var generatedNav = {};

$(document).ready(function(){
  generateNav();
  navClick('home');
});

function generateNav() {
  generatedNav = { 
    'home': findNavItems('home'),
    'chronicle': findNavItems('chronicle'),
    'codex': findNavItems('codex'),
    'terminal': findNavItems('terminal'),
    'about': findNavItems('about')
  };
}

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
    console.log('mobileNavOpen');
    navContainer.style.left = "0";
    navContainer.style.minWidth = "100%";
    navContainer.style.height = "100%";
    navContainer.style.bottom = "0";
    menuBarContainer.style.borderRight = "none";
    menuBarContainer.style.borderBottom = "1px solid rgba(255,255,255,0.3)";
  }
  else {
    navContainer.style.left = "0";
    navContainer.style.minWidth = "700px";
    dimDiv.style.opacity = "0.5";
    menuBarContainer.style.borderRight = "1px solid rgba(255,255,255,0.3)";
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
    console.log('mobileNavClose');
    navContainer.style.left = "0";
    navContainer.style.minWidth = "100%";
    navContainer.style.height = "0px";
    navContainer.style.bottom = "100%";
    menuBarContainer.style.borderRight = "none";
    menuBarContainer.style.borderBottom = "1px solid white";
  }
  else {
    navContainer.style.left = "-700px";
    navContainer.style.minWidth = "650px";
    menuBarContainer.style.borderRight = "1px solid white";
  }
  
  dimDiv.style.opacity = "0";

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
  }
  else {
    navScrollable.style.flexGrow = '1';
    navTerminal.style.flexGrow = '0';
    navTerminal.style.height = '150px';
    navScrollable.style.marginTop = '30px';
    navScrollable.innerHTML = generatedNav[target];
  }

  $('.nav_color_bg').css('background-color', navSections[target]['color']);
  $('.nav_color').css('color', navSections[target]['color']);

  $('.navTabImage').removeClass('navHoveredImage');
  $('#nav_' + target).children().addClass('navHoveredImage');
}


function findNavItems(target) {
  var currentHeadingObject = '';
  if (target == 'codex') {
    currentHeadingObject += compileNavObject('geography');
    currentHeadingObject += compileNavObject('technology');
  }
  return currentHeadingObject;
}

// Recursively generates HTML for the innerHTML of the nav sections in a sidebar;
// based on the items in the headings objects;
// currentLeft is passed to add additional margin on the left of the nav object to show it is 'below' its parent. This is incremented for each child.
function compileNavObject(currentHeading, currentLeft = 0) {

  var calcLeft = currentLeft * 20;

  console.log(headings[currentHeading]['actions'])
  if (headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='" + currentHeading + "' onclick=\"expandNavObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px'>";

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

    if (headings[currentHeading]['details']) {
      currentHeadingObject += "<div class='navHeadingDetails' id='details_" + currentHeading + "' onclick=\"expandNavObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px; height: 0px; display:none;'>";
      currentHeadingObject += headings[currentHeading]['details'];
      currentHeadingObject += "</div>";
    }

    var compiledSubheadings = "<div class='navHeadingContainer' id='expand_" + currentHeading + "' style='height: 0px;'>";
    for (var i = 0; i < headings[currentHeading]['subheadings'].length; i++) {
      compiledSubheadings += compileNavObject(headings[currentHeading]['subheadings'][i], (currentLeft + 1));
    }
    compiledSubheadings += "</div>";

    return currentHeadingObject + compiledSubheadings;

  }
  else if (headings[currentHeading]['actions'] == 'direct') {
    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='nav_" + currentHeading + "' onclick=\"openNavObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px'>";

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

    return currentHeadingObject;
  }

}

// Expands an expandable nav item in the sidebar when the nav item is clicked, and closes it if already open.
function expandNavObject(currentHeading) {
  var child = document.getElementById('expand_' + currentHeading);
  var child_details = document.getElementById('details_' + currentHeading);
  if (document.getElementById('details_' + currentHeading)) {
    child_details = document.getElementById('details_' + currentHeading);
  }

  if (child.style.height == '0px') {
    child.style.height = "auto";
    if (child_details) {
      child_details.style.height = "auto";
      child_details.style.display = "block";
    }
    $('#navHeadingItemDown_' + currentHeading).html('-');
  }
  else {
    child.style.height = '0px';
    if (child_details) {
      child_details.style.height = "0px";
      child_details.style.display = "none";
    }
    $('#navHeadingItemDown_' + currentHeading).html('+');
  }
}

// Navigates to the selected page.
function openNavObject(currentHeading) {
  console.log('navigating to', headings[currentHeading]['link']);
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