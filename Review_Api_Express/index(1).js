const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express();
const port = 1999;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'justifyester',
    password: 'justifyester123',
    database: 'esterbersyukur',
    port: 3306
});

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('<h1>Selamat datang di API!</h1>')
})

app.get('/product', (req,res) => {
    var sql = `select p.id, p.nama, p.harga, p.deskripsi, p.img, b.id as idbrand, b.namabrand 
	            from product p
                join brand b
                on p.brandId = b.id;`
    conn.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    })

})

app.post('/addproduct', (req,res) => {
    var sql = `insert ignore into brand set namabrand='${req.body.namabrand}';`;
    conn.query(sql, (err,results1) => {
        if(err) throw err;
        console.log(results1)
        sql = `select id from brand where namabrand='${req.body.namabrand}';`
        conn.query(sql, (err,results2) => {
            if(err) throw err;
            console.log(results2)
            var id  = results2[0].id;
            console.log(id)
            sql = `insert into product set nama='${req.body.nama}', harga=${req.body.harga}, deskripsi='${req.body.deskripsi}', img='${req.body.img}', brandId=${id};`
            conn.query(sql, (err,results3) => {
                if(err) throw err;
                console.log(results3)
                sql = `select p.id, p.nama, p.harga, p.deskripsi, p.img, b.id as idbrand, b.namabrand 
                    from product p
                    join brand b
                    on p.brandId = b.id;`
                conn.query(sql, (err,results4) => {
                    if(err) throw err;
                    res.send(results4);
                })
            })
        })
    })
})

app.delete('/deleteproduct/:id', (req,res) => {
    var productId = req.params.id;
    var sql = `select * from product where id = ${productId};`;
    conn.query(sql, (err, results) => {
        if (err) throw err 
        if(results.length > 0) {
            sql = `delete from product where id = ${productId};`
            conn.query(sql, (err1,results1) => {
                if(err1) throw err1
                console.log(results1)
                sql = `select p.id, p.nama, p.harga, p.deskripsi, p.img, b.id as idbrand, b.namabrand 
                        from product p
                        join brand b
                        on p.brandId = b.id;`;
                conn.query(sql, (err2,results2) => {
                    if(err2) throw err2
                    res.send(results2);
                })
            })
        }

    })   
})

app.put('/editproduct/:id', (req,res) => {
    var productId = req.params.id;
    var sql = `select * from product where id = ${productId};`;
    conn.query(sql, (err, results) => {
        if(err) throw err;
            sql = `update product set nama='${req.body.nama}', harga=${req.body.harga}, 
                    deskripsi='${req.body.deskripsi}', img='${req.body.img}' where id = ${productId};`;
            conn.query(sql, (err,results1) => {
                if(err) throw err;
                console.log(results1)
                var sql = `insert ignore into brand set namabrand='${req.body.namabrand}';`;
                conn.query(sql, (err,results2) => {
                    if(err) throw err;
                    console.log(results2)
                    sql = `select id from brand where namabrand='${req.body.namabrand}';`
                    conn.query(sql, (err,results3) => {
                        if(err) throw err;
                        console.log(results3)
                        var id  = results3[0].id;
                        console.log(id)
                        sql = `update product set brandId=${id} where id = ${productId};`
                        conn.query(sql, (err,results4) => {
                            if(err) throw err;
                            console.log(results4)
                            sql = `select p.id, p.nama, p.harga, p.deskripsi, p.img, b.id as idbrand, b.namabrand 
                                    from product p
                                    join brand b
                                    on p.brandId = b.id;`
                            conn.query(sql, (err,results5) => {
                                if(err) throw err;
                                res.send(results5);
                            })
                        })
                    })
                })
            })   
    })
})

app.listen(port, () => console.log('API aktif di port ' + port));