const fs = require('fs');

const stations = require('./client/app/constants/stations');

const combines = stations.reduce((list, station) => {
    list[station.station] = station.type;
    return list;
}, {});

console.log(combines);
