const express = require('express');
const path = require('path');

const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(express.static(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

