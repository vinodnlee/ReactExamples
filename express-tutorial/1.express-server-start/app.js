var express = require('express');
var app=express();
var port=8060;

/*app.listen(port);
console.log('server started')*/
app.listen(port,function(err,res){
if(err){
	console.log('server error');
}
else{
	console.log('server test started at port 8060');
}
});
app.get('/',function(req,res){
	res.send("Hello World");
});