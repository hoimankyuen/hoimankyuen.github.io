// structure: 
//   id,
//   name, 
//   icon, 
//   descriptions[],
//   links[],
//     linkType(game, webpage, repo),
//     link,
//   accomplishments[],
//   videos[],
//   screenshots[]

const clubGrenadeData = 
{
    id: "clubgrenade",
    name: "Club Grenade",
    icon: "images/clubgrenade/icon.png",
    descriptions: [
        "Club Grenade is a fast-paced multiplayer lite action game about defeating enemies with grenades and throwables only. The players must cooperate and fight through waves of enemies through the level, or be defeated by the enemy when within chaotic friendly fire. The game was inspired by Overcooked and its chaotic yet fun gameplay.",
        "The game was a school project developed using Unity by a small team of 3 people that I led. The project was the winner of the Best Project Award and the Dean's Fund Award among all other projects from the engineering department."
    ],
    links: [
        {
            linktype: "webpage",
            link: "https://innoacademy.engg.hku.hk/club-grenade/"
        }
    ],
    accomplishments: [
        "Directed and led the whole project, guided and mentored members with zero experence throughout the whole development process.",
        "Created various shader including cel-shading toon shader and force field shader.",
        "Designed and createe most 2D and 3D assets using Photoshop and Blender.",
        "Designed structure and events of the entire level.",
        "Implemented input mode auto detection system to faciliate quick multiplayer joining."
    ],
    videos: [
        "https://www.youtube.com/embed/sYWnUHE6DBE"
    ],
    screenshots: [
        "images/clubgrenade/screenshot1.jpg",
        "images/clubgrenade/screenshot2.jpg"
    ]
};

const dicingHerosData = 
{
    id: "dicingheros",
    name: "Dicing Heros",
    icon: "images/dicingheros/icon.png",
    descriptions: [
        "Dicing Heros is a turn-based strategy game about fantasy battles, with the twist that both dice and pieces exist in the same physical space. It is inspired by how the dice thrown in a board game may accidentally interact with other pieces on the board. The game puts the player in command of a team of different units with different stats and abilities, along with a few dice. Dice can be used to further enhance unit stats, and is key to defeat the enemy team.",
        "This game is developed using Unity, and is an experiment to explore the concept of a gridless chess-like strategy game. Physics introduce cases where pieces may be pushed off the grid by thrown dice, adding another layer of variables and complexity to the game."
    ],
    links: [
        {
            linktype: "repo",
            link: "https://github.com/hoimankyuen/DicingHeros"
        }
    ],
    accomplishments: [
        "Created a gameplay system that allows grid-base strategy game to works in an gridless manner.",
        "Created an enemy AI that can maximize battle effectiveness given the current dice combination and board situation.",
        "Utilized async computation and performed optimization to increase AI performance and prevent lag spikes.",
        "Implemented the AI to use a similar input system as the player, and decoupled both systems to increase readability and maintainability.",
        "Implemented a centralized finite state machine that drives the whole game."
    ],
    videos: [
        "https://www.youtube.com/embed/BROf6Yzeqrk"
    ],
    screenshots: [
        "images/dicingheros/screenshot1.png",
        "images/dicingheros/screenshot2.png"
    ]
};

const planeTacticsData = 
{
    id: "planetactics",
    name: "Plane Tactics",
    icon: "images/planetactics/icon.png",
    descriptions: [
        "Plane Tactics is an experimental turn-based game about aircraft battles. The game puts the player in command of a plane squad, of which contains various types of aircrafts, to fight against enemy aircrafts. Aircraft movement is highly dependent of the previous movement, creating a dogfight feel to the game.",
        "This game is developed using Unity and is an experiment to explore the concept of gridless chess-like tatics games, and the plane theme add a further concept of forced movement to add more complexity and depth."
    ],
    links: [
        {
            linktype: "repo",
            link: "https://github.com/hoimankyuen/PlaneTactics"
        }
    ],
    accomplishments: [
        "Designed the whole gridless gameplay and the continuous movement system.",
        "Created a shader to procedually draw the triangular mock grid with various customizing options.",
        "Created system for procedually generate mesh that can accurate represent the movement area, move path, attack range and contrails.",
        "Created UI component for accruately draw circular buttons with uniform gaps.",
        "Created minimap that shows all current planes and camera view."
    ],
    videos: [
        "https://www.youtube.com/embed/EWCiGYmCKn8"
    ],
    screenshots: [
        "images/planetactics/screenshot1.png",
        "images/planetactics/screenshot2.png"
    ]
};

const accelerandoData = 
{
    id: "accelerando",
    name: "Accelerando",
    icon: "images/accelerando/icon.png",
    descriptions: [
        "Accelerando is a mobile rhythm game designed to be played on a touch screen. It challenges the precision of the player to successfully hit all notes in the correct timing. The game borrows traditional rhythm game elements such as notes and timing lines, with the feel of flying through a space tunnel when playing. The flying effect is achieved by twisting the note path and turning the screen in response to the player input.",
        "This game was a school project developed using Unity. It was inspired by a number of rhythm games I played during development such as Reflec Beat and Sound Votex. Alongside the game, an auxiliary software was built to support streamlined level creation."
    ],
    links: [
    ],
    accomplishments: [
        "Found and implemented a way to make 2D elements seems like moving in the 3D space.",
        "Designed a system that allows level and music to be imported as special resource files into the game, removing to need to do that in the Unity Editor.",
        "Created an auxiliary software that allows level designer to use a GUI to create level files. The auxiliary software is developed using C# window form.",
        "Researched and implemented ways to deal with audio latency on older device by introducing audio offset.",
        "Personally written two pieces of music for use in the game."
    ],
    videos: [
        "https://www.youtube.com/embed/nXg0vDC6oZo"
    ],
    screenshots: [
        "images/accelerando/screenshot1.png",
        "images/accelerando/screenshot2.png"
    ]
};

const rebuildingData = 
{
    id: "rebuildingthelostdimension",
    name: "Rebuilding the Lost Dimension",
    icon: "images/rebuilding/icon.png",
    descriptions: [
        "Rebuilding the Lost Dimension is a two-player co-op puzzle game. Set in the day before the demolition of the Walled City of Kowloon, both players were tasked to record the last moment of the city before it was destroyed. Both players play in a vastly different way, where one player is walking within the maze-like walled city finding objectives, and the other player looks at the map separately waiting for the first player to report objective locations. Both players must communicate and work together to succeed in the task within the time limit.",
        "The game is a school project developed using Unity. It was hugely inspired by Keep Talking and Nobody Explodes in a way that both players cannot see what the other player can see, and they require information from the other player to complete the task at hand. The game also utilized mobile VR using Google cardboard, which provides the player in the walled city with a true sense of immersion."
    ],
    links: [
    ],
    accomplishments: [
        "Created an online multiplayer co-operate system that allows both game client communicates information using Unity Networking.",
        "Designed story and gameplay elements of the game.",
        "Created the map according to a portion of the real life map of the walled city.",
        "Performed extensive gameplay tests to ensure time limit is tight but fair."
    ],
    videos: [
    ],
    screenshots: [
        "images/rebuilding/screenshot1.png",
        "images/rebuilding/screenshot2.png",
        "images/rebuilding/screenshot3.png"
    ]
};

const shotNViralData = 
{
    id: "shotnviral",
    name: "Shot N' Viral",
    icon: "images/shotnviral/icon.png",
    descriptions: [
        "Shot N' Viral is a VR first-person shooting game in which the player shoots down incoming viruses and defends themself from the onslaught. The game is fast-paced and exciting, challenging the reflex of the player. The game was developed using Unity as an entertainment piece in a technology expo booth and utilized a purpose-built input system to achieve first-person shooting in VR with a mobile device."
    ],
    links: [
    ],
    accomplishments: [
        "Designed the gameplay and was chosen to be one of the game designs to be implemented.",
        "Modelled all assets including the gun and all viruses.",
        "Found an innovative way to achieve FPS gameplay in a mobile VR, using AR technology and tracker on physical controller.",
        "Optimized the game such that it can run soomthly in mid-range mobile device."
    ],
    videos: [
    ],
    screenshots: [
        "images/shotnviral/screenshot1.JPG",
        "images/shotnviral/screenshot2.png"
    ]
};

const chromomatchData = 
{
    id: "chromomatch",
    name: "ChromoMatch",
    icon: "images/chromomatch/icon.png",
    descriptions: [
        "Chromomatch is a VR matching puzzle game in which the player matches all 23 pairs of colour-coded free-floating chromosomes within the time limit, challenging the memory and observation skills of the player. The game was developed using Unity as an entertainment piece in a technology expo booth and was intended to be played using Google Cardboard."
    ],
    links: [
    ],
    accomplishments: [
        "Designed the gameplay and was chosen to be one of the game designs to be implemented.",
        "Created a disolve shader to enhance visual effect when completed matches.",
        "Created randomized puzzles and models in order to provide replayability.",
        "Optimized the game such that it can run soomthly in mid-range mobile device."
    ],
    videos: [
    ],
    screenshots: [
        "images/chromomatch/screenshot1.png",
        "images/chromomatch/screenshot2.png"
    ]
};

const templateData = 
{
    id: "template",
    name: "Name",
    icon: "images/template/icon.png",
    descriptions: [
        "description",
        "description"
    ],
    links: [
        {
            linktype: "repo",
            link: "link"
        }
    ],
    accomplishments: [
        "accomplishments",
        "accomplishments",
        "accomplishments",
        "accomplishments",
        "accomplishments"
    ],
    videos: [
        "video"
    ],
    screenshots: [
        "images/template/screenshot1.png",
        "images/template/screenshot2.png"
    ]
};

export let data = [
    clubGrenadeData,
    dicingHerosData,
    planeTacticsData,
    accelerandoData,
    rebuildingData,
    shotNViralData,
    chromomatchData
];

export let name = "David";