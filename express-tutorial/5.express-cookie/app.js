var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.cookie('test', 'value', {maxAge: 5000});
    res.cookie('name', 'express').send('cookie set'); //Sets name=express

});
app.get('/delete', function(req, res){
	res.clearCookie('name');
	res.send('cookie name cleared');

});

app.listen(8060,function(err,res){
if(err){
	console.log('server error');
}
else{
	console.log('server started port 8060');
}
});	