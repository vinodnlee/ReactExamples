var express = require('express');
var app=express();
var port=8070;

//without callback . this leads to aynchronous callback
app.listen(port,function(err,res){
if(err){
	console.log('server error');
}
else{
	console.log('server started at port 8070');
}
});
// with callback . this helps us to do the other task simultaneously 

app.get('/',function(req,res){
	res.send("Learn Express");
});
app.get('/getcall', function(req, res){
	res.send("Get Call triggered");
});
app.post('/postcall', function(req, res){
	res.send("Post Call triggered");
});

app.all('/all', function(req, res){
	res.send("You just called the all method at triggered by get/post!\n");
});
