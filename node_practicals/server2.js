const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});