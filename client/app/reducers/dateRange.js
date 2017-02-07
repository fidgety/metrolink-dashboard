const moment = require('moment');
const stations = require('../constants/stations');

export default (state, action) => {
    if (!state) {
        return {
            totals: []
        };
    }

    if (action.type === 'GET_RANGE_SUCCESS') {
        let current = moment().startOf('day');
        return {
            totals: action.data.reduce((acc, request) => {
                let currentDate = moment(request.date).startOf('day');

                if (current.isSame(currentDate)) {
                    acc[acc.length - 1] = acc[acc.length - 1] + 1;
                } else {
                    acc.push(1);
                }

                current = currentDate;

                return acc;
            }, [])
        };
    }

    return state;
};
