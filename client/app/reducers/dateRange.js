const moment = require('moment');
const stations = require('../constants/stations');

export default (state, action) => {
    if (!state) {
        return {
            totals: []
        };
    }
    console.log(action.type);
    if (action.type === 'GET_RANGE_SUCCESS') {
        let current = moment('2016-01-01').startOf('day');
        return {
            totals: action.data.reduce((acc, request) => {
                let currentDate = moment(request.date).startOf('day');
                console.log(currentDate.format(), current.format(), current.isSame(currentDate));
                if (current.isSame(currentDate)) {
                    acc[acc.length - 1] = acc[acc.length - 1] + 1;
                } else {
                    acc.push(1);
                }

                current = currentDate;
                console.log(acc);
                return acc;
            }, [])
        };
    }

    return state;
};
