const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port=80;

const bodyParser = require("body-parser");
// var passport = require("passport");
// var    LocalStrategy = require("passport-local");
//  var   passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require('mongoose');
// const { use } = require("passport");
// var session=require('express-session');
// var flash=require('connect-flash');
mongoose.connect('mongodb://localhost');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

// app.use(session({
//   secret: "DreAm is not DREAM or dream...there's a secret :)",
//   cookie: {maxAge:60000},
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(flash());

// //mongoose schema
var dreamSchema = new mongoose.Schema({
  name: Number,
  password: String,
  
});

var dream = mongoose.model('dream', dreamSchema);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded())

app.use(express.static(__dirname))
// app.use(express.urlencoded())


// app.set(path.join(__dirname, '/index1.html'))
// app.get('/', (req, res)=>{
    //     const params = {}
//     res.status(200).render('/index1.html', params);
// })


app.get('/', function(req, res) {
  // document.getElementById('overlay').style.display="none";
    res.sendFile(path.join(__dirname, '/login/index1.html'));
  });

  app.post('/signupform', (req, res)=>{
    var mydata=new dream(req.body)
    // mydata.save().then(()=>{
    //     res.send("Item saved to database").render('/')
    // }).catch(()=>{
    //     res.statusCode(404).send("Couldn't save")
    // })


    db.collection('dreams').insertOne(mydata,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
    return res.redirect('/login/index1.html');

    
  })

  app.post('/loginform',async(req,res)=>{
try{

  const loginid=req.body.name;
  // console.log(loginid)
  var pw=req.body.password;
  const usermail=await dream.findOne({name:loginid});
  const password=usermail.password;
  if(pw==password)
  {

    res.redirect('/login/index1.html')
  }
  else{
    // alert("incorrect credentials");
    // req.flash('message','Invalid credentials')
    res.redirect('/index2.html')
    // res.status(404)
  }
  // console.log(loginid);
  // console.log(usermail);
  
  
} catch(error){
  // res.status(404).send("invalid email")
  res.redirect('/index2.html')
}
  })
  app.post('/forgot',async(req,res)=>{
try{

  const loginname=req.body.name;
  // console.log(loginname)
  var pw=req.body.password;
  const usermail=await dream.findOne({name:loginname})
  if(usermail.name==loginname){
    const update= await dream.updateOne({name:loginname},{$set:{password:pw}});
    // console.log(update.name);
    res.redirect('/login/index1.html');

  }
else
res.redirect('/index2.html');

} catch(error){
  // res.status(404).send("invalid number")
  res.redirect('/index2.html')
}
  })

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});