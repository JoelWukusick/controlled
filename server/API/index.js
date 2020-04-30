const API = require('express').Router();
const db = require('../../database/index.js');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/:user/designs', (req, res) => {
  db.getUserPresets(req.params.user)
    .then(data => res.send(data.rows))
    .catch(err => console.log(err));
});
API.post('/:user/designs', (req, res) => {
  db.insertDesign(req.params.user, req.body)
    .then(result => { res.send(result) })
    .catch(err => res.send(err));
});

module.exports = API;