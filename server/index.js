const express = require('express');
const port = 3000;
const API = require('./API');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', API);
app.use('/', express.static('dist'))

app.listen(port, () => console.log(`LPC listening on port ${port}!`));