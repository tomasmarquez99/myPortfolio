const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator");
const { request } = require('http');
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.sendFile(express.static(__dirname, 'index.html'))
})

app.get('/contact-me', function (request, response){
  return response.render('contact-me')
})

app.post('/contact-me', urlencodedParser, (request, response) =>{
  response.json(request.body)
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

