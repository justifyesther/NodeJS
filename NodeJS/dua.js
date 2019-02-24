// var siapa = require('./satu');

// console.log(siapa);
// siapa.berjalan();

// var assert = require('assert');
// var minum = {kopi:['luwak', 'hitam', 'susu']};

// //CARA MEMBUAT ERROR : 
// try {
//     assert.strictEqual(minum.kopi.length, '3');
// }
// catch(err) {
//     console.log('Error Mbak')
// }

// assert.equal(minum.kopi.length, 4);

//URL Module :
// var url = require('url');
// var link = 'http://bersyukur.id/bahagiaSelalu?nama=Ester&umur=18';
// var x = url.parse(link, true);

// console.log('Host = ' + x.host);
// console.log('Path = '+ x.pathname);
// console.log('Find = ' + x.search);

// var xdata = x.query;
// console.log(xdata);

//FS Module :
// const fs = require('fs');

// fs.writeFileSync('halo.txt', 'Hai Guys ! This is Ester');
// fs.appendFileSync('halo.txt', '\nLets Go');

//FS Module :
// const fs = require('fs');

// var x = fs.readFileSync('halo.txt');
// console.log(x);

// var y = fs.readFile('halo.txt', function(err, data) {
//     console.log(data)
// });

//FS Module UTF-8 :
// const fs = require('fs');

// var x = fs.readFileSync('halo.txt', 'utf8');
// console.log(x);

// var y = fs.readFile('halo.txt', 'utf8', function(err, data) {
//     console.log(data)
// });

//CATATAN :
// Stream : jalur untuk kirim datanya
// Buffer : penantian datanya(halte datanya)

// FS Read Stream :
// var fs = require('fs');

// var bacaStream = fs.createReadStream(__dirname+'/halo.txt', 'utf8');

// bacaStream.on('data', function(potData) {
//     console.log('****** Potongan Data Masuk: ******');
//     console.log(potData);
// })

//  Fs Read Stream :
var fs = require('fs');

var bacaStream = fs.createReadStream(__dirname+'/halo.txt', 'utf8');

bacaStream.on('data', function(potData) {
    console.log('****** Potongan Data Masuk: ******');
    console.log(potData.toString);
})
