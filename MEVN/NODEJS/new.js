const fs = require('fs')

fs.readFile('./demofile.txt', (err, inputD) =>
 {
   if (err) throw err;
   
      console.log(inputD.toString());
})