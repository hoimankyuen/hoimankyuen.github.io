//import data from "./data.js";

const clubGrenadeData = {
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

const data = [
    clubGrenadeData
];

function generateEntryBlock(entry, index)
{
    const main = document.querySelector("div .entries");
    
    main.append(document.createComment(entry.name));

    // inner div
    const divMain = document.createElement("div");
    main.append(divMain);

    // anchor
    const aAnchor = document.createElement("a");
    aAnchor.setAttribute("class", "offsetanchor");
    aAnchor.setAttribute("id", entry.id);
    divMain.append(aAnchor);

    // title block
    const divTitle = document.createElement("div");
    divTitle.setAttribute("class", index % 2 == 0 ? "titleleft" : "titleright");
    divMain.append(divTitle);

    const imgTitleImage = document.createElement("img");
    imgTitleImage.setAttribute("src", entry.icon);
    divTitle.append(imgTitleImage);

    const h3TitleText = document.createElement("h3");
    h3TitleText.innerHTML = entry.name;
    divTitle.append(h3TitleText);

    // column layout
    const divColumnLayout = document.createElement("div");
    divColumnLayout.setAttribute("class", "columnlayout");
    divMain.append(divColumnLayout);

    // text block
    const divText = document.createElement("div");
    divText.setAttribute("class", "text");
    divColumnLayout.append(divText);

    for (let i = 0; i < entry.descriptions.length; i++) 
    {
        const p = document.createElement("p");
        p.innerHTML = entry.descriptions[i];
        divText.append(p);
    }

    for (let i = 0; i < entry.links.length; i++) 
    {
        const p = document.createElement("p");
        switch (entry.links[i].linktype)
        {
            case "game":
                p.innerHTML = "Playable game can be accessed ";
                break;
            case "webpage":
                p.innerHTML = "Project website can be accessed ";
                break;
            case "repo":
                p.innerHTML = "Project repo can be accessed ";
                break;
            default:
                break;
        }
        divText.append(p);

        const a = document.createElement("a");
        a.setAttribute("href", entry.links[i].link);
        a.innerHTML = "here";
        p.append(a);
    }
    
    if (entry.accomplishments.length > 0)
    {
        const h4Accomp = document.createElement("h4");
        h4Accomp.innerHTML = "Accomplishments";
        divText.append(h4Accomp);

        const ul = document.createElement("ul");
        divText.append(ul);
        for (let i = 0; i < entry.accomplishments.length; i++)
        {
            const li = document.createElement("li");
            li.innerHTML = entry.accomplishments[i];
            ul.append(li);
        }
    }

    const divTop = document.createElement("div");
    divText.append(divTop);

    const aTop = document.createElement("a");
    aTop.setAttribute("href", "#top");
    aTop.innerHTML = "&#x25B2; Top";
    divTop.append(aTop);

    // media block
    const divMedia = document.createElement("div");
    divMedia.setAttribute("class", "media");
    divColumnLayout.append(divMedia);

    for (let i = 0; i < entry.videos.length; i++)
    {
        const div = document.createElement("div");
        div.setAttribute("class", "videowrapper");
        divMedia.append(div);

        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", entry.videos[i]);
        div.append(iframe);
    }

    for (let i = 0; i < entry.screenshots.length; i++)
    {
        const img = document.createElement("img");
        img.setAttribute("src", entry.screenshots[i]);
        img.setAttribute("alt", entry.name + " Screenshot " + (i + 1));
        divMedia.append(img);
    }

    // spacer
    const br = document.createElement("br");
    divMain.append(br);
    divMain.append(br);
}

function generateEntryAnchorIcons(entry)
{
    const main = document.querySelector("div .anchoricons");

    const a = document.createElement("a");
    a.setAttribute("href", "#" + entry.id);
    main.append(a);

    const img = document.createElement("img");
    img.setAttribute("src", entry.icon);
    img.setAttribute("alt", entry.name + " Icon");
    main.append(img);
}

for (let i = 0; i < data.length; i++) 
{
    generateEntryAnchorIcons(data[i]);
    generateEntryBlock(data[i], i);
}