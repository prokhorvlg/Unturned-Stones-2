// Responsible for the functionality of the navigation sidebar visible on the left side of the website.

// Used to check if first time nav is opening.
var openedBefore = false;
// Used to check if nav is currently open.
var navIsOpen = false;

// Stores data regarding the nav tabs in the sidebar.
var navSections = { 
  "hub": {
    "description": "A quick access point for major links.",
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
  "": {
    "title": "n/a",
    "description": "Nada", 
    "actions": "direct",
    "icon": ">",
    "link": "/",
    "subheadings": []
  },
  "hub": {
    "title": "Hub",
    "description": "", 
    "details": "",
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
    ]
  },
  "codex": {
    "title": "Codex",
    "description": "", 
    "details": "",
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "geography",
      "technology",
      "society",
    ]
  },
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
      "architecture",
      "computer-science",
      "gear",
      "infrastructure",
      "medical-science",
      "rocketry",
      //"social-informatics",
    ]
  },
  "technology-page": {
    "title": "Technology",
    "description": "Description.", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology",
    "subheadings": []
  },
  "rocketry": {
    "title": "Rocketry",
    "description": "Voyaging among stars", 
    "details": "Ranging from rock-hopping pods to mile-high monoliths, centuries of interstellar travel has perfected the 'starscraper' design. The best way to describe the common starship is an air-sealed high-rise building with a fusion drive strapped to the bottom, hurtling through space at 1g of acceleration.<br><br>Starscrapers have changed greatly over the course of time, but one thing has always remained certain - they are the tool of choice for anyone with any influence, and there is little reason to believe that will ever change.",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/rocketry",
    "subheadings": [
      "list-of-rocketry",
      "starscrapers",
      "speedwards",
      "dreadnoughts",
      "imperial-warships",
      //"petra-wayward",
      "burnell-harrelson-camera",
    ],
  },
  "list-of-rocketry": {
    "title": "< List of Stuff >",
    "description": "Rocketry", 
    "details": "A list of stuff",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/rocketry/list-of-stuff",
    "subheadings": [
      "",
    ],
  },
  "starscrapers": {
    "title": "Starscrapers",
    "description": "Spacecraft in the future", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/rocketry/starscrapers",
    "subheadings": []
  },
  "speedwards": {
    "title": "Speedwards",
    "description": "An abandoned concept", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/rocketry/speedwards",
    "subheadings": []
  },
  "dreadnoughts": {
    "title": "Dreadnoughts",
    "description": "Battleships from another era", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/rocketry/dreadnoughts",
    "subheadings": []
  },
  "imperial-warships": {
    "title": "Imperial Warships",
    "description": "Baring teeth", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/rocketry/imperial-warships",
    "subheadings": []
  },
  "burnell-harrelson-camera": {
    "title": "Burnell-Harrelson Camera",
    "description": "Keeping relativistic time", 
    "actions": "direct",
    "icon": ">",
    "link": "/technology/rocketry/burnell-harrelson-camera",
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
  "computer-science": {
    "title": "Computer Science",
    "description": "Cybertechnology", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/compsci",
    "subheadings": [
      "list-of-computer-science",
      "computers",
      "gadgets",
      "malware",
      "kaizen",
    ],
  },
  "list-of-computer-science": {
    "title": "< List of Stuff >",
    "description": "Computer Science", 
    "details": "A list of stuff",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/computer-science/list-of-stuff",
    "subheadings": [
      "",
    ],
  },
  "computers": {
    "title": "Computers",
    "description": "Different, yet familiar", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/computers",
    "subheadings": []
  },
  "gadgets": {
    "title": "Gadgets",
    "description": "Tools of the trade", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/gadgets",
    "subheadings": []
  },
  "malware": {
    "title": "Malware",
    "description": "Getting things done", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/malware",
    "subheadings": []
  },
  "kaizen": {
    "title": "Kaizen",
    "description": "AI has taken over", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/kaizen",
    "subheadings": []
  },
  "architecture": {
    "title": "Architecture",
    "description": "Building stuff", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/architecture",
    "subheadings": [
      "list-of-architecture",
      "forged-in-flame",
      "secluded-american-colony",
    ],
  },
  "list-of-architecture": {
    "title": "< List of Stuff >",
    "description": "Architecture", 
    "details": "A list of stuff",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/architecture/list-of-stuff",
    "subheadings": [
      "",
    ],
  },
  "forged-in-flame": {
    "title": "Forged in Flame",
    "description": "Imperial Nordoslavic design", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/architecture/forged-in-flame",
    "subheadings": []
  },
  "secluded-american-colony": {
    "title": "Secluded American Colony",
    "description": "Federation design", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/architecture/secluded-american-colony",
    "subheadings": []
  },
  "gear": {
    "title": "Gear",
    "description": "One way or another, stuff", 
    "details": "Details.",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/gear",
    "subheadings": [
      "list-of-gear",
      "firearms",
      "superweapons",
    ],
  },
  "list-of-gear": {
    "title": "< List of Stuff >",
    "description": "Gear", 
    "details": "A list of stuff",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/gear/list-of-stuff",
    "subheadings": [
      "",
    ],
  },
  "firearms": {
    "title": "Firearms",
    "description": "When push comes to shove", 
    "details": "Details.",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/gear/firearms",
    "subheadings": [
      "ammunition",
      "standard-firearms",
      "covert-firearms",
      "powered-firearms",
    ],
  },
  "ammunition": {
    "title": "Ammunition",
    "description": "Well, it's bullets", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/gear/firearms/ammunition",
    "subheadings": []
  },
  "standard-firearms": {
    "title": "Standard Firearms",
    "description": "Destructive potential", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/gear/firearms/standard-firearms",
    "subheadings": []
  },
  "covert-firearms": {
    "title": "Covert Firearms",
    "description": "Spy gear", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/gear/firearms/covert-firearms",
    "subheadings": []
  },
  "powered-firearms": {
    "title": "Powered Firearms",
    "description": "Plugged into the wall", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/gear/firearms/powered-firearms",
    "subheadings": []
  },
  "superweapons": {
    "title": "Superweapons",
    "description": "Spacecraft systems", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/gear/superweapons",
    "subheadings": []
  },
  "infrastructure": {
    "title": "Infrastructure",
    "description": "Sustaining post-scarcity", 
    "details": "Description.",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/infrastructure",
    "subheadings": [
      "list-of-infrastructure",
      "asteroid-mining",
      "black-hole-mining",
      "defense",
      "railgun-express",
      "slip",
      "transportation",
    ],
  },
  "list-of-infrastructure": {
    "title": "< List of Stuff >",
    "description": "Infrastructure", 
    "details": "A list of stuff",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/infrastructure/list-of-stuff",
    "subheadings": [
      "",
    ],
  },
  "asteroid-mining": {
    "title": "Asteroid Mining",
    "description": "", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/asteroid-mining",
    "subheadings": []
  },
  "black-hole-mining": {
    "title": "Black Hole Mining",
    "description": "Exploiting insanity", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/black-hole-mining",
    "subheadings": []
  },
  "defense": {
    "title": "Defense",
    "description": "For the homeworld", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/defense",
    "subheadings": []
  },
  "railgun-express": {
    "title": "Railgun Express",
    "description": "Moving things around", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/railgun-express",
    "subheadings": []
  },
  "slip": {
    "title": "SLIP",
    "description": "Superluminal travel", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/slip",
    "subheadings": []
  },
  "transportation": {
    "title": "Transportation",
    "description": "From place to place", 
    "details": "changeme",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/infrastructure/transportation/",
    "subheadings": [
      "personal-transport",
      "local-commute",
      "distant-travel",
    ],
  },
  "personal-transport": {
    "title": "Personal Transport",
    "description": "Walking distance", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/transportation/personal-transport",
    "subheadings": []
  },
  "local-commute": {
    "title": "Local Commute",
    "description": "In the Neighborhood", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/transportation/local-commute",
    "subheadings": []
  },
  "distant-travel": {
    "title": "Distant Travel",
    "description": "Across the globe", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/transportation/distant-travel",
    "subheadings": []
  },
  "medical-science": {
    "title": "Medical Science",
    "description": "Keeping people alive", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/technology/medical-science",
    "subheadings": [
      "amoria",
      "cybernetic-enhancement",
      "immortality-taboo",
      "kerastoxis",
      "productive-life",
      "prosthetic-soul",
    ],
  },
  "amoria": {
    "title": "Amoria",
    "description": "Love as a science", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/amoria",
    "subheadings": []
  },
  "cybernetic-enhancement": {
    "title": "Cybernetic Enhancement",
    "description": "Not our future", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/cybernetic-enhancement",
    "subheadings": []
  },
  "immortality-taboo": {
    "title": "Immortality Taboo",
    "description": "One Man’s Hands", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/immortality-taboo",
    "subheadings": []
  },
  "kerastoxis": {
    "title": "Kerastoxis",
    "description": "Gravity miracle drug", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/kerastoxis",
    "subheadings": []
  },
  "productive-life": {
    "title": "Productive Life",
    "description": "Quality not quantity", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/productive-life",
    "subheadings": []
  },
  "prosthetic-soul": {
    "title": "Prosthetic Soul",
    "description": "It's not worth it", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/medical-science/prosthetic-soul",
    "subheadings": []
  },

  "society": {
    "title": "Society",
    "details": "-",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "culture",
      "doctrine",
      //"economy",
      "organizations",
      "individuals",
    ]
  },
  "society-page": {
    "title": "Society",
    "description": "-", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society",
    "subheadings": []
  },
  "culture": {
    "title": "Culture",
    "description": "How people do the thing", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/culture",
    "subheadings": [
      "academia",
      "art",
      "beliefs",
      "customs",
      "entertainment",
      "foods",
      "symbols",
    ],
  },
  "art": {
    "title": "Art",
    "description": "What is beauty or whatever", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/art",
    "subheadings": []
  },
  "beliefs": {
    "title": "Beliefs",
    "description": "Religions in space", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/beliefs",
    "subheadings": []
  },
  "customs": {
    "title": "Customs",
    "description": "Reason will not prevail", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/culture/customs",
    "subheadings": [
      "family-structures",
      "rocket-ritual",
      "social-classes",
      "zaibatsu-tattoos",
    ],
  },
  "family-structures": {
    "title": "Family Structures",
    "description": "The postmodern family", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/customs/family-structures",
    "subheadings": []
  },
  "rocket-ritual": {
    "title": "Rocket Ritual",
    "description": "Passing the machine spirit", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/customs/rocket-ritual",
    "subheadings": []
  },
  "social-classes": {
    "title": "Social Classes",
    "description": "Division of society", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/customs/social-classes",
    "subheadings": []
  },
  "zaibatsu-tattoos": {
    "title": "Zaibatsu Tattoos",
    "description": "Corporate Tattoos", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/customs/zaibatsu-tattoos",
    "subheadings": []
  },
  "academia": {
    "title": "Academia",
    "description": "Research, Education, Scholarship", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/academia",
    "subheadings": []
  },
  "foods": {
    "title": "Foods",
    "description": "Rust and potatoes, so good", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/foods",
    "subheadings": []
  },
  "entertainment": {
    "title": "Entertainment",
    "description": "Hold my beer", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/culture/entertainment",
    "subheadings": [
      "video-games",
    ],
  },
  "video-games": {
    "title": "Video Games",
    "description": "Challenge everything", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/entertainment/video-games",
    "subheadings": []
  },
  "symbols": {
    "title": "Symbols",
    "description": "Communication and language", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/culture/symbols",
    "subheadings": [
      "languages",
      "subconscious-symbols",
      "universal-translators",
    ],
  },
  "languages": {
    "title": "Languages",
    "description": "How people talk", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/symbols/languages",
    "subheadings": []
  },
  "subconscious-symbols": {
    "title": "Subconscious Symbols",
    "description": "Subtle communications", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/symbols/subconscious-symbols",
    "subheadings": []
  },
  "universal-translators": {
    "title": "Universal Translators",
    "description": "Understand anyone", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/culture/symbols/universal-translators",
    "subheadings": []
  },

  "doctrine": {
    "title": "Doctrine",
    "description": "Rules, procedures, tactics", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/doctrine",
    "subheadings": [
      "code-liability",
      "colony-collapse",
      "dead-hand",
      "international-politics",
      "logistics-denial",
      "martial-arts",
      "reasonable-aggression",
      "role-of-the-army",
      "shifter-society",
      "social-classes",
      "united-against"
    ],
  },
  "code-liability": {
    "title": "Code Liability",
    "description": "Cybertechnology laws", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/code-liability",
    "subheadings": []
  },
  "colony-collapse": {
    "title": "Colony Collapse",
    "description": "Varen-Krut Desynchrony", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/colony-collapse",
    "subheadings": []
  },
  "dead-hand": {
    "title": "Dead Hand",
    "description": "If society ever collapses", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/dead-hand",
    "subheadings": []
  },
  "international-politics": {
    "title": "International Politics",
    "description": "All pretend", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/international-politics",
    "subheadings": []
  },
  "logistics-denial": {
    "title": "Logistics Denial",
    "description": "Calculated Losses", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/logistics-denial",
    "subheadings": []
  },
  "martial-arts": {
    "title": "Martial Arts",
    "description": "Made for Space", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/martial-arts",
    "subheadings": []
  },
  "reasonable-aggression": {
    "title": "Reasonable Aggression",
    "description": "Intimidation Tactics", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/reasonable-aggression",
    "subheadings": []
  },
  "role-of-the-army": {
    "title": "Role of the Army",
    "description": "Mostly infrastructure", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/role-of-the-army",
    "subheadings": []
  },
  "shifter-society": {
    "title": "Shifter Society",
    "description": "Randomized Daily Life", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/shifter-society",
    "subheadings": []
  },
  "social-classes": {
    "title": "Social Classes",
    "description": "Stop oppressing yourself", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/social-classes",
    "subheadings": []
  },
  "united-against": {
    "title": "United Against",
    "description": "People need an enemy", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/doctrine/united-against",
    "subheadings": []
  },


  "organizations": {
    "title": "Organizations",
    "description": "Movers and shakers", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/organizations",
    "subheadings": [
      "nations",
      "factions",
      "rogues",
    ],
  },
  "nations": {
    "title": "Nations",
    "description": "self-aware government", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/organizations/nations",
    "subheadings": [
      "pravo-powers",
      "confederacy",
      "federation",
      "directorate",
      "empire",
    ],
  },
  "pravo-powers": {
    "title": "The Pravo Powers",
    "description": "The goliaths, the almighty, four", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/nations/pravo-powers",
    "subheadings": []
  },
  "confederacy": {
    "title": "Holy and Divine Confederacy",
    "description": "Confederacy", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/nations/confederacy",
    "subheadings": []
  },
  "federation": {
    "title": "Unified Federation of States",
    "description": "Federation", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/nations/federation",
    "subheadings": []
  },
  "directorate": {
    "title": "Executive Directorate of the Conglomerate",
    "description": "Directorate", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/nations/directorate",
    "subheadings": []
  },
  "empire": {
    "title": "Second Empire of Rus",
    "description": "Empire", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/nations/empire",
    "subheadings": []
  },

  "factions": {
    "title": "Factions",
    "description": "These are the players", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/organizations/factions",
    "subheadings": [
      "vision-muguang",
    ],
  },
  "vision-muguang": {
    "title": "Vision/Muguang",
    "description": "", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/factions/vision-muguang",
    "subheadings": []
  },

  "rogues": {
    "title": "Rogues",
    "description": "besides the system", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/organizations/rogues",
    "subheadings": [
      "league",
    ],
  },
  "league": {
    "title": "The League",
    "description": "United under a false flag", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/organizations/rogues/league",
    "subheadings": []
  },



  "individuals": {
    "title": "Individuals",
    "description": "Some notable, Some not so much", 
    "details": "-",
    "actions": "expand",
    "icon": "═",
    "link": "/codex/society/individuals",
    "subheadings": [
      "good-emperor-king",
    ],
  },
  "good-emperor-king": {
    "title": "The Good Emperor-King",
    "description": "Jing Fei", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/society/individuals/good-emperor-king",
    "subheadings": []
  },
}

// The HTML generated from the above object is stored here.
var generatedNavButtons = {};
var generatedNavPages = {};

var activeSection = 'hub';

var pageType = '';

$(document).ready(function(){

  pageType = $('body').attr('class');
  generateNav();
  navClick('hub');

  $('.navTitleSection').click(function() {
    window.location.href = '/';
  });

  if ($("#processURL").length){
    var urlString = $("#processURL").html();
    var pageColor = $("#processURL").css('color');
    $("#processURL").html(processURL(urlString, pageColor, pageType));
  }

  // Temporary fix for spinning dorito logo.
  loadMenuBarLogo();

  // Apply page highlight to elements with appropriate class.
  pageHighlight();

  // Load a sitemap into any element with a sitemap class.
  sitemapInit('sitemap');
});

function loadMenuBarLogo() {
  var $menuBarLogo = $('.menuBarLogo');
  $menuBarLogo.css('opacity', '0');
  $menuBarLogo.css('animation-play-state', 'running');
  setTimeout(function() {
    $menuBarLogo.css('transition', '0.3s ease-in-out');
  }, 5);
  setTimeout(function() {
    resetSpin('menuBarLogo');
    $menuBarLogo.css('opacity', '1');
  }, 1000);
}

// Scrolls to target element within the body container.
function scrollToElement(targetEl) {
  /* $('body').animate({ 
    scrollTop: $('#' + targetEl).offset().top - $('body').offset().top + $('body').scrollTop()
  }); */
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
      if (headings[urlArray[i]]) {
        if (headings[urlArray[i]].actions != 'direct') {
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
  if (navIsOpen) {
    closeNav();
    navIsOpen = false;
    $('body').removeClass('modal-open');
  }
  else {
    openNav();
    if (!openedBefore) {
      // firstNavOpen();
      openedBefore = true;
    }
    navIsOpen = true;
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
  $('.nav_sectionDescription').html(navSections[target]['description']);

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
    $('.navScrollable').html(generatedNavButtons[target]);
    setTimeout( function() { 
      $('.navTerminal').removeClass('displayMe'); 
    }, 200);
  }

  $('.nav_color_bg').css('background-color', navSections[target]['color']);
  $('.nav_color_bg_home').attr('class', 'navTitleSection nav_color_bg_home nav-color_' + target);
  $('.nav_color').css('color', navSections[target]['color']);
  activeSection = target;

  $('.navTabImage').removeClass('navHoveredImage');
  $('.nav_' + target).children().addClass('navHoveredImage');
}

// Overhead function for generating the entire contents of the nav.
function generateNav() {
  generatedNavButtons['hub'] = findNavItems('hub');
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
    compileObjectOverhead('society');
    currentHeadingObject += generatedNavButtons['geography'];
    currentHeadingObject += generatedNavButtons['technology'];
    currentHeadingObject += generatedNavButtons['society'];
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
  // console.log(currentHeading);
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

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color' id=\"navHeadingItemDown_" + currentHeading + "\">";
    currentHeadingObject += "+";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    generatedNavButtons[currentHeading] = currentHeadingObject;
  }
  else if (headings[currentHeading]['actions'] == 'direct') {
    var currentHeadingObject = '';

    currentHeadingObject += "<a class='divLink' href='" + headings[currentHeading]['link'] + "'><div class='navHeadingItem' id='nav_" + currentHeading + "' >";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color'>";
    currentHeadingObject += "⤷";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div></a>";

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
  // console.log('opening')
  var navObject = generatedNavPages[currentHeading];
  if (!$("#child_" + currentHeading).length) {
    $('.appendNavElements').append( navObject );
    
    setTimeout( function() {
      $('#child_' + currentHeading).css('left', '0');
      $('.nav_color').css('color', navSections[activeSection]['color']);
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
  // console.log('navigating to', headings[currentHeading]['link']);
  window.location.href = headings[currentHeading]['link'];
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

var sitemap = '';
function sitemapInit(el) {
  sitemap = sitemap + compileSitemap('hub', 0);
  sitemap = sitemap + compileSitemap('codex', 0);
  $('.' + el).html(sitemap);
}

function compileSitemap(currentHeading, currentLeft = 0) {

  var calcLeft = currentLeft * 20;

  // console.log(headings[currentHeading]['actions'])
  if (headings[currentHeading]['actions'] == 'expand') {

    var currentHeadingObject = '';

    currentHeadingObject += "<div class='navHeadingItem' id='" + currentHeading + "' onclick=\"expandSitemapObject('" + currentHeading + "')\" style='margin-left: " + calcLeft + "px'>";

    currentHeadingObject += "<div style='display: flex;'>";

    currentHeadingObject += "<div class='navHeadingItemIcon'>";
    currentHeadingObject += headings[currentHeading]['icon'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemTitle'>";
    currentHeadingObject += headings[currentHeading]['title'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDescription'>";
    currentHeadingObject += headings[currentHeading]['description'];
    currentHeadingObject += "</div>";

    currentHeadingObject += "<div class='navHeadingItemDown nav_color' id=\"navHeadingItemDown_" + currentHeading + "\">";
    currentHeadingObject += "+";
    currentHeadingObject += "</div>";

    currentHeadingObject += "</div>";

    var compiledSubheadings = "<div class='navHeadingContainer' id='expand_" + currentHeading + "'>";
    for (var i = 0; i < headings[currentHeading]['subheadings'].length; i++) {
      compiledSubheadings += compileSitemap(headings[currentHeading]['subheadings'][i], (currentLeft + 1));
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
  var quote = headings[id].description;

  var link = headings[id].link;

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