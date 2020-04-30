const express = require('express');
const port = 3000;
const API = require('./api.js');
const auth = require('./auth.js');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(auth.createSession);
app.use('/api', API);
app.use('/', express.static('dist'))

app.listen(port, () => console.log(`LPC listening on port ${port}!`));