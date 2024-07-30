const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/markentry', (req, res) => {
  res.sendFile(__dirname + '/views/markentry.html')
})

app.get('/marksheet', (req, res) => {
  var mark1 = parseInt(req.query.mark1)
  var mark2 = parseInt(req.query.mark2)
  var mark3 = parseInt(req.query.mark3)
  var mark4 = parseInt(req.query.mark4)
  var mark5 = parseInt(req.query.mark5)

  var total = mark1 + mark2 + mark3 + mark4 + mark5

  var avg = total / 5;

  if (mark1 < 30 || mark2 < 30 || mark3 < 30 || mark4 < 30 || mark5 < 30)
    res.send(`<span style="color: red"><h1>You are Failed! Need to Work Hard...!</span></h1>
      <table border="1">
      <tr>
        <th>Subject1</th>
        <td>${mark1}</td>
      </tr>
      <tr>
        <th>Subject2</th>
        <td>${mark2}</td>
      </tr>
      <tr>
        <th>Subject3</th>
        <td>${mark3}</td>
      </tr>
      <tr>
        <th>Subject4</th>
        <td>${mark4}</td>
      </tr>
      <tr>
        <th>Subject5</th>
        <td>${mark5}</td>
      </tr>
    `)

  res.send(`<h1><span style="color: green">Congratulations...! Your Total Score is: ${total} </span> & <span style="color: blue">Your Average is: ${avg}</span></h1>
    <table border="1">
      <tr>
        <th>Subject1</th>
        <td>${mark1}</td>
      </tr>
      <tr>
        <th>Subject2</th>
        <td>${mark2}</td>
      </tr>
      <tr>
        <th>Subject3</th>
        <td>${mark3}</td>
      </tr>
      <tr>
        <th>Subject4</th>
        <td>${mark4}</td>
      </tr>
      <tr>
        <th>Subject5</th>
        <td>${mark5}</td>
      </tr>
    `)

})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html')
})

app.get('/search/:id', (req, res) => {
  var mySearch = req.params.id
  res.send('Hello Search By ID is: ' + mySearch)
})

app.get('/search', (req, res) => {
  var mySearch = req.query.q
  res.send('Hello Search is: ' + mySearch)
})

app.get('*', (req, res) => {
  res.send('<h1>404 Not Found!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})