// structure: 
//   id,
//   name, 
//   icon, 
//   platforms[] (android, ios, windows, webgl),
//   descriptions[],
//   links[],
//     linkType(game, webpage, repo),
//     link,
//   accomplishments[],
//   videos[],
//   screenshots[]

import {data as remoteStrandingData} from "/data/remotestranding/data.js";
import {data as budgetShopData} from "/data/budgetshop/data.js";
import {data as fairyEdibleData} from "/data/fairyedible/data.js";
import {data as smocData} from "/data/smoc/data.js";
import {data as alkimiaShadowingData} from "/data/alkimiashadowing/data.js";

import {data as xploroData} from "/data/xploro/data.js";
import {data as xrccData} from "/data/xrcc/data.js";
import {data as navalFrontlineData} from "/data/navalfrontline/data.js";
import {data as shotNViralData} from "/data/shotnviral/data.js";
import {data as chromomatchData} from "/data/chromomatch/data.js";

import {data as clubGrenadeData} from "/data/clubgrenade/data.js";
import {data as rebuildingData} from "/data/rebuilding/data.js";
import {data as accelerandoData} from "/data/accelerando/data.js";

import {data as dicingHerosData} from "/data/dicingheros/data.js";
import {data as planeTacticsData} from "/data/planetactics/data.js";

export let featuredData = [
    remoteStrandingData,
    clubGrenadeData,
    xploroData,
    alkimiaShadowingData,
    navalFrontlineData,
    smocData,
    xrccData,
    budgetShopData
];

export let allJamData = [
    remoteStrandingData,
    alkimiaShadowingData,
    smocData,
    budgetShopData,
    fairyEdibleData
];

export let allWorkData = [
    xploroData,
    xrccData,
    navalFrontlineData,
    shotNViralData,
    chromomatchData
];

export let allOtherData = [
    clubGrenadeData,
    rebuildingData,
    accelerandoData,
    planeTacticsData,
    dicingHerosData
];

export function getEntryById(id)
{
    let data = getEntryByIdIn(id, allJamData);
    if (data != null)
    {
        return data;
    }
    data = getEntryByIdIn(id, allWorkData);
    if (data != null)
    {
        return data;
    }
    data = getEntryByIdIn(id, allOtherData);
    if (data != null)
    {
        return data;
    }
    return null;
}

function getEntryByIdIn(id, entryList)
{
    for (let i = 0; i < entryList.length; i++)
    {
        if (entryList[i].id == id)
        {
            return entryList[i];
        }
    }
    return null;
}