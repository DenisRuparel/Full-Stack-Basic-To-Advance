var express = require('express');
const Student = require('../models/student');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function (req, res, next) {
  res.render('add');
});

router.post('/add', function (req, res, next) {
  var myData = {
    name: req.body.txt1,
    mobile: req.body.txt2,
  }
  Student.create(myData)
    .then(() => res.send("Data Saved"))
    .catch(err => console.log(err))
});

router.get('/display', function (req, res, next) {
  Student.find()
    .then((data) => res.render('display', { data: data }))
    .catch(err => console.log(err))
});

router.get('/delete/:id', function (req, res, next) {
  var id = req.params.id;
  Student.findByIdAndDelete({ _id: id })
    .then(() => res.redirect('/display'))
    .catch(err => console.log(err))
});

module.exports = router;