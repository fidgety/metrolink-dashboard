const mongo = require('./mongo');

var getAllRequestsForToday = (req, res, next) => {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    mongo.stations.find({
        date: {
            $gte: start
        }
    }, (err, cursor) => {
        cursor.toArray()
            .then(results => results.map(result => ({
                station: result.station,
                date: result.date,
                device: result.device,
                userAgent: result.userAgent
            })))
            .then(mappedResults => {
                res.locals.requests = mappedResults;
                next();
            });
    });
};

module.exports = getAllRequestsForToday;
