const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
  res.send('This is a brief description of the server or project.');
});

app.use((req, res) => {
  res.status(404).send('Not found!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});