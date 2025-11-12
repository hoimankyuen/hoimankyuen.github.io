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

import {data as clubGrenadeData} from "/data/clubgrenade/data.js";
import {data as rebuildingData} from "/data/rebuilding/data.js";
import {data as accelerandoData} from "/data/accelerando/data.js";

import {data as xploroData} from "/data/xploro/data.js";
import {data as navalFrontlineData} from "/data/navalfrontline/data.js";
import {data as shotNViralData} from "/data/shotnviral/data.js";
import {data as chromomatchData} from "/data/chromomatch/data.js";

import {data as dicingHerosData} from "/data/dicingheros/data.js";
import {data as planeTacticsData} from "/data/planetactics/data.js";

export let data = [
    remoteStrandingData,
    clubGrenadeData,
    alkimiaShadowingData,
    xploroData,
    budgetShopData,
    smocData,
    fairyEdibleData,
    navalFrontlineData,
    accelerandoData,
    rebuildingData,
    shotNViralData,
    chromomatchData,
    planeTacticsData,
    dicingHerosData
];