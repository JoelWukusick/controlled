const API = require('express').Router();
const db = require('./../database/index.js');
const auth = require('./auth.js');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/:user/designs', (req, res) => {
  db.getUserPresets(req.params.user)
    .then(data => { res.send(data.rows) })
    .catch(err => console.log(err));
});
API.post('/:user/designs', (req, res) => {
  db.insertDesign(req.params.user, req.body)
    .then(result => { res.send(result) })
    .catch(err => res.send(err));
});
API.post('/signup', (req, res) => {
  //check db for user
  db.getUser({ username: req.query.username })
    .then(results => {
      //if user exists, send response
      if (results.rows[0]) {
        console.log(result.rows[0])
      } else {
        //create a user
        return auth.createUser(req.query)
          .then(userId => {
            //insert user id into session using username and password
            db.updateSession({ userId, sessionId: req.session.id })
          })
      }
    })
    .then(() => {
      res.status(201).send('new user created')
    });
})

module.exports = API;