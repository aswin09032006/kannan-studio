require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database");
});

app.post('/admin-login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM admin_login_details WHERE email = ? AND password = ?';
  
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Signin successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

app.post('/contact', (req, res) => {
  const { name, email, number, url, message } = req.body;
  const query = 'INSERT INTO contact_details (name, email, number, url, message) VALUES (?,?,?,?,?)';
  connection.query(query, [name, email, number, url, message], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ message: "Data added successfully" });
  });
});

app.post('/reserve', (req, res) => {
  const { date, time, photo, video, firstName, lastName, email, number, location } = req.body;
  const query = 'INSERT INTO reservation_details (date, time, photo, video, firstName, lastName, email, number, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  connection.query(query, [date, time, photo, video, firstName, lastName, email, number, location], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ message: "Data added successfully" });
  });
});

app.get('/table', (req, res) => {
  const reservationQuery = `SELECT * FROM reservation_details`;
  const contactQuery = `SELECT * FROM contact_details`;
  
  connection.query(reservationQuery, (error, reservationResults) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    connection.query(contactQuery, (error, contactResults) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json({ reservation_details: reservationResults, contact_details: contactResults });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
