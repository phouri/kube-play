const express = require('express');

const app = express();

app.use(express.static('dist'));

app.all('*', function(req,res) {
  res.send('Hello World');
});

app.listen(8080, (err) => {
  if (err) {
    console.error('Error listening');
  } else {
    console.log('Listening on 8080');
  }
});

// require('./server/db');