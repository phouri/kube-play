const express = require('express');
const request = require('request-promise-native');
const app = express();

function ensureSec(req, res, next) {  
  if (req.headers['x-forwarded-proto'] == 'http') {
    console.log('Redirecting to https', `https://${req.hostname}${req.url}`);
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  next();
}
app.enable('trust proxy');
app.use(ensureSec);
app.use(express.static('dist'));
app.get('/backend-test', async (req, res) => {
  const api = await request.get('http://backend:8080/api')
  res.send(api);
});
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