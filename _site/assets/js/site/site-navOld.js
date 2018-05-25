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

function generateNav() {
  generatedNav = { 
    'home': findNavItems('home'),
    'chronicle': findNavItems('chronicle'),
    'codex': findNavItems('codex'),
    'terminal': findNavItems('terminal'),
    'about': findNavItems('about')
  };
}

function findNavItems(target) {
  var currentHeadingObject = '';
  if (target == 'codex') {
    currentHeadingObject += compileNavObject('geography');
    currentHeadingObject += compileNavObject('technology');
  }
  return currentHeadingObject;
}
