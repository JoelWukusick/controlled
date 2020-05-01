const API = require('express').Router();
const db = require('./../database/index.js');
const auth = require('./auth.js');
const bcrypt = require('bcrypt');

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
  db.getUser({ username: req.body.username })
    .then(results => {
      if (results.rows[0]) {
        res.status(409).send();
      } else {
        return auth.createUser(req.body)
          .then(userId => {
            return db.updateSession({ userId, hash: req.session.hash })
          })
      }
    })
    .then(() => {
      res.status(201).send('new user created')
    })
    .catch((err) => {
      res.status(500).send();
    })
});
API.post('/login', (req, res) => {
  db.getUser({ username: req.body.username })
    .then(results => {
      if (!results.rows[0]) {
        throw 'Could\'t find user';
      } else {
        return results.rows[0];
      }
    })
    .then((user) => {
      return bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          console.log('valid: ', valid)
          if (!valid) {
            throw 'Incorrect Password';
          } else {
            return db.updateSession({ userId: user.id, hash: req.session.hash });
          }
        });
    })
    .then(results => {
      console.log('results', results)
      res.status(200).send('success')
    })
    .catch(err => {
      console.log(err)
      res.status(401).send(err);
    })
});

module.exports = API;