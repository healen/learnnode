var express = require("express");
var app=express();


app.get("/index/:id(\\d+)",function(req,res,next){
	if(req.params.id<10){
		next()
	}else{
		res.send(req.params.id);
	}
})
app.get("/index/:id(\\d+)",function(req,res){
	res.send(">10")
})



app.listen(1337,"localhost",function(){
	console.log("服务器连接成功:http://localhost:1337");
})