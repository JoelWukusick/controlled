const db = require('../database/index.js');
const randomBytes = require('randombytes');

require('crypto').randomBytes(48, function(err, buffer) {
  var token = buffer.toString('hex');
});

createNewSession = () => {
  //create session hash
  return require('random-bytes')(16)
  .then(buffer => {
    let hash = buffer.toString('hex');
    return db.createNewSession(hash);
  })
  //then, get session info with result.insertId
  .then(result => {
    return db.getSession({id:result.rows[0].id});
  })
  .then(result => {
    return result.rows[0];
  })
};

module.exports.createSession = (req, res, next) => {
  Promise.resolve(req.cookies.user_id)
    .then(hash => {
      if(!hash || hash === 'undefined') {
        return createNewSession();
      } else {
        return db.getSession({hash})
          .then(result => {
            return result.rows[0] ? result.rows[0] : createNewSession();
          })
      }
    })
    .then(session => {
        console.log(session.hash);
        res.cookie('user_id', session.hash);
        req.session = session;
        next();
    });
}