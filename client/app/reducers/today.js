export default (state, action) => {
    if (!state) {
        return {
            results: [],
            stations: [],
            total: 0,
            device: {
                android: 0,
                ios: 0
            }
        };
    }

    if (action.type === 'GET_TODAY_SUCCESS') {
        const stationTotals = action.data.reduce((acc, results) => {
            const station = results.station;
            if (acc[station]) {
                acc[station] += 1;
            } else {
                acc[station] = 1;
            }
            return acc;
        }, {});

        const arr = Object.keys(stationTotals).map(station => ({
            station,
            total: stationTotals[station]
        }));

        return {
            results: action.data.concat([]),
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
