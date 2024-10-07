const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.send('Please enter valid numbers.');
  }

  const sum = num1 + num2;

  res.render('result', { sum });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
