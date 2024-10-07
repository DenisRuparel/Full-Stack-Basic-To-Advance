const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display a form to take two numbers from the user
app.get('/', (req, res) => {
  res.send(`
    <form action="/calculate" method="post">
      <label for="num1">Number 1:</label>
      <input type="text" id="num1" name="num1"><br><br>
      <label for="num2">Number 2:</label>
      <input type="text" id="num2" name="num2"><br><br>
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Route to handle the form submission and perform arithmetic operations
app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.send('Please enter valid numbers.');
  }

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : 'Infinity';

  res.send(`
    <p>Addition: ${addition}</p>
    <p>Subtraction: ${subtraction}</p>
    <p>Multiplication: ${multiplication}</p>
    <p>Division: ${division}</p>
    <a href="/">Back</a>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
