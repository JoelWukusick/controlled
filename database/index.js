const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'run',
  host: 'localhost',
  database: 'controlled',
});
client.connect()
  .then(() => console.log('connected to postgres client'))
  .catch(err => console.log(err));

module.exports = {
  getUserPresets: function () {
    return (client.query('SELECT * FROM designs ORDER BY id DESC LIMIT 7'));

    // }
  },
  insertDesign: function (user, data) {
    return (
      client.query('INSERT INTO designs (name, colors) VALUES ($1, $2)', [data.name, data.colors])
    )
  }
}