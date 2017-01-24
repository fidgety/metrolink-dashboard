const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/trams';

let connection = {};

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    }
    connection = db.collection('stations');
});

var getAllRequestsForToday = (req, res, next) => {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    connection.find({
        date: {
            $gte: start
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

module.exports = getAllRequestsForToday;
