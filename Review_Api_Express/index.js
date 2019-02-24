const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 2000;

app.use(cors())
app.use(bodyParser.json())

const conn = mysql.createConnection({
    host : 'localhost',
    user: 'justifyester',
    password: 'justifyester123',
    database: 'esterbersyukur',
    port: 3306
})

app.get('/', (req,res) => {
    res.send('<h1> SELAMAT DATANG di API ESTER</h1>')
})

app.get('/productList', (req,res) => {
    var sql = `select p.id, p.nama, p.harga, p.deskripsi, p.image, b.namaBrand
	            from product p
                join brand b
                on p.brandId = b.id;`
    conn.query(sql,(err,res1) => {
        if(err) throw err;
        res.send(res1);
    })
})

app.post('/addProduct', (req,res) => {
    var sql = `select p.id, p.nama, p.harga, p.deskripsi, p.image, b.namaBrand
	            from product p
                join brand b
                on p.brandId = b.id;`
    conn.query(sql,(err,res2) => {
        if(err) throw err;
        res.send(res2);
    })
    

    
})


    
app.listen(port, () => console.log(`API aktif di port ${port}`))