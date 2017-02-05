const mongo = require('mongo');

module.exports = (query, res, next) => {
    mongo.stations.find(query, (err, cursor) => {
        cursor.toArray()
            .then(results => {
                res.locals.requests = results;
                next();
            });
    });
};
