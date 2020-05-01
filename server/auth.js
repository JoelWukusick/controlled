const db = require('../database/index.js');
const randomBytes = require('random-bytes');
const bcrypt = require('bcrypt');

getSession = (data) => {
  return db.getSession(data)
    .then(session => {
      session = session.rows[0];
      if (!session || !session.user_id) {
        return session;
      }
      return db.getUser({ id: session.user_id })
        .then(user => {
          user = user.rows[0];
          session.user = user;
          return session;
        });
    })

}

createNewSession = () => {
  return randomBytes(16)
    .then(buffer => {
      let hash = buffer.toString('hex');
      return db.createNewSession(hash);
    })
    .then(result => {
      return getSession({ id: result.rows[0].id })
    })
};

module.exports = {
  createSession: (req, res, next) => {
    Promise.resolve(req.cookies.session)
      .then(hash => {
        if (!hash) {
          return createNewSession();
        } else {
          return getSession({ hash })
            .then(result => {
              return result ? result : createNewSession();
            })
        }
      })
      .then(session => {
        res.cookie('session', session.hash);
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
  },
  verifySession: (req, res, next) => {
    if (!req.session.user) {
      res.status(401).send();
    } else {
      next();
    }
  }
}