var express = require("express");
var app=express();


app.get("/index/:id/:name",function(req,res){
	var str="";

	for(var key in req.params){
		
			str+=key+"="+req.params[key]+"<br />"
		
	}
	res.send(str);
})



app.listen(1337,"localhost",function(){
	console.log("服务器连接成功:http://localhost:1337");
})