const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '153.92.15.19',
  user: 'u248141963_admin',
  password: 'Y4sXL!eGaQ>',
  database: 'u248141963_kajas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
