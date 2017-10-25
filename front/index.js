const express = require('express');

const app = express();
function ensureSec(req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'http') {
    return res.redirect('https://' + req.url);
  }
  next();
}
app.enable('trust proxy');
app.use(ensureSec);
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
// console.log('Starting db connection');
// require('./server/db');