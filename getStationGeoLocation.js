const request = require('request');


request('https://maps.googleapis.com/maps/api/geocode/json?address=media city metrolink', (err, body) => {
    console.log(JSON.parse(body.body).results[0].geometry.location);
    console.log(err);
});
