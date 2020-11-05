const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/hello', (req, res) => {
//   res.send('Hello From server.js!');
// });

app.get('/prices', (req, res) => {
  const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  axios.get(url)
    .then((pricesResponse) => {
      res.status(200).send(pricesResponse.data);
    })
    .catch((err) => res.sendStatus(400));
});

app.listen(port, () => {
  console.log(`Cryptocurrency Charting Tool listening at http://localhost:${port}`);
});
