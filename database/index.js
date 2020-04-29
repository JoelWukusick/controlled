
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
  getUserPresets: function (user) {
    console.log(user)
    return (client.query(`SELECT * FROM designs WHERE user_id = 1 LIMIT 6`))
  },
  insertDesign: function (user, data) {
    return client.query(
      `INSERT INTO designs (user_id, name, colors, balanced, direction, fadecolors) VALUES ((SELECT id from users WHERE username= $1 ), $2, $3, $4, $5, $6);`, [user, data.name, data.colors, data.balanced, data.direction, data.fadeColors]
    )
  }
}