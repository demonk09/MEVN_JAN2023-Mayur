const fs = require('fs')
fs.readFile('./demo.txt', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})