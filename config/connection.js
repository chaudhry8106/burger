var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "v1ypfpshbmet5lb7",
  password: "opwqlnif4b7rah7h",
  database: "t8fby8p9vs3f1xqd",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;