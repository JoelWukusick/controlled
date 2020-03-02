const { Client, Pool } = require('pg');

const client = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  database: 'postgres',
});

const controlLEDClient = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
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
        name JSON NOT NULL
    )`);
  })
  .then(() => {
    console.log('table \'users\' created');
    return controlLEDClient.query(
      `CREATE TABLE designs (
        id SERIAL NOT NULL PRIMARY KEY ,
        name TEXT NOT NULL,
        colors TEXT []
    )`);
  })
  .then(() => {
    console.log('table \'designs\' created');
    return controlLEDClient.end();
  })
  .catch((err) => console.log(err));