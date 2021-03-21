// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "cocococo",
  database: "burgers_db"
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