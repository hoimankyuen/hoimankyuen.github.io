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

import {data as clubGrenadeData} from "/data/clubgrenade/data.js";
import {data as dicingHerosData} from "/data/dicingheros/data.js";
import {data as planeTacticsData} from "/data/planetactics/data.js";
import {data as accelerandoData} from "/data/accelerando/data.js";
import {data as rebuildingData} from "/data/rebuilding/data.js";
import {data as shotNViralData} from "/data/shotnviral/data.js";
import {data as chromomatchData} from "/data/chromomatch/data.js";

export let data = [
    clubGrenadeData,
    dicingHerosData,
    planeTacticsData,
    accelerandoData,
    rebuildingData,
    shotNViralData,
    chromomatchData
];