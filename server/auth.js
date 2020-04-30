const db = require('../database/index.js');
const randomBytes = require('random-bytes');
const bcrypt = require('bcrypt');

createNewSession = () => {
  return randomBytes(16)
    .then(buffer => {
      let hash = buffer.toString('hex');
      return db.createNewSession(hash);
    })
    .then(result => {
      return db.getSession({ id: result.rows[0].id })
        .then(result => {
          return result.rows[0];
        })
    })
};

module.exports = {
  createSession: (req, res, next) => {
    Promise.resolve(req.cookies.user_id)
      .then(hash => {
        if (!hash) {
          return createNewSession();
        } else {
          return db.getSession({ hash })
            .then(result => {
              return result.rows[0] ? result.rows[0] : createNewSession();
            })
        }
      })
      .then(session => {
        res.cookie('user_id', session.hash);
        req.session = session;
        next();
      });
  },
  createUser: ({ username, password }) => {
    return bcrypt.hash(password, 10)
      .then(hash => {
        let user = {
          username,
          password: hash
        }
        return db.createUser(user)
          .then(results => {
            return results.rows[0].id;
          })
      })
  }
}