const orm = require('orm');
const config = require('./config');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
});
console.log('Connecting!', connection);

connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db}`, async (err) => {
  console.error('Error creating db', err);
  if (err) {
    throw err;
  }
  const opts = {
    auth: `${config.user}:${config.password}`,
    host: config.host,
    port: config.port,
    database: config.db,
    protocol: 'mysql',
  };

  try {
    const db = await orm.connectAsync(opts);
    console.log('Connected!', db);
    const Person = db.define('person', {
      name: String,
      surname: String,
      age: Number,
    });
  } catch (e) {
    //unhandled promise rejection - rethrow
    throw e;
  }

});
