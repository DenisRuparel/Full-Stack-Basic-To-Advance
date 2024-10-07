const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'denisruparel28@gmail.com', 
      pass: 'ytzf tdnn rjir uzwr'   
    }
  });

  const mailOptions = {
    from: email,
    to: 'deniskalpeshbhai436@gmail.com',
    subject: 'New Contact Form Submission',
    text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.send('Email sent successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
