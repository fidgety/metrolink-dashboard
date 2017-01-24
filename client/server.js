const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('*', express.static(`${__dirname}/public`));

app.listen(9004);
