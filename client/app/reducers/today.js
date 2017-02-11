const moment = require('moment');
const stations = require('../constants/stations');

const getSessions = data => data.reduce((acc, result) => {
    acc[result.sessionID] ? acc[result.sessionID]++ : acc[result.sessionID] = 0;
    return acc;
}, {});

const amountOfSessions = sessions => Object.keys(sessions).length;

export default (state, action) => {
    if (!state) {
        return {
            results: [],
            stations: [],
            total: 0,
            device: {
                android: 0,
                ios: 0
            },
            totalSessions: 0
        };
    }

    if (action.type === 'GET_RANGE_SUCCESS' || action.type === 'GET_TODAY_SUCCESS' || action.type === 'GET_NOW_SUCCESS' || action.type === 'GET_DAY_SUCCESS') {
        const stationTotals = action.data.reduce((acc, results) => {
            const station = results.station;
            if (acc[station]) {
                acc[station].count += 1;
                acc[station].sessions[results.sessionID] = true;
            } else {
                acc[station] = {
                    sessions: {
                        [results.sessionID]: true
                    },
                    count: 1
                };
            }
            return acc;
        }, {});

        const sessions = getSessions(action.data);

        const totalSessions = amountOfSessions(sessions);

        const arr = Object.keys(stationTotals).map(station => ({
            station,
            total: stationTotals[station].count,
            route: stations[station.replace(/-/g, ' ')],
            sessions: Object.keys(stationTotals[station].sessions).length
        }));

        return {
            results: action.data.map(data => Object.assign({}, data, {
                date: moment(data.date),
                station: data.station.replace(/-/g, ' '),
                route: stations[data.station.replace(/-/g, ' ')]
            })),
            totalSessions,
            total: action.data.length,
            stations: arr.sort((item1, item2) => item2.total - item1.total),
            device: action.data.reduce((acc, request) => {
                acc[request.device] += 1;
                return acc;
            }, {
                android: 0,
                ios: 0
            })
        };
    }

    return state;
};
