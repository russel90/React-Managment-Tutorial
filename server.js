const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

app.get('/api/hello', (req, res)=> {
    res.send({message: 'Hello Express!'});
});

// Database connection Setting
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

// connect database
connection.connect();

app.get('/api/customers', (req,res)=>{
    connection.query(
        "SELECT ID, IMAGE, NAME, BIRTHDAY, GENDER, JOB FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
            console.log(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`))