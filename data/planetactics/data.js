export let data = 
{
    id: "planetactics",
    name: "Plane Tactics",
    icon: "/data/planetactics/icon.png",
    platforms: [
        "windows"
    ],
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
        "/data/planetactics/screenshot1.png",
        "/data/planetactics/screenshot2.png"
    ]
};
