// Require mysql
const mysql = require("mysql");

const isProduction = process.env.NODE_ENV === 'production';
// Set up our connection information
const connection = mysql.createConnection({
  host: isProduction ? 'us-cdbr-east-03.cleardb.com' : "localhost",
  port: 3306,
  user: isProduction ? "b157f750519cb3" : "root",
  password: isProduction ? 'ec38ff26' : "cocococo",
  database: isProduction ? 'heroku_5bdfacff12e40f0' : "burgers_db"
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
