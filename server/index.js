const express = require('express')
const app = express()
const port = 4000

app.use(express.static('dist'))

app.listen(port, () => console.log(`LPC listening on port ${port}!`));