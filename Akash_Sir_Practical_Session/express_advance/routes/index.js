var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/sendmail', function (req, res, next) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "deniskalpeshbhai436@gmail.com",
      pass: "vyua kvrp dmgg rhjs",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "deniskalpeshbhai436@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);


  res.render('sendmail', { title: 'Express' });
});

router.post('/contactprocess', function (req, res, next) {
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = parseInt(a) + parseInt(b)
  res.render('ans', { mya: a, myb: b, myc: c });
});

module.exports = router;
