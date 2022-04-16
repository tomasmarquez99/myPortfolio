const express = require('express');
const bodyParser = require("body-parser")
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect("/index.html")
})

//app.get('/contact-me', (request, response)=>{
  //response.render('contact-me')
//})



app.post('/contact-me', urlencodedParser, (request, response) =>{
response.redirect('/')
  console.log(request.body);
  


  let transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'tomasmarquezxyz@gmail.com',
    pass: 'tomaspenarol1891'
  }
});
  
  const mailOptions = {
    from: 'tomasmarquezxyz@gmail.com',
  to: 'btomasmarquez@gmail.com',
  subject: 'From tomasmarquez.xyz: ' + request.body.name,
  html: "email: " + request.body.email + "<br> <br>" + request.body.message
}
  
  transporter.sendMail(mailOptions, function(error,info){
    if (error) {
        console.log(error)
    }else {
        console.log('Email sent')
    }
  })
  
})

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbAdmin:hdNObGQEuTOAjcKK@cluster0.c5bi6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})


