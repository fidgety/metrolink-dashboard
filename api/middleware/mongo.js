const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/trams';

let connection = {};

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    }
    connection.stations = db.collection('stations');
});

module.exports = connection;
