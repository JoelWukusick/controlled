const API = require('express').Router();
const db = require('../../database/index.js');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/:user', (req, res) => {
  db.getUserPresets()
    .then(data => res.send(data.rows))
    .catch(err => console.log(err));
});
API.post('/:user', (req, res) => {
  db.insertDesign(req.params.user, req.body)
    .then(result => {res.send(result)})
    .catch(err => res.send(err))
})

module.exports = API;