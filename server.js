const express = require('express');
const path = require('path');

const app = express()


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(express.static(__dirname, 'index.html'))
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

