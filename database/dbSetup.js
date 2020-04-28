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
        password VARCHAR(64),
        salt VARCHAR(64)
    )`);
  })
  .then(() => {
    console.log('table \'users\' created');
    return controlLEDClient.query(
      `CREATE TABLE designs (
        id SERIAL NOT NULL PRIMARY KEY ,
        user_id INTEGER REFERENCES users(id),
        name TEXT NOT NULL,
        colors TEXT []
    )`);
  })
  .then(() => {
    console.log('table \'designs\' created');
    return controlLEDClient.end();
  })
  .catch((err) => console.log(err));
