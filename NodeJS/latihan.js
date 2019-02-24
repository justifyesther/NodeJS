// const chalk = require('chalk');

// console.log(chalk.red('Ini Merah'));
// console.log(chalk.yellow('Ini Kuning'));
// console.log(chalk.green('Ini Hijau'));

//Keyword => sebuah function

//Topik Baru :
// var http = require('http');

// var server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     // res.end('Halo Semuanya!'); // pakai node
//     // res.end('Halo Semuanyaaaaaaa!'); //pakai nodemon
//     res.end('Halo Semuanya!'); //pakai nodemon
// });

// server.listen(1997);
// console.log('Server aktif. Listening prot 1997.'); //Bukanya di browser

//TOPIK BARU :
var http = require('http');

var server = http.createServer((req,res) => {
    console.log(req.url)
    console.log('check')
    console.log(__dirname)
    res.writeHead(403, {'Content-Type' : 'text/html'});
    // res.end('Halo Semuanya!'); // pakai node
    // res.end('Halo Semuanyaaaaaaa!'); //pakai nodemon
    res.end('<h1>Halo Semuanya!<h1>'); //pakai nodemon
    
});

server.listen(port);
console.log('Server aktif. Listening prot' + port); //Bukanya di browser


