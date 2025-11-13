function highlightGroup(group)
{
    let groupId = group == null ? "groupall" : "group" + group;
    document.getElementById(groupId).setAttribute("class", "active");
}

function selectGroup(group)
{
    switch (group)
    {
        case "jam":
            return data.allJamData;
        case "job":
            return data.allJobData;
        case "school":
            return data.allSchoolData;
        case "prototype":
            return data.allPrototypeData;
        default:
            return data.allData;
    }
}

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
                linkClone.querySelector(".entrylinkprefix").textContent = "Website can be accessed at:";
                break;
            case "repo":
                linkClone.querySelector(".entrylinkprefix").textContent = "Project repository can be accessed at:";
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
        videoClone.querySelector(".entryvideo").setAttribute("src", entry.videos[i]);
        videoClone.querySelector(".videoblocker").addEventListener("click", function() {
            showOverlayVideo(entry.videos[i]);
        });
        videoTemplate.parentElement.appendChild(videoClone);
    }
    videoTemplate.hidden = true;

    // screenshots
    const screenshotTemplate = clone.querySelector(".screenshotwrapper");
    for (let i = 0; i < entry.screenshots.length; i++) 
    {
        const screenshotClone = screenshotTemplate.cloneNode(true);
        screenshotClone.querySelector(".entryscreenshot").setAttribute("src", entry.screenshots[i]);
        screenshotClone.querySelector(".entryscreenshot").setAttribute("alt", entry.name + " Screenshot " + (i + 1));
        screenshotClone.querySelector(".entryscreenshot").addEventListener("click", function() {
            showOverlayScreenshot(entry.screenshots[i]);
        });
        screenshotTemplate.parentElement.appendChild(screenshotClone);
    }
    screenshotTemplate.hidden = true;

    // aligment
    if (index % 2 == 1)
    {
        clone.querySelector(".title").setAttribute("class", "titleinversed");
        clone.querySelector('.textcolumn').setAttribute("class", "textcolumninversed");
        clone.querySelector('.mediacolumn').setAttribute("class", "mediacolumninversed");
    }
}

function generateEntries(entryList)
{
    // generate entries
    for (let i = 0; i < entryList.length; i++) 
    {
        let entry = entryList[i];
        generateEntryAnchorIcons(entry);
        generateEntryBlock(entry, i);
    }

    // add listeners
    document.querySelector(".overlay").addEventListener("click", hideOverlay);
}

import * as data from "/js/data.js";

export function generateEntriesFromURL(search)
{
    let param = new URLSearchParams(search);

    /*
    let page = 0;
    let entriesPerPage = 100;
    if (param.has("page"))
    {
        page = parseInt(param.get("page"));
        if (isNaN(page))
        {
            page = 0;
        }
    }
    targetData = targetData.slice(page * entriesPerPage, (page + 1) * entriesPerPage);
    */
    highlightGroup(param.get("type"));
    let targetData = selectGroup(param.get("type"));
    generateEntries(targetData);
}

export function showOverlayVideo(videoPath)
{
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlayvideo").style.display = "block";
    document.querySelector(".overlayvideo").setAttribute("src", videoPath);
    document.querySelector(".overlayscreenshot").style.display = "none";
    document.querySelector(".overlayscreenshot").setAttribute("src", "");
}

export function showOverlayScreenshot(screenshotPath)
{
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlayvideo").style.display = "none";
    document.querySelector(".overlayvideo").setAttribute("src", "");
    document.querySelector(".overlayscreenshot").style.display = "block";
    document.querySelector(".overlayscreenshot").setAttribute("src", screenshotPath);
}

export function hideOverlay()
{
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".overlayvideo").style.display = "none";
    document.querySelector(".overlayvideo").setAttribute("src", "");
    document.querySelector(".overlayscreenshot").style.display = "none";
    document.querySelector(".overlayscreenshot").setAttribute("src", "");
}