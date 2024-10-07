const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'denisruparel', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', (req, res) => {
  res.send(`
    <h1>Session Example</h1>
    <form action="/create" method="post">
      <label for="data">Enter data:</label>
      <input type="text" id="data" name="data"><br><br>
      <button type="submit">Create Session</button>
    </form>
    <form action="/read" method="get">
      <button type="submit">Read Session</button>
    </form>
    <form action="/remove" method="post">
      <button type="submit">Remove Session</button>
    </form>
  `);
});

app.post('/create', (req, res) => {
  req.session.data = req.body.data;
  res.send(`
    <p>Session data created: ${req.session.data}</p>
    <a href="/">Back</a>
  `);
});

app.get('/read', (req, res) => {
  const data = req.session.data;
  if (data) {
    res.send(`
      <p>Session data: ${data}</p>
      <a href="/">Back</a>
    `);
  } else {
    res.send(`
      <p>No session data found.</p>
      <a href="/">Back</a>
    `);
  }
});

app.post('/remove', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(`
        <p>Error removing session data.</p>
        <a href="/">Back</a>
      `);
    }
    res.send(`
      <p>Session data removed.</p>
      <a href="/">Back</a>
    `);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});