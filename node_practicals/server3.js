const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/read-file', (req, res) => {
  const filePath = path.join(__dirname, 'sample.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    }
    
    res.send(`<pre>${data}</pre>`);
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});