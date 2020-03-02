const { Client } = require('pg')
const client = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  database: 'controlled',
});
client.connect()
  .then(() => console.log('connected to postgres client'))
  .catch(err => console.log(err));

module.exports = {
  getUserDesigns: function (user) {
    client.query('SELECT $1::text as message', ['write the getUserPresets function!!'])
      .then(res => console.log(res.rows[0].message))
      .catch(err => err.stack);
  }
}