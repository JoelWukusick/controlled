const API = require('express').Router();
const db = require('../../database/index.js');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/:user', (req, res) => {
  db.getUserPresets(req.params.user)
});

module.exports = API;