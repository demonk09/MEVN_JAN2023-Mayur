const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello This is mayur');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
app.use(express.static('public'));
