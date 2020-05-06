const API = require('express').Router();
const db = require('./../database/index.js');
const auth = require('./auth.js');
const bcrypt = require('bcrypt');

API.get('/', (req, res) => {
  res.status(200).send('connected to API');
});
API.get('/user', (req, res) => {
  if (req.session.user) {
    res.status(200).send({ username: req.session.user.username, localIP: req.session.user.localip });
  } else {
    res.status(404).send();
  }
});
API.get('/demo/designs', (req, res) => {
  db.getUserPresets('demo')
    .then(data => { res.send(data.rows) })
    .catch(err => console.log(err));
});
API.post('/demo/designs', (req, res) => {
  db.insertDesign('demo', req.body)
    .then(result => { res.send(result) })
    .catch(err => res.send(err));
});
API.get('/:user/designs', auth.verifySession, (req, res) => {
  db.getUserPresets(req.params.user)
    .then(data => { res.send(data.rows) })
    .catch(err => console.log(err));
});
API.post('/:user/designs', auth.verifySession, (req, res) => {
  db.insertDesign(req.params.user, req.body)
    .then(result => { res.send(result) })
    .catch(err => res.send(err));
});
API.post('/signup', (req, res) => {
  db.getUser({ username: req.body.username })
    .then(results => {
      if (results.rows[0]) {
        res.status(409).send('Username already used.');
      } else {
        return auth.createUser(req.body)
          .then(userId => {
            return db.updateSession({ userId, id: req.session.id })
          })
      }
    })
    .then(() => {
      res.status(201).send({ username: req.body.username })
    })
    .catch((err) => {
      res.status(500).send();
    })
});
API.post('/login', (req, res) => {
  db.getUser({ username: req.body.username })
    .then(results => {
      if (!results.rows[0]) {
        throw 'Couldn\'t find user.';
      } else {
        return results.rows[0];
      }
    })
    .then((user) => {
      return bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            throw 'Incorrect Password.';
          } else {
            res.body = { username: user.username, localIp: user.localIp };
            return db.updateSession({ userId: user.id, id: req.session.id })
              .then(results => res.status(201).send({ username: user.username, localIp: user.localIp }));
          }
        })
    })
    .catch(err => {
      console.log(err)
      res.status(401).send(err);
    })
});

API.post('/logout', (req, res) => {
  db.updateSession({ userId: null, id: req.session.id })
    .then(() => {
      req.session.user_id = null;
      req.session.user = null;
      res.status(201).send();
    })
    .catch((err) => {
      res.send(err);
    })
})

API.post('/ip', (req, res) => {
  db.updateIP({ IP: req.body.ip, id: req.session.user.id })
    .then(() => {
      return db.getUser({ id: req.session.user.id });
    })
    .then(user => {
      res.status(201).send({ username: user.rows[0].username, localIP: user.rows[0].localip });
    })
    .catch((err) => {
      console.log(err)
      res.status(401).send(err);
    })
})
module.exports = API;