//import data from "./data.js";

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

const dataTest = [
    clubGrenadeData,
    clubGrenadeData
];

function generateEntryAnchorIcons(entry)
{
    const main = document.querySelector("div .anchoricons");
    const template = document.getElementById("templateanchoricon");
    const clone = template.cloneNode(true);
    clone.removeAttribute("id");
    clone.hidden = false;
    main.appendChild(clone);

    clone.querySelector(".anchorlink").setAttribute("href", "#" + entry.id);
    clone.querySelector(".anchorIcon").setAttribute("src", entry.icon);
    clone.querySelector(".anchorIcon").setAttribute("alt", entry.name + " Icon");
}

function generateEntryBlock(entry, index)
{
    const main = document.querySelector("div .entries");
    const template = document.getElementById("templateentry");
    const clone = template.cloneNode(true);
    clone.removeAttribute("id");
    clone.hidden = false;
    main.appendChild(clone);

    // title
    clone.querySelector(".offsetanchor").setAttribute("id", entry.id);
    clone.querySelector(".titleleft").setAttribute("class", index % 2 == 0 ? "titleleft" : "titleright");
    clone.querySelector(".entryicon").setAttribute("src", entry.icon);
    clone.querySelector(".entrytitle").textContent = entry.name;
    

    // descriptions
    const descriptionTemplate = clone.querySelector(".entrydescription");
    for (let i = 0; i < entry.descriptions.length; i++) 
    {
        const descriptionClone = descriptionTemplate.cloneNode(true);
        descriptionClone.textContent = entry.descriptions[i];
        descriptionTemplate.parentElement.appendChild(descriptionClone);
    }
    descriptionTemplate.hidden = true;

    // links
    const linkTemplate = clone.querySelector(".entrylink");
    for (let i = 0; i < entry.links.length; i++) 
    {
        const linkClone = linkTemplate.cloneNode(true);

        switch (entry.links[i].linktype)
        {
            case "game":
                linkClone.querySelector(".entrylinkprefix").textContent = "Playable game can be accessed at:";
                break;
            case "webpage":
                linkClone.querySelector(".entrylinkprefix").textContent = "Project website can be accessed at:";
                break;
            case "repo":
                linkClone.querySelector(".entrylinkprefix").textContent = "Project repo can be accessed at:";
                break;
            default:
                linkClone.querySelector(".entrylinkprefix").textContent = "Invalid ";
                break;
        }
        linkClone.querySelector(".entrylinksuffix").setAttribute("href", entry.links[i].link);
        linkClone.querySelector(".entrylinksuffix").textContent = entry.links[i].link;
        linkTemplate.parentElement.appendChild(linkClone);
    }
    linkTemplate.hidden = true;

    // accomplishments
    const accomplishmentTemplate = clone.querySelector(".entryaccomplishment");
    for (let i = 0; i < entry.accomplishments.length; i++) 
    {
        const accomplishmentClone = accomplishmentTemplate.cloneNode(true);
        accomplishmentClone.textContent = entry.accomplishments[i];
        accomplishmentTemplate.parentElement.appendChild(accomplishmentClone);
    }
    accomplishmentTemplate.hidden = true;

    // videos
    const videoTemplate = clone.querySelector(".videowrapper");
    for (let i = 0; i < entry.videos.length; i++) 
    {
        const videoClone = videoTemplate.cloneNode(true);
        videoClone.querySelector("iframe").setAttribute("src", entry.videos[i]);
        videoTemplate.parentElement.appendChild(videoClone);
    }
    videoTemplate.hidden = true;

    // screenshots
    const screenshotTemplate = clone.querySelector(".entryscreenshot");
    for (let i = 0; i < entry.screenshots.length; i++) 
    {
        const screenshotClone = screenshotTemplate.cloneNode(true);
        screenshotClone.setAttribute("src", entry.screenshots[i]);
        screenshotClone.setAttribute("alt", entry.name + " Screenshot " + (i + 1));
        screenshotTemplate.parentElement.appendChild(screenshotClone);
    }
    screenshotTemplate.hidden = true;

    // aligment
    if (index % 2 == 1)
    {
        clone.querySelector(".leftaligned").setAttribute("class", "rightaligned");
        clone.querySelector('.text').style.order = 2;
        clone.querySelector('.media').style.order = 1;
    }
}

import data from "./data.js";

entryList = data;
for (let i = 0; i < entryList.length; i++) 
{
    entry = entryList[i];
    generateEntryAnchorIcons(entry);
    generateEntryBlock(entry, i);
}