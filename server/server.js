import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import { uid } from "uid";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

// @desc GET USERS
app.get("/:statusType", (req, res) => {
  const sqlCommand = "SELECT * FROM users";
  db.query(sqlCommand, (err, result) => {
    if (err) return res.json({ Message: "Server Error!!" });

    let users;
    if (req.params.statusType === "accepted") {
      users = result.filter((user) => user.status === "accepted");
    } else if (req.params.statusType === "rejected") {
      users = result.filter((user) => user.status === "rejected");
    } else if (req.params.statusType === "requested") {
      users = result.filter((user) => user.status === "requested");
    }

    return res.json(users);
  });
});

// @desc POST USERS
app.post("/create", (req, res) => {
  const sqlCommand =
    "INSERT INTO `users` (`id`, `name`, `email`, `status`) VALUES (?)";
  const randomId = uid();
  console.log(randomId);
  const values = [randomId, req.body.name, req.body.email, req.body.status];
  db.query(sqlCommand, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// @desc DELETE USER
app.delete("/delete/:id", (req, res) => {
  const sqlCommand = "DELETE FROM users WHERE id = ?";
  const id = req.params.id;
  db.query(sqlCommand, [id], (err, result) => {
    if (err) return res.json({ Message: "Server Error!!" });
    return res.json(result);
  });
});

// @desc UPDATE USER
app.put("/update/:newStatusType/:id", (req, res) => {
  const newStatus = req.params.newStatusType;
  const id = req.params.id;
  const sqlCommand = "UPDATE users SET status = ? WHERE id = ?";
  db.query(sqlCommand, [newStatus, id], (err, result) => {
    console.log(result);
    if (err) return res.json({ Message: "Server Error!!" });
    return res.json(result);
  });
});
app.listen(5000, () => {
  console.log(`Listening on port 5000!!`);
});
