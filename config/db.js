const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql.hostinger.com',
  user: 'u248141963_admin',
  password: 'Y4sXL!eGaQ>',
  database: 'u248141963_kajas'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
