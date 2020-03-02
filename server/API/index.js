const API = require('express').Router();
const db = require('../../database/index.js');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/:user/:designName', (req, res) => {
  db.getUserPresets(req.params.user)
});
API.post('/:user/:designName', (req, res) => {
  console.log(req.params.user, req.params.designName)
})

module.exports = API;