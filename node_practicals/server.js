const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

let counter = 0;

app.get('/counter', (req, res) => {
  res.json({ counter });
});

app.post('/counter/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

app.post('/counter/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});