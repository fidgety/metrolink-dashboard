const runQuery = require('./findAndAddToLocals');
const moment = require('moment');

var getLastXMinutes = (req, res, next) => {
    const startOfDay = moment(req.params.start).startOf('day');
    const endOfDay = moment(req.params.end).endOf('day');

    runQuery({
        date: {
            $gte: startOfDay.toDate(),
            $lte: endOfDay.toDate()
        }
    }, res, next);
};

module.exports = getLastXMinutes;
