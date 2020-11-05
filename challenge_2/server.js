const path =require('path');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello From server.js!')
})

app.listen(port, () => {
  console.log(`Cryptocurrency Charting Tool listening at http://localhost:${port}`)
})
