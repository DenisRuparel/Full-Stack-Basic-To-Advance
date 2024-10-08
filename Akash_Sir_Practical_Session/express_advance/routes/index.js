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

router.get('/fileupload', function (req, res, next) {
  res.render('fileupload')
});

router.post('/fileupload', function (req, res, next) {
  var myFile = req.files.file1
  var fileName = req.files.file1.name
  var fileMimeType = req.files.file1.mimetype

  console.log(fileMimeType)
  myFile.mv("public/" + fileName, function (err) {
    res.send('file uploaded')
  })

  // const myFile = req.files.file1;

  // const allowedTypes = ['image/png', 'image/jpeg'];
  // if (!allowedTypes.includes(myFile.mimetype))
  //   return res.status(400).send('Only .png and .jpg files are allowed!');

  // const maxSize = 2 * 1024 * 1024; 
  // if (myFile.size > maxSize)
  //   return res.status(400).send('File size should be less than 2 MB!');

  // const fileName = myFile.name;
  // myFile.mv("public/" + fileName, function (err) {
  //   if (err)
  //     return res.status(500).send('Error while uploading the file.');
  //   res.send('File uploaded successfully.');
  // });

});

module.exports = router;
