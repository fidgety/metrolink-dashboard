const mongo = require('./mongo');
const moment = require('moment');

var specificDay = (req, res, next) => {
    const startOfDay = moment(req.params.date).startOf('day');
    const endOfDay = moment(req.params.date).endOf('day');

    mongo.stations.find({
        date: {
            $gte: startOfDay.toDate(),
            $lte: endOfDay.toDate()
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

module.exports = specificDay;
