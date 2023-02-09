var http = require('http');

var dt = require('./ownModule');
// const { features } = require('process');

// var dt =require('');

http.createServer(function (req, res) {

    // RES: REFERS TO REQUEST
    // RESPONSE HAS 3 features HEAD AND BODY AND TextTrackList
    // HEAD : CODE INDICATES SUCESS OR FAILURE OR SATUS OF A CODE

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the time is "+dt.getCurrentDate());
//   res.write('Hello World!');
  res.end();
}).listen(8080);

// console.log(dt.getCurrentDate());