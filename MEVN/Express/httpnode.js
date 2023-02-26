const express = require('express');
const app = express();
const dt = require('./ownModule');

app.get('/', (req, res) => {
    res.status(200).send(` The date and time are: ${dt.getCurrentDate()}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});