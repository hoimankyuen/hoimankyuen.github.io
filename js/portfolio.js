import * as data from "/js/data.js";

// ======== population ========

export function populatePageFromURL(search)
{
    let param = new URLSearchParams(search);
    let type = param.get("type");
    let entry = param.get("entry");
    populatePage(type);
    if (entry != null)
    {
        scrollToEntry(entry);
    }
}

function populatePage(group)
{
    highlightGroupButton(group);
    generateEntries(selectGroup(group));
    setupScrollCheck();
    scrollToTop();
}

// ======== anchor buttons ========

export function setupGroupButtons()
{
    document.getElementById("group-featured").addEventListener("click", function(e) {
        e.preventDefault();
        populatePage();
    });
    document.getElementById("group-work").addEventListener("click", function(e) {
        e.preventDefault();
        populatePage("work");
    });
    document.getElementById("group-jam").addEventListener("click", function(e) {
        e.preventDefault();
        populatePage("jam");
    });
    document.getElementById("group-other").addEventListener("click", function(e) {
        e.preventDefault();
        populatePage("other");
    });
}

function highlightGroupButton(group)
{
    document.getElementById("group-featured").setAttribute("class", "anchor-button");
    document.getElementById("group-work").setAttribute("class", "anchor-button");
    document.getElementById("group-jam").setAttribute("class", "anchor-button");
    document.getElementById("group-other").setAttribute("class", "anchor-button");

    let groupId = group == null ? "group-featured" : "group-" + group;
    document.getElementById(groupId).setAttribute("class", "anchor-button active");
}

function selectGroup(group)
{
    switch (group)
    {
        case "jam":
            return data.allJamData;
        case "work":
            return data.allWorkData;
        case "other":
            return data.allOtherData;
        default:
            return data.featuredData;
    }
}

// ======== entries ========

function clearExistingEntryAnchorIcons()
{
    const main = document.querySelector("div .anchor-icons");
    for (let i = main.children.length - 1; i >= 1; i--)
    {
        main.removeChild(main.children[i]);
    }
}

function generateEntryAnchorIcon(entry)
{
    const main = document.querySelector("div .anchor-icons");
    const template = document.getElementById("template-anchor-icon");
    const clone = template.cloneNode(true);
    clone.removeAttribute("id");
    clone.hidden = false;
    main.appendChild(clone);

    clone.querySelector(".anchor-icon").setAttribute("src", entry.icon);
    clone.querySelector(".anchor-icon").setAttribute("alt", entry.name + " Icon");
    clone.querySelector(".anchor-icon").addEventListener("click", function(e) {
        e.preventDefault();
        scrollToEntry(entry.id);
    });
}

function clearExistingEntryBlocks()
{
    const main = document.querySelector("div .entries");
    for (let i = main.children.length - 1; i >= 1; i--)
    {
        main.removeChild(main.children[i]);
    }
}

function generateEntryBlock(entry, index)
{
    const main = document.querySelector("div .entries");
    const template = document.getElementById("template-entry");
    const clone = template.cloneNode(true);
    clone.removeAttribute("id");
    clone.hidden = false;
    main.appendChild(clone);

    // title
    clone.querySelector(".offset-anchor").setAttribute("id", entry.id);
    clone.querySelector(".entry-icon").setAttribute("src", entry.icon);
    clone.querySelector(".entry-title").textContent = entry.name;
    
    // descriptions
    const descriptionTemplate = clone.querySelector(".entry-description");
    for (let i = 0; i < entry.descriptions.length; i++) 
    {
        const descriptionClone = descriptionTemplate.cloneNode(true);
        descriptionClone.textContent = entry.descriptions[i];
        descriptionTemplate.parentElement.appendChild(descriptionClone);
    }
    descriptionTemplate.hidden = true;

    // links
    const linkTemplate = clone.querySelector(".entry-link");
    for (let i = 0; i < entry.links.length; i++) 
    {
        const linkClone = linkTemplate.cloneNode(true);

        switch (entry.links[i].linktype)
        {
            case "game":
                linkClone.querySelector(".entry-link-prefix").textContent = "Playable game can be accessed at:";
                break;
            case "webpage":
                linkClone.querySelector(".entry-link-prefix").textContent = "Website can be accessed at:";
                break;
            case "repo":
                linkClone.querySelector(".entry-link-prefix").textContent = "Project repository can be accessed at:";
                break;
            default:
                linkClone.querySelector(".entry-link-prefix").textContent = "Invalid ";
                break;
        }
        linkClone.querySelector(".entry-link-suffix").setAttribute("href", entry.links[i].link);
        linkClone.querySelector(".entry-link-suffix").textContent = entry.links[i].link;
        linkTemplate.parentElement.appendChild(linkClone);
    }
    linkTemplate.hidden = true;

    // accomplishments
    const accomplishmentTemplate = clone.querySelector(".entry-accomplishment");
    for (let i = 0; i < entry.accomplishments.length; i++) 
    {
        const accomplishmentClone = accomplishmentTemplate.cloneNode(true);
        accomplishmentClone.textContent = entry.accomplishments[i];
        accomplishmentTemplate.parentElement.appendChild(accomplishmentClone);
    }
    accomplishmentTemplate.hidden = true;

    // videos
    const videoTemplate = clone.querySelector(".video-wrapper");
    for (let i = 0; i < entry.videos.length; i++) 
    {
        const videoClone = videoTemplate.cloneNode(true);
        videoClone.querySelector(".entry-video").setAttribute("src", entry.videos[i]);
        videoClone.querySelector(".video-blocker").addEventListener("click", function() {
            showOverlayVideo(entry.videos[i]);
        });
        videoTemplate.parentElement.appendChild(videoClone);
    }
    videoTemplate.hidden = true;

    // screenshots
    const screenshotTemplate = clone.querySelector(".screenshot-wrapper");
    for (let i = 0; i < entry.screenshots.length; i++) 
    {
        const screenshotClone = screenshotTemplate.cloneNode(true);
        screenshotClone.querySelector(".entry-screenshot").setAttribute("src", entry.screenshots[i]);
        screenshotClone.querySelector(".entry-screenshot").setAttribute("alt", entry.name + " Screenshot " + (i + 1));
        screenshotClone.querySelector(".entry-screenshot").addEventListener("click", function() {
            showOverlayScreenshot(entry.screenshots[i]);
        });
        screenshotTemplate.parentElement.appendChild(screenshotClone);
    }
    screenshotTemplate.hidden = true;

    // aligment
    if (index % 2 == 1)
    {
        clone.querySelector(".title").setAttribute("class", "title inverse");
        clone.querySelector(".entry-icon").setAttribute("class", "entry-icon inverse");
        clone.querySelector(".entry-title").setAttribute("class", "entry-title inverse");
        clone.querySelector('.text-column').setAttribute("class", "text-column inverse");
        clone.querySelector('.media-column').setAttribute("class", "media-column inverse");
    }
}

function generateEntries(entryList)
{
    // clear existing entries
    clearExistingEntryAnchorIcons();
    clearExistingEntryBlocks();

    // generate entries
    for (let i = 0; i < entryList.length; i++) 
    {
        let entry = entryList[i];
        generateEntryAnchorIcon(entry);
        generateEntryBlock(entry, i);
    }

    // add listeners
    document.querySelector(".overlay").addEventListener("click", hideOverlay);
}

// ======== scrolling ========

function scrollToEntry(entryId)
{
    let content = document.querySelector(".content");
    let targetPosition = getAnchorPositionOffset(document.getElementById(entryId));
    content.scrollTo({ top: targetPosition });
}

function scrollToTop()
{
    let content = document.querySelector(".content");
    let anchors = document.getElementsByClassName("offset-anchor");
    let targetPosition = content.scrollTop;
    if (anchors.length > 1)
    {
        targetPosition = Math.min(targetPosition, getAnchorPositionOffset(anchors[1]));
    }
    content.scrollTo({ top: targetPosition });
}

function setupScrollCheck()
{
    let content = document.querySelector(".content");
    let backgroundImage = document.querySelector(".background-image");
    let anchors = document.getElementsByClassName("offset-anchor");
    let screenshots = ["/images/backgrounds/desk_background.png"];
    for (let i = 1; i < anchors.length; i++)
    {
        screenshots[i] = data.getEntryById(anchors[i].id).background;
    }

    content.addEventListener("scroll", function(e) {
        let selectedImage = "";
        let transition = 0;
        const transitionLength = 120;
        for (let i = anchors.length - 1; i >= 0; i--)
        {
            let position = (i == 0 ? 0 : getAnchorPositionOffset(anchors[i])) - transitionLength;
            if (content.scrollTop >= position && selectedImage == "")
            {
                selectedImage = screenshots[i];
            }
            transition = Math.max(transition, (transitionLength - Math.abs(position - content.scrollTop)) / transitionLength);
        }
        backgroundImage.style.backgroundImage = "url('" + selectedImage + "')";
        backgroundImage.style.backgroundColor = "rgb(255, 255, 255, " + lerp(0.25, 1, transition) + ")";
    });
}

function lerp(a, b, t)
{
    return t <= 0 ? a : t >= 1 ? b : a + (b - a) * t;
}

function getAnchorPositionOffset(offsetAnchorElement)
{
    let elementPosition = offsetAnchorElement.offsetTop;

    let sectionHeaderHeight = document.querySelector(".section-header").offsetHeight;
    let sectionBodyHeight = document.querySelector(".section-body").offsetHeight;
    let heights = sectionHeaderHeight + sectionBodyHeight;

    let entriesPosition = document.querySelector(".entries").offsetTop;

    return heights + elementPosition - entriesPosition;
}

// ======== overlay ========

export function showOverlayVideo(videoPath)
{
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlay-video").style.display = "block";
    document.querySelector(".overlay-video").setAttribute("src", videoPath);
    document.querySelector(".overlay-screenshot").style.display = "none";
    document.querySelector(".overlay-screenshot").setAttribute("src", "");
}

export function showOverlayScreenshot(screenshotPath)
{
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlay-video").style.display = "none";
    document.querySelector(".overlay-video").setAttribute("src", "");
    document.querySelector(".overlay-screenshot").style.display = "block";
    document.querySelector(".overlay-screenshot").setAttribute("src", screenshotPath);
}

export function hideOverlay()
{
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".overlay-video").style.display = "none";
    document.querySelector(".overlay-video").setAttribute("src", "");
    document.querySelector(".overlay-screenshot").style.display = "none";
    document.querySelector(".overlay-screenshot").setAttribute("src", "");
}

// ======== debug utils ========

function log(message)
{
    document.querySelector(".name").innerHTML = message;
}