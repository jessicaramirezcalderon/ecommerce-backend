// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  host: process.env.DATABASE_URL ? 'us-cdbr-east-03.cleardb.com' : "localhost",
  port: 3306,
  user: process.env.DATABASE_URL ? "b157f750519cb3" : "root",
  password: process.env.DATABASE_URL ? 'ec38ff26' : "cocococo",
  database: process.env.DATABASE_URL ? 'heroku_5bdfacff12e40f0' : "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
