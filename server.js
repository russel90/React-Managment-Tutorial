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

const multer = require('multer');
const upload = multer({dest:'./upload'});

app.get('/api/customers', (req,res)=>{
    connection.query(
        "SELECT id, image, name, birthday, gender, job FROM CUSTOMER WHERE ISDELETED = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.use('/image',express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER (id, image, name, birthday, gender, job, createddate, isdeleted) VALUES( 0, ?, ?, ?, ?, ?, now(), 0)';

    let image = '/image/' + req.file.filename
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;

    // console.log를 이용해 값 출력하기
    // console.log(name);
    // console.log(image);
    // console.log(birthday);
    // console.log(gender);
    // console.log(job);

    let params = [image, name, birthday, gender, job];
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
            // console.log(err);
        }
    );

    console.log('Insert finished');
});

app.delete('/app/customers/:id', (req, res)=>{
    let sql = 'UPDATE CUSTOMER SET ISDELETED= 1 WHERE ID = ?';
    let params = [req.params.id];

    connection.query(sql, params,
        (err, rows, fields)=>{
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`))