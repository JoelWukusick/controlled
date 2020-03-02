const express = require('express')
const app = express()
const port = 4000
const API = require('./API')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use('/api', API);
app.use('/', express.static('dist'))

app.listen(port, () => console.log(`LPC listening on port ${port}!`));