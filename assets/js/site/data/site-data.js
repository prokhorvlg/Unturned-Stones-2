// List of phrases to cycle through for header spin texts.
window.phrases = ["reinitializing model", 
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

// List of codelines for LEFT quoteshuffle component in the home page banner.
window.codelines = ["NUT BOOT 2999.ABP&",
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
  "USER: >krstno",
  "ENTER PASSWORD: >***************************************************",
  "RE-ENTER PASSWORD: >***************************************************",
  "ENTER BIO1: >... DONE",
  "ACCEPTED",
  "LOADING ... DONE",
  "&nbsp;",
  "*** WELCOME TO NUT 3.23 ***",
  "LOADING ORGANIZATIONAL_MATRIX...",
  "WARNING: TERMINAL UNSTABLE",
  "LOADING ... DONE",
  "LOADING ... DONE",
  "&nbsp;",
  "\\\\> RUN MODELADD -anSo9 $currUser $accessmode2",
  "//MODELADD VER 5.10",
  "//USER PROFILE: user2344hh2345bn63kb25l29110313n2bert329gy92",
  "//LOADING PREDEFINED SETTINGS",
  "bootsys/bio/new/biological45.settings",
  "bootsys/bio/.../new/errorcheck.settings",
  "bootsys/bio/.../new/user.settings",
  "bootsys/bio/.../new/bootorder.settings",
  "bootsys/bio/.../new/interfacex12.settings",
  "bootsys/bio/.../new/vital.settings",
  "//WARNING: vital.settings corrupted",
  "bootsys/bio/.../new/comp.settings",
  "bootsys/bio/.../new/prefs.settings",
  "&nbsp;",
  "//Generating user model",
  "//loading pipeline",
  "//running pipeline",
  "U_MOD.EXE ran with exit code 0",
  "ALGO99234.EXE ran with exit code 0",
  "",
  "&nbsp;",
  "//RESTARTING SYSTEM",
  "&nbsp;",
];

// Stores data regarding the nav tabs in the sidebar.
window.navSections = { 
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
window.headings = {
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
      "history",
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
    "title": "< Technology: Introduction >",
    "description": "", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/",
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
      "everyware",
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
    "link": "/codex/technology/computer-science/list-of-stuff/",
    "subheadings": [
      "",
    ],
  },
  "computers": {
    "title": "Computers",
    "description": "Different, yet familiar", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/computers/",
    "subheadings": []
  },
  "everyware": {
    "title": "Everyware",
    "description": "True technological ubiquity", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/everyware/",
    "subheadings": []
  },
  "gadgets": {
    "title": "Gadgets",
    "description": "Tools of the trade", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/gadgets/",
    "subheadings": []
  },
  "malware": {
    "title": "Malware",
    "description": "Getting things done", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/computer-science/malware/",
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
      "slipstream",
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
  "slipstream": {
    "title": "SLIPSTREAM",
    "description": "Superluminal travel", 
    "actions": "direct",
    "icon": ">",
    "link": "/codex/technology/infrastructure/slipstream",
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


  "history": {
    "title": "History",
    "details": "...",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "events",
    ]
  },
  "events": {
    "title": "Events",
    "details": "...",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "cat-pre-reset",
      "cat-reset",
      "cat-post-reset",
    ]
  },
  "cat-pre-reset": {
    "title": "Pre-Reset Era",
    "details": "...",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "",
    ]
  },
  "cat-reset": {
    "title": "Reset Era",
    "details": "...",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "",
    ]
  },
  "cat-post-reset": {
    "title": "Post-Reset Era",
    "details": "...",
    "description": "", 
    "actions": "expand",
    "icon": "═",
    "link": "",
    "subheadings": [
      "",
    ]
  },

}