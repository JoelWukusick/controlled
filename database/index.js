
const { user, password, host } = require('./config.js');

const { Client } = require('pg')
const client = new Client({
  user,
  password,
  host,
  database: 'controlled',
});
client.connect()
  .then(() => console.log('connected to postgres client'))
  .catch(err => console.log(err));

module.exports = {
  createUser: ({ username, password }) => {
    return (client.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`, [username, password]));
  },
  updateIP: ({ IP, id }) => {
    return (client.query(`UPDATE users SET localIP = $1 WHERE id = $2`, [IP, id]));
  },
  getUser: data => {
    let key = Object.keys(data)[0];
    return (client.query(`SELECT * FROM users WHERE ${key} = $1`, [data[key]]));
  },
  getSession: data => {
    let key = Object.keys(data)[0];
    return (client.query(`SELECT * FROM sessions WHERE ${key} = $1`, [data[key]]));
  },
  createNewSession: hash => {
    return (client.query(`INSERT INTO sessions (hash) VALUES ($1) RETURNING id`, [hash]));
  },
  updateSession: ({ userId, id }) => {
    return (client.query(`UPDATE sessions SET user_id = $1 WHERE id = $2`, [userId, id]));
  },
  getUserPresets: user => {
    return (client.query(`SELECT * FROM designs WHERE user_id = (SELECT id FROM users WHERE username = $1) ORDER BY id desc LIMIT 6`, [user]));
  },
  insertDesign: (user, data) => {
    return client.query(
      `INSERT INTO designs (user_id, name, colors, balanced, direction, fadecolors) VALUES ((SELECT id from users WHERE username= $1 ), $2, $3, $4, $5, $6)`, [user, data.name, data.colors, data.balanced, data.direction, data.fadeColors]
    )
  }
}