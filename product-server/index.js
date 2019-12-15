const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";
const SELECT_ALL_USERS_QUERY = "SELECT * FROM users";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "react_mysql"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /users to see products");
});

app.get("/users", (req, res) => {
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/users/add", (req, res) => {
  const { username, userpassword } = req.query;
  const INSERT_USERS_QUERY = `INSERT INTO USERS (username,userpassword) VALUES(${username}, ${userpassword})`;
  connection.query(INSERT_USERS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("successfully added user");
    }
  });
});

app.listen(4000, () => {
  console.log("Telemedics server listening on port 4000");
});
