const { Client, Pool } = require('pg');
const { user, password, host } = require('./config.js');

const client = new Client({
  user,
  password,
  host,
  database: 'postgres'
});

const controlLEDClient = new Client({
  user,
  password,
  host,
  database: 'controlled',
});

client
  .connect()
  .then(() => {
    console.log('connected to postgres client');
    return client.query('DROP DATABASE IF EXISTS controlled');
  })
  .then(() => {
    return client.query('CREATE DATABASE controlled');
  })
  .then(() => {
    console.log('new controlled database created');
    return client.end();
  })
  .then(() => {
    return controlLEDClient.connect();
  })
  .then(() => {
    console.log('connected to controlLED database');
    return controlLEDClient.query(
      `CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY ,
        username VARCHAR(40) UNIQUE,
        password VARCHAR(60),
        localIP INET
    )`);
  })
  .then(() => {
    console.log('table \'users\' created');
    return controlLEDClient.query(
      `CREATE TABLE designs (
        id SERIAL NOT NULL PRIMARY KEY ,
        name VARCHAR(32) NOT NULL,
        colors VARCHAR(7) [],
        balanced BOOL,
        direction VARCHAR(2),
        fadeColors VARCHAR(7) [],
        user_id INTEGER REFERENCES users(id)
    )`);
  })
  .then(() => {
    console.log('table \'designs\' created');
    return controlLEDClient.query(
      `CREATE TABLE sessions (
        id SERIAL NOT NULL PRIMARY KEY ,
        hash varchar(32),
        user_id INTEGER REFERENCES users(id)
    )`);
  })
  .then(() => {
    return controlLEDClient.query(
      `INSERT INTO users (username) VALUES ('demo')`
    );
  })
  .then(() => {
    console.log('table \'sessions\' created');
    return controlLEDClient.end();
  })
  .catch((err) => console.log(err));
