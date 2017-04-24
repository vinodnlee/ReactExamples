var express=require('express');
var bodyParser = require('body-parser');
var app=express();
var port=8060;


app.listen(port,function(err,res){
if(err){
	console.log('server error');
}
else{
	console.log('server started port 8060');
}
});
app.use(bodyParser.urlencoded({ extended: false })) 
app.get('/', function(req, res){
  var html = '<form action="/login" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});

app.post('/login', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});