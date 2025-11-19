export let data = 
{
    id: "dicingheros",
    name: "Dicing Heros",
    icon: "/data/dicingheros/icon.png",
    platforms: [
        "windows"
    ],
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
        "/data/dicingheros/screenshot1.png",
        "/data/dicingheros/screenshot2.png"
    ],
    background: "/data/dicingheros/screenshot2.png"
};
