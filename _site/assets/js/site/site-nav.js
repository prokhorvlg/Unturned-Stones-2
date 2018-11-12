// Responsible for the functionality of the navigation sidebar visible on the left side of the website.

// Used to check if first time nav is opening.
window.openedBefore = false;
// Used to check if nav is currently open.
window.navIsOpen = false;

// The HTML generated from the above object is stored here.
window.generatedNavButtons = {};
window.generatedNavPages = {};

// Sets the current active section in the nav menu.
window.activeSection = 'hub';
// Set to the page type on document load.
window.pageType = '';

$(document).ready(function(){

  // Find and store 
  $body = $('body');
  pageType = $body.attr('class');

  // Generate the navbar from site data.
  generateNav();
  // Automatically click the hub button to set the nav bar up.
  navClick('hub');

  $('.navTitleSection').click(function() {
    window.location.href = '/';
  });

  var $processURL = $('#processURL');
  if ($processURL.length){
    var urlString = $processURL.html();
    var pageColor = $processURL.css('color');
    $processURL.html(processURL(urlString, pageColor, pageType));
  }

  // Apply page highlight to elements with appropriate class.
  pageHighlight();

  // Load a sitemap into any element with a sitemap class.
  sitemapInit('sitemap');

  $('.navTabCircle').click(function($e) {
    $e.preventDefault();
  });

  // MENUBARLOGO (spinning dorito on hover)
  window.menuBarLogoClass = "menuBarLogo";
  window.menuBarLogos = document.getElementsByClassName(window.menuBarLogoClass);
  window.menuBarLogoClasses = ["spinning-logo-d1",
    "spinning-logo-d2",
    "spinning-logo-d3",
    "spinning-logo-d4",
    "spinning-logo-d5",
    "spinning-logo-d6",
    "spinning-logo-d7",
    "spinning-logo-d8",
    "spinning-logo-d9",
    "spinning-logo-d10",
    "spinning-logo-d11",
    "spinning-logo-d12",
    "spinning-logo-d13"];
  window.menuBarLogoStatus = window.menuBarLogoClasses[0];
  window.menuBarLogoIterator = 0;
  window.menuBarLogoTiming = 100;
  window.menuBarTimeout;

  function menuBarSwap() {
    if (window.menuBarLogoIterator < window.menuBarLogoClasses.length-1) {
      for (var i = 0; i < window.menuBarLogos.length; i++) {
        if (window.menuBarLogos[i].classList.contains(window.menuBarLogoStatus)) {
          window.menuBarLogoIterator+=1;
          window.menuBarLogos[i].classList.remove(window.menuBarLogoStatus);
          window.menuBarLogos[i].classList.add(window.menuBarLogoClasses[window.menuBarLogoIterator]);
          window.menuBarLogoStatus = window.menuBarLogoClasses[window.menuBarLogoIterator];
        } else {
          window.menuBarLogos[i].classList.remove(window.menuBarLogoClasses[i]);
          window.menuBarLogos[i].classList.add(window.menuBarLogoStatus);
        }
      }
    } else {
      window.menuBarLogoIterator = 0;
      for (var i = 0; i < window.menuBarLogos.length; i++) {
        for (var y = 0; y < window.menuBarLogoClasses.length; y++) {
          window.menuBarLogos[i].classList.remove(window.menuBarLogoClasses[y]);
        }
        window.menuBarLogoStatus = window.menuBarLogoClasses[0];
        window.menuBarLogos[i].classList.add(window.menuBarLogoStatus);
      }
    }
    window.menuBarTimeout = setTimeout(function() {
      menuBarSwap();
    }, window.menuBarLogoTiming);
  }

  $('.menuBarContainer').on('mouseover', function() {
    menuBarSwap();
  }).mouseout(function() {
    clearTimeout(window.menuBarTimeout);
    for (var i = 0; i < window.menuBarLogos.length; i++) {
      for (var y = 0; y < window.menuBarLogoClasses.length; y++) {
        window.menuBarLogos[i].classList.remove(window.menuBarLogoClasses[y]);
      }
      window.menuBarLogos[i].classList.add(window.menuBarLogoClasses[0]);
      window.menuBarLogoStatus = window.menuBarLogoClasses[0];
    }
  });

});

// Scrolls to target element within the body container.
function scrollToElement(targetEl) {
  $('html, body').animate({
    scrollTop: $('#' + targetEl).offset().top
  }, 300);
}

// Processes a URL for use in the breadcrumb display.
function processURL(urlString, color, section) {
  var urlArray = urlString.split('/');
  var final = '';

  for (var i = 0; i < urlArray.length; i++) {
    if (urlArray[i] != ''){
      if (window.headings[urlArray[i]]) {
        if (window.headings[urlArray[i]].actions != 'direct') {
          final = final + "<span class='breadcrumbDivider font-code'> : </span>";
          final = final + "<a href='javascript:void(0)' onclick='navigateSidenav(\"" + urlArray[i] + "\", \"" + section + "\")' class='breadcrumbElement font-code' style='color:" + color + ";'>" + urlArray[i] + "</a>";
        }
        else {
          final = final + "<span class='breadcrumbDivider font-code'> : ";
          final = final + urlArray[i] + "</span>";
        }
      }
      else {
        final = final + "<span class='breadcrumbDivider font-code'> : </span>";
        final = final + "<a href='javascript:void(0)' onclick='navigateSection(\"" + section + "\")' class='breadcrumbElement font-code' style='color:" + color + ";'>" + urlArray[i] + "</a>";
      }
    }
  }
  return final;
}

// Opens the side nav, and navigates to a section within it.
function navigateSection(targetSection) {
  manipNav();
  navClick(targetSection);
}

// Opens the side nav, and navigates to a nav element within the file structure.
function navigateSidenav(targetFolder, targetSection) {
  manipNav();
  navClick(targetSection);
  openNavObject(targetFolder);
}

// Open/close the side nav based on its current state.
function manipNav() {
  if (window.navIsOpen) {
    closeNav();
    window.navIsOpen = false;
    $('body').removeClass('modal-open');
  }
  else {
    openNav();
    if (!window.openedBefore) {
      // firstNavOpen();
      window.openedBefore = true;
    }
    window.navIsOpen = true;
    $('body').addClass('modal-open');
  }
}

// Onclick handler for the dark div that covers the content area.
function outsideClick() {
  manipNav();
}

// Open the nav.
function openNav() {

  // Desktop: move nav container into view from the left.
  $('.navContainer').css('left', '0');

  // Bring the main body dimming into view.
  $('.dimDiv').css('display', 'block');
  setTimeout(function() { 
    $('.dimDiv').css('opacity', '0.5');
  }, 5);
  
  // Fade the right border of the leftside navbar.
  $('.menuBarContainer').css('border-right', '1px solid rgba(255,255,255,0.3)');
  $('.navElement').removeClass('navSlideToLeft');

  $('.menuBarArrowRight').addClass('fullRotation');
  $('.menuBarArrowLeft').addClass('fullOppositeRotation');

  setTimeout( function() { 
    $('.navTerminalChild').removeClass('hidden'); 
  }, 300);

  $('.navContainerMobile').css('bottom', '0');
  $('.navContainerMobile').css('padding-top', '70px');

}

// Closes the side nav.
function closeNav() {
  $('.navTerminalChild').addClass('hidden');

  $('.navContainer').css('left', '-750px');
  $('.menuBarContainer').css('border-right', '1px solid white');
  $('.dimDiv').css('opacity', '0');
  $('.navElement').addClass('navSlideToLeft');
  setTimeout(function() { 
    $('.dimDiv').css('display', 'none');
    $('.navElement').remove();
  }, 300);
  
  $('.menuBarArrowRight').removeClass('fullRotation');
  $('.menuBarArrowLeft').removeClass('fullOppositeRotation');

  $('.navContainerMobile').css('bottom', '150%');
  $('.navContainerMobile').css('padding-top', '0');
}

// Handles the click of a navigation section within the side nav.
function navClick(target) {
  $('.nav_sectionTitle').html(target);
  $('.nav_sectionDescription').html(window.navSections[target]['description']);

  if (target == 'terminal') {
    $('.navScrollable').css('height', '0px');
    $('.navTerminal').css('flex-grow', '1');
    $('.navScrollable').css('flex-grow', '0');
    $('.navScrollable').css('margin-top', '0px');
    $('.navTerminal').addClass('displayMe');
  } else {
    $('.navScrollable').css('height', 'auto');
    $('.navScrollable').css('flex-grow', '1');
    $('.navTerminal').css('flex-grow', '0');
    $('.navTerminal').css('height', '150px');
    $('.navScrollable').css('margin-top', '30px');
    $('.navScrollable').html(window.generatedNavButtons[target]);
    setTimeout( function() { 
      $('.navTerminal').removeClass('displayMe'); 
    }, 200);
  }

  $('.nav_color_bg').css('background-color', window.navSections[target]['color']);
  $('.nav_color_bg_home').attr('class', 'navTitleSection nav_color_bg_home nav-color_' + target);
  $('.nav_color').css('color', window.navSections[target]['color']);
  window.activeSection = target;

  $('.navTabImage').removeClass('navHoveredImage');
  $('.nav_' + target).children().addClass('navHoveredImage');
}

// Overhead function for generating the entire contents of the nav.
function generateNav() {
  window.generatedNavButtons['hub'] = findNavItems('hub', window.headings);
  window.generatedNavButtons['chronicle'] = findNavItems('chronicle', window.headings);
  window.generatedNavButtons['codex'] = findNavItems('codex', window.headings);
  window.generatedNavButtons['terminal'] = findNavItems('terminal', window.headings);
  window.generatedNavButtons['about'] = findNavItems('about', window.headings);
}

// Triggers all of the overheads for nav generation.
function findNavItems(target) {
  var currentHeadingObject = '';

  if (target == 'codex') {

    compileObjectOverhead('geography', window.headings);
    compileObjectOverhead('history', window.headings);
    compileObjectOverhead('society', window.headings);
    compileObjectOverhead('technology', window.headings);

    currentHeadingObject += window.generatedNavButtons['geography'];
    currentHeadingObject += window.generatedNavButtons['history'];
    currentHeadingObject += window.generatedNavButtons['society'];
    currentHeadingObject += window.generatedNavButtons['technology'];
  }
  return currentHeadingObject;
}

// Overhead function; takes care of all HTML generation for an inputted nav object.
function compileObjectOverhead(currentHeading) {
  // Begin by compiling the button for the object.
  compileNavObjectButton(currentHeading);

  // Cycle through object children (if any), and run this function on them.
  for (var i = 0; i < window.headings[currentHeading]['subheadings'].length; i++) {
    compileObjectOverhead(window.headings[currentHeading]['subheadings'][i]);
  }

  // Proceed to compile the slideout for the object if it has children. - NEEDS CHILDREN BUTTONS
  if (window.headings[currentHeading]['actions'] === 'expand') {
    compileNavObjectSlideout(currentHeading);
  }
  // The object is now created.  
}

// Compiles a button for the input object.
function compileNavObjectButton(currentHeading) {
  if (window.headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='" +window.headings[currentHeading]['title'] + "' onclick=\"openNavObject('" + currentHeading + "')\" >";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += window.headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += window.headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += window.headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color' id=\"navHeadingItemDown_" + currentHeading + "\">";
    currentHeadingObject += "+";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    window.generatedNavButtons[currentHeading] = currentHeadingObject;
  }
  else if (window.headings[currentHeading]['actions'] == 'direct') {
    var currentHeadingObject = '';

    currentHeadingObject += "<a class='divLink' href='" + window.headings[currentHeading]['link'] + "'><div class='navHeadingItem' id='nav_" + currentHeading + "' >";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += window.headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += window.headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += window.headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color'>";
    currentHeadingObject += "⤷";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div></a>";

    window.generatedNavButtons[currentHeading] = currentHeadingObject;
  }
}

function compileNavObjectSlideout(currentHeading) {

  var buttonsInThisNav = '';
  for (var i = 0; i < window.headings[currentHeading]['subheadings'].length; i++) {
    buttonsInThisNav += window.generatedNavButtons[window.headings[currentHeading]['subheadings'][i]];
  }

  window.generatedNavPages[currentHeading] = "<div class='navElement' id='child_"+ currentHeading + "'>\
      <div class='navBackButton' onclick='closeNavObject(\""+ currentHeading + "\")'>\
        <p class='font-code nav_color'><< BACK</p>\
      </div>\
      <h1 class='navTitle allCaps'>"+ window.headings[currentHeading]['title'] + "</h1>\
      <p class='navHeadingDetails'>" + window.headings[currentHeading]['details'] + "</p>\
      <div class='navChild navScrollable utsScrollBar'>\
        " + buttonsInThisNav + "\
      </div>\
    </div>";
}

function openNavObject(currentHeading) {
  var navObject = window.generatedNavPages[currentHeading];
  if (!$("#child_" + currentHeading).length) {
    $('.appendNavElements').append( navObject );
    
    setTimeout( function() {
      $('#child_' + currentHeading).css('left', '0');
      $('.nav_color').css('color', window.navSections[window.activeSection]['color']);
     }, 5);
    
  }
}

function closeNavObject(currentHeading) {
  if ($("#child_" + currentHeading).length) {
    $('#child_' + currentHeading).css('left', '-750px');

    setTimeout( function() { 
      $("#child_" + currentHeading).remove(); 
    }, 300);
  }
}

// Navigates to the selected page.
function navigateNavObject(currentHeading) {
  window.location.href = window.headings[currentHeading]['link'];
}

// Resets the animation of the spinning dorito upon mouseleave of the nav bar.
function resetSpin(menuBarLogo) {
  var $menuBarLogo = $('.' + menuBarLogo);
  $menuBarLogo.css('animation', 'none');
  setTimeout(function() {
    $menuBarLogo.css('animation', '');
    $menuBarLogo.css('background-image', 'url(/assets/images/spinning_logo/d13.png)');
  }, 10);
}

// Checks if device is mobile.
// returns bool
function isMobile(){
  if ($(window).width() <= 991) {
    return true;
  }
  else {
    return false;
  }
}

function pageHighlight() {
  var color = $('.pageHighlight').first().css('color');

  $('.highlight-color').css('color', color);
  $('.highlight-bg').css('background-color', color);
  $('.highlight-border').css('border-color', color);
}

window.sitemap = '';
function sitemapInit(el) {
  window.sitemap = window.sitemap + compileSitemap('hub', 0);
  window.sitemap = window.sitemap + compileSitemap('codex', 0);
  $('.' + el).html(window.sitemap);
}

function compileSitemap(currentHeading, currentLeft = 0) {

  var calcLeft = currentLeft * 20;

  if (window.headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='" + currentHeading + "' onclick=\"expandSitemapObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px'>";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += window.headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += window.headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += window.headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color' id=\"navHeadingItemDown_" + currentHeading + "\">";
    currentHeadingObject += "+";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    var compiledSubheadings = "<div class='navHeadingContainer' id='expand_" + currentHeading + "'>";
    for (var i = 0; i < window.headings[currentHeading]['subheadings'].length; i++) {
      compiledSubheadings += compileSitemap(window.headings[currentHeading]['subheadings'][i], (currentLeft + 1));
    }
    compiledSubheadings += "</div>";

    return currentHeadingObject + compiledSubheadings;

  }
  else if (window.headings[currentHeading]['actions'] == 'direct') {
    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='nav_" + currentHeading + "' onclick=\"openNavObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px'>";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += window.headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += window.headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += window.headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color'>";
    currentHeadingObject += "⤷";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    return currentHeadingObject;
  }

}

function expandSitemapObject(currentHeading) {
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

// Load Featured content when required.
function loadFeaturedHome() {
  var $hiddenEl = $('.featuredHidden').first();
  var $targetEl = $('.homeButton.featured .homeButtomRightBracket').first();

  $lastEl = $hiddenEl.children('div').last();

  var id = $lastEl.attr('id');
  var page_highlight = $lastEl.children('.page_highlight').text();
  var title = $lastEl.children('.title').text();
  var image = $lastEl.children('.image').text();
  var quote = window.headings[id].description;

  var link = window.headings[id].link;

  $targetEl.children('.quote').first().children('p').first().html(quote);
  $targetEl.children('.quote').first().children('p').first().css('color',page_highlight);
  $targetEl.children('.line').css('background',page_highlight);
  $targetEl.children('.title').first().children('p').first().html(title);
  $targetEl.children('.image').first().children('img').first().attr("src",image);

  $targetEl.css('opacity','1');

  var $targetButton = $('.homeButton.featured').first();

  $targetButton.css('border','1px solid ' + page_highlight);
  $("#featuredFill", $('#featuredSVG')).attr('style', "fill:"+page_highlight);
  $('.homeButton.featured .homeButtonText').css('color',page_highlight);

  $targetButton.parent().attr('href',link);
}