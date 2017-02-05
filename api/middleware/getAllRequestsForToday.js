const runQuery = require('./findAndAddToLocals');

var getAllRequestsForToday = (req, res, next) => {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    runQuery({
        date: {
            $gte: start
        }
    }, res, next);
};

module.exports = getAllRequestsForToday;
