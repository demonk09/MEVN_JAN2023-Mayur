const http = require('http');

var ts2 = require("./taskserver2");

http.createServer(function (req, res) {

    // RES: REFERS TO REQUEST
    // RESPONSE HAS 3 features HEAD AND BODY AND TextTrackList
    // HEAD : CODE INDICATES SUCESS OR FAILURE OR SATUS OF A CODE
    // 200 status code is a success
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("the time is "+dt.getCurrentDate());
  res.write('SERVER1');
  res.end();
}).listen(8080);