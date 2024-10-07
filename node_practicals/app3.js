const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const port = 3000;

app.use(fileUpload({
  limits: { fileSize: 2 * 1024 * 1024 },
}));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0)
    return res.status(400).send('No files were uploaded.');

  const file = req.files.file;

  if (file.size > 2 * 1024 * 1024) 
    return res.status(400).send('File size exceeds 2MB limit.');

  const allowedTypes = /jpeg|jpg|png|gif|pdf/;
  const extname = allowedTypes.test(path.extname(file.name).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (!mimetype || !extname) {
    return res.status(400).send('Error: Images and PDFs only.');
  }

  file.mv(path.join(__dirname, 'uploads', file.name), err => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(`
      <p>File uploaded successfully.</p>
      <p>Filename: ${file.name}</p>
      <a href="/">Back</a>
    `);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});