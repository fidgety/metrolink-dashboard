const mongo = require('./mongo');
const moment = require('moment');

var getLastXMinutes = (req, res, next) => {
    const lastXMinutes = moment().subtract(req.params.minutes, 'minutes');

    mongo.stations.find({
        date: {
            $gte: lastXMinutes.toDate()
        }
    }, (err, cursor) => {
        cursor.toArray()
            .then(results => results.map(result => ({
                station: result.station,
                date: result.date,
                device: result.device
            })))
            .then(mappedResults => {
                res.locals.requests = mappedResults;
                next();
            });
    });
};

module.exports = getLastXMinutes;
