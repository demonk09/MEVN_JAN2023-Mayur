const moduleB = require('./moduleB');
const fs = require('fs');

function que1() {
  console.log('Module A is calling Module B...');
  moduleB();
  var data =   moduleB();
 
}

module.exports = que1;

fs.writeFile('./demofile.txt', data, (err) => {
    if (err) throw err;
    console.log('Data written to file!');
  });

