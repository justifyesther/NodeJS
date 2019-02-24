var express = require('express');
var mysql = require('mysql')
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

// var port = 1999;
var port = 2000;


var db = mysql.createConnection({
    host : 'localhost',
    user : 'justifyester',
    password : 'justifyester123',
    database : 'esterbersyukur',
    port : 3306 
})

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
    //res.send('Selamat Datang')
    res.send('<h1>Selamat Datang</h1>')
    //res.send({nama:"Ivana"})

})

app.get('/popok/:nama', (req,res) => {
    // console.log(req.params.id);
    // res.send('Hello!')
    // res.send({obj: parseInt(req.params.id)})
    var hokage = req.params.nama 
    var sql = `select * from product where nama like '%${hokage}%';`
    db.query(sql, (err,results) => {
        res.send(results)
    })
})

// app.get('/popok', (req,res) => {
//     req.query.harga = parseInt(req.query.harga)
//     console.log(req.query)
//     res.send([
//         {
//             nama: 'Mamy Poko',
//             harga: 45000
//         },
//         {
//             nama: 'Pampers',
//             harga: 50000
//         }
//     ])
// })


// app.get('/kuribo', (req,res) => {
//     var namaku = req.query.nama
//     res.send(`<h1>Halo, ${namaku}</h1>`)
//     // console.log(req.query.susanto)
//     // res.send(`<h1>${req.query.kirito}</h1>`)
// })

app.get('/kuribo', (req,res) => {
    var hokage= req.query.namaProduk
    var sql = `select * from product where nama like '%${hokage}%';`
    db.query(sql,(err,res1) => {
        res.send(res1)
        console.log(res1)
    })
})

// app.get('/popok/:nama', (req,res) => {
app.get('/popok', (req,res) => {
    // var nama = req.params.nama;
    var nama = req.query.nama;
    if(nama == undefined) {
        nama = '';
    }
    var sql = `select * from product where nama like '%${nama}%';`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        //res.send('<h1>Hai, Ivana!</h1>')
        res.send(result)
    })
    // var contoh = (err,result)=>{
    //     if(err) throw err;
    //     console.log(result)
    //     //res.send('<h1>Hai, Ivana!</h1>')
    //     res.send(result)
    // }
    // db.query(sql,contoh)
    // var contoh = () => (err,result)=>{
    //     if(err) throw err;
    //     console.log(result)
    //     //res.send('<h1>Hai, Ivana!</h1>')
    //     res.send(result)
    // }
    // db.query(sql,contoh())
    
})

app.post('/popok', (req,res) => {
    // console.log(req.body);
    // res.send(req.body)
    var newDataProduct = {
        nama: req.body.nama,
        harga: req.body.harga,
        deskripsi: req.body.deskripsi,
        image: req.body.image,
        brandId: req.body.brandId
    }
    var nama = req.body.filterNama
    var sql = 'insert into product set ?;'
    db.query(sql, newDataProduct, (err,result)=>{
        if(err) throw err;
        console.log(result)
        var sql = `select * from product where nama like '%${nama}%';`;
        db.query(sql,(err,result1)=>{
            if(err) throw err;
            console.log(result1)
            res.send(result1)
        })
    })
})

app.put('/popok/:id', (req,res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    // res.send('Update Success')
    var newEditProduct = {
        nama: req.body.nama,
        harga: req.body.harga,
        deskripsi: req.body.deskripsi,
        image: req.body.image,
        brandId: req.body.brandId
    }
    var sql = `update product set ? where id=${req.params.id}`
    db.query(sql, newEditProduct, (err,res1) => {
        // res.send('Update Success')
        res.send(res1);
    })
})

app.delete('/popok/:id', (req,res) => {
    console.log(req.params.id);
    var sql = `delete from product where id = ${req.params.id}`;
    db.query(sql, (err, res1) => {
        if (err) throw err;
        res.send('Delete Success!')
    })
})

app.listen(port, () => console.log('API jalan di port '+port))