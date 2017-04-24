const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./src/server/static/'));
app.use(express.static('./dist/'));
app.use(bodyParser.urlencoded({ extended: false }));

// start the server
app.listen(3010, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

mongoose.connect('mongodb://localhost/my_db1');
var personSchema = mongoose.Schema({
    name: String,
    password: String
});
var Person = mongoose.model("person", personSchema);

app.post('/person', function(req, res){
    
    var personInfo = req.body; //Get the parsed information
    var newPerson = new Person({
            name: personInfo.name,
            password: personInfo.password
        });
        newPerson.save(function(err, res){
            if(err)
               console.log("Error::"+err);
            else
               console.log("inserting record");
            });
   
});