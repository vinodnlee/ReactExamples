var express=require('express');
var app=express();
var port=8060;


app.listen(port,function(err,res){
if(err){
	console.log('server error');
}
else{
	console.log('server started');
}
});
 
var log = function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
}
var log2=function(req,res,next){
	console.log("it's the second middleware"+ Date.now());
	next();
}
var log3=function(req,res,next){
	console.log("it's the last middleware"+ Date.now());
	next();
}
app.use(log,log2);
//app.use(log2);


app.get('/', function(req, res){
	res.send('get getting triggered');	
});			

app.get('/employeeid',log3, function(req, res){
	res.send('my employee id is 100000');	
});
