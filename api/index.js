const express = require('express');
const cors = require('./middleware/cors');

const getAllRequestsForToday = require('./middleware/getAllRequestsForToday');
const getLastXMinutes = require('./middleware/getLastXMinutes');

const app = express();

app.use(cors);

app.get('/today',
    getAllRequestsForToday,
    (req, res) => {
        res.json(res.locals.requests);
    });

app.get('/lastXMinutes/:minutes',
    getLastXMinutes,
    (req, res) => {
        res.json(res.locals.requests);
    });

app.listen(3008, () => {
    console.log('up and running on port 3003');
});
