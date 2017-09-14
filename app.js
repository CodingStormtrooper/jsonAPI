//var fs = require('fs');
var path = require('path');
//reads json file and outputs as plain text
//var data = fs.readFileSync('words.json');
var express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.use(express.static('website'));
//plain text
//var words = JSON.parse(data);
//console.log(words);
console.log("Server is working");

//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var server = app.listen(3000);




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/website/index.html');

});

app.post('/login', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phonenumber = req.body.phonenumber;
  var contact = {
    name: name,
    email: email,
    phonenumber: phonenumber

  }
  console.log(contact);

  //var data = JSON.stringify(contact)
  res.send("Thank you for signing up " + name + ". We wil be contacting you at: "
+ email);
});

app.listen(1337, function(){
  console.log('Listening on port 1337');
});
