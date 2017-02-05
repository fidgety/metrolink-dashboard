const runQuery = require('./findAndAddToLocals');
const moment = require('moment');

var getLastXMinutes = (req, res, next) => {
    const lastXMinutes = moment().subtract(req.params.minutes, 'minutes');

    runQuery({
        date: {
            $gte: lastXMinutes.toDate()
        }
    }, res, next);
};

module.exports = getLastXMinutes;
