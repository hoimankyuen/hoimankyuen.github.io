export let data = 
{
    id: "smoc",
    name: "SMoC: Self-Modifying Claymore",
    icon: "/data/smoc/icon.png",
    platforms: [
        "windows",
        "webgl"
    ],
    descriptions: [
        "SMoC: Self-Modifying Claymore is a Zachtronics-esque programming puzzle game where you build circuits for each level. The player was required to connect different components, which can modify power values, and provide enough power to each of the modules. The power requirements will changed and keep increase when the game progress. The game was hugely inspired by Zachtronics games on their open-ended approach engineering games.",
        "The game is a game jam project developed in around 14 days using Unity mostly by myself, with a separate member handling music and sound effects."
    ],
    links: [
        {
            linktype: "game",
            link: "https://hoimankyuen.itch.io/smoc"
        }
    ],
    accomplishments: [
        "Designed and implemented a system to simulate power propagation according to any layout the player created,",
        "Created a simulation system that allows different time scales and step-by-step mode.",
        "Implemented a simple and intuitive drag and drop system for layout creation.",
        "Implemented a reuable audio system that simplifies audio handling."
    ],
    videos: [
    ],
    screenshots: [
        "/data/smoc/screenshot1.png",
        "/data/smoc/screenshot2.png",
        "/data/smoc/screenshot3.png"
    ]
    ,
    background: "/data/smoc/screenshot2.png"
};