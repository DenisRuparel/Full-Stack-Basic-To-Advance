const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact Page.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});